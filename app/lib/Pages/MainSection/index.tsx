'use client';

import { Button } from '@/components/ui/button';
import { Heading, SubHeading } from '../components';
import { useEffect, useRef, useState } from 'react';
import DemoDialog from './DemoDialog';
import Arrow from './Arrow';
import RecordingButton from './RecordingButton';
import toast from 'react-hot-toast';
import RecordPlugin from 'wavesurfer.js/dist/plugins/record.js';
import WaveSurfer from 'wavesurfer.js';
import { Square } from 'lucide-react';
import { motion } from 'framer-motion';
import AddLottieAnimation from '@/components/AddLottieAnimation';
import { gpt, whisper } from './script';
import cn from '@/utils/cn';

interface IResponse {
  type:
    | 'paragraph'
    | 'heading_1'
    | 'heading_2'
    | 'bulleted_list_item'
    | 'title';
  content: string;
}

export default function MainSection() {
  const [showDemo, setShowDemo] = useState(false);

  const [startProgress, setStartProgress] = useState(false);

  const [currentProgress, setCurrentProgress] = useState('initial');

  const [remainingTime, setRemainingTime] = useState(0);

  const [uploading, setUploading] = useState(false);

  const [trackUpload, setTrackUpload] = useState('');

  const [displayResult, setDisplayResult] = useState<IResponse[]>([
    {} as IResponse,
  ]);

  const [displayTranscription, setDisplayTranscription] = useState('');

  const [audioFile, setAudioFile] = useState<File | null>(null);

  const waveformRef = useRef<HTMLDivElement>(null);
  const wavesurferRef = useRef<WaveSurfer | null>(null);
  const recordRef = useRef<RecordPlugin | null>(null);

  const streamRef = useRef<MediaStream | null>(null);

  const mediaRecorder = useRef<MediaRecorder | null>(null);

  const recordingTimer = useRef<number | null>(null);

  const stopRecording = () => {
    if (mediaRecorder.current) {
      mediaRecorder.current.stop();
    }

    if (recordRef.current) {
      recordRef.current.stopRecording();
    }
  };

  const startRecording = () => {
    setRemainingTime(180); // 3 minutes in seconds

    if (streamRef.current) {
      const supportWebM = MediaRecorder.isTypeSupported('audio/webm');

      const media = new MediaRecorder(streamRef.current, {
        mimeType: supportWebM ? 'audio/webm' : 'audio/mp4',
      });

      mediaRecorder.current = media;
      let localAudioChunks: Blob[] = [];

      mediaRecorder.current.ondataavailable = (event) => {
        if (typeof event.data === 'undefined' || event.data.size === 0) return;
        localAudioChunks.push(event.data);
      };

      mediaRecorder.current.onstop = () => {
        if (supportWebM) {
          const file = new File(localAudioChunks, 'audio.webm', {
            type: 'audio/webm',
          });

          setAudioFile(file);
        }
        setRemainingTime(0);
      };

      mediaRecorder.current.start();

      recordingTimer.current = window.setInterval(() => {
        setRemainingTime((prevRemainingTime) => {
          if (prevRemainingTime <= 1) {
            clearInterval(recordingTimer.current!);
            stopRecording();
            return 0;
          }
          return prevRemainingTime - 1;
        });
      }, 1000);
    }
  };

  useEffect(() => {
    if (startProgress && waveformRef.current) {
      const wavesurfer = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: 'rgb(59, 130, 246)',
      });

      const recordPlugin = wavesurfer.registerPlugin(RecordPlugin.create());

      wavesurferRef.current = wavesurfer;
      recordRef.current = recordPlugin;

      return () => {
        wavesurfer.destroy();
        wavesurferRef.current = null;
        recordRef.current = null;
      };
    }
  }, [startProgress]);

  useEffect(() => {
    if (uploading && audioFile) {
      (async () => {
        try {
          setTrackUpload('Transcribing your audio...');

          const whisperResponse = await whisper(audioFile);

          setDisplayTranscription(whisperResponse.text);

          setTrackUpload('Transcription is being analysed by AI...');

          const userPrompt = `Audio transcription:\n${whisperResponse.text}`;

          const gptResponse = await gpt(userPrompt);

          const actualGptResponse = gptResponse.choices[0].message.content;
          const jsonGptResponse: IResponse[] = JSON.parse(actualGptResponse);

          setDisplayResult(jsonGptResponse);

          setCurrentProgress('display-result');
        } catch (error) {
          setCurrentProgress('error');
          console.error(error);
        }
      })();
    }
  }, [uploading, audioFile]);

  return (
    <section className="max-w-[1300px] mx-auto text-landingPage-textSurfaceVariant dark:text-landingPage-textSurfaceVariant flex flex-col items-center justify-center text-center gap-4 pt-6 px-4 min-h-[82vh]">
      {(() => {
        if (currentProgress === 'initial') {
          return (
            <>
              <header className="flex flex-col gap-6">
                <Heading as="h1">
                  Make a structured notes from your messy voice
                </Heading>
                <SubHeading>
                  Give it a shot by tapping the record button and start
                  speaking. Audea will do its magic once you&apos;re done.
                </SubHeading>
              </header>

              <Button variant="ghost" onClick={() => setShowDemo(true)}>
                See Audea demo
              </Button>

              <Arrow />

              <DemoDialog open={showDemo} setOpen={setShowDemo} />

              <RecordingButton
                onClick={() => {
                  setStartProgress(true);
                  setCurrentProgress('talking');

                  toast
                    .promise(getMicrophonePermission(), {
                      loading: 'Getting your microphone ready...',
                      success: 'Microphone is ready!',
                      error: 'Microphone is not ready!',
                    })
                    .then((data) => {
                      streamRef.current = data;

                      const wavesurfer = wavesurferRef.current;
                      const recordPlugin = recordRef.current;

                      if (!wavesurfer || !recordPlugin) return;

                      const isPlaying = wavesurfer.isPlaying();

                      if (isPlaying) {
                        wavesurfer.pause();
                      }

                      recordPlugin
                        .startRecording()
                        .then(() => {
                          startRecording();
                        })
                        .catch((error) => {
                          console.error('Recording error:', error);
                        });
                    });
                }}
              />
            </>
          );
        } else if (currentProgress === 'talking') {
          return (
            <>
              <motion.section
                className="max-w-[1000px] w-full min-h-[400px] h-full max-h-[400px] bg-gradient-to-br from-landingPage-linierGray to-landingPage-linierEndGray dark:from-landingPage-linierGray dark:to-landingPage-linierEndGray rounded-2xl shadow-inner py-4 px-2 flex flex-col items-center justify-center gap-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div ref={waveformRef} className="w-full h-fit" />

                <p className="font-base text-lg">
                  Your recording is in session! Remaining time{' '}
                  <span className="text-red-500">
                    {Math.floor(remainingTime / 60)}:
                    {remainingTime % 60 < 10 && remainingTime % 60 !== 0
                      ? `0${remainingTime % 60}`
                      : remainingTime % 60}
                    {remainingTime % 60 === 0 ? '0' : ''}
                  </span>
                </p>
              </motion.section>

              <motion.button
                onClick={() => {
                  stopRecording();
                  setCurrentProgress('processing-audio');
                  setUploading(true);
                }}
                type="button"
                className="w-fit h-fit p-4 rounded-full text-white bg-red-500"
                whileHover={{ scale: 1.1 }}
              >
                <Square className="w-10 h-10" />
              </motion.button>
            </>
          );
        } else if (currentProgress === 'processing-audio') {
          return (
            <motion.section
              className="max-w-[1000px] w-full min-h-[400px] h-full max-h-[400px] bg-gradient-to-br from-landingPage-linierGray to-landingPage-linierEndGray dark:from-landingPage-linierGray dark:to-landingPage-linierEndGray rounded-2xl shadow-inner py-4 px-2 flex flex-col items-center justify-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <AddLottieAnimation
                animationConfig={{
                  path: 'https://assets4.lottiefiles.com/packages/lf20_g0rr0uyo.json',
                  loop: true,
                  autoplay: true,
                }}
                className="w-72 h-fit"
              />

              <p className="font-medium">{trackUpload}</p>
            </motion.section>
          );
        } else if (currentProgress === 'display-result') {
          return (
            <motion.section
              className="max-w-[1000px] w-full h-fit bg-gradient-to-br from-landingPage-linierGray to-landingPage-linierEndGray dark:from-landingPage-linierGray dark:to-landingPage-linierEndGray rounded-2xl shadow-inner flex flex-col items-center justify-center gap-2 mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <section className="flex flex-col gap-2 text-justify p-4 md:p-8">
                {displayResult.map(({ type, content }, i) => {
                  if (type === 'heading_1' || type === 'heading_2') {
                    return <h6 key={i}>{content}</h6>;
                  } else if (type === 'bulleted_list_item') {
                    return <li key={i}>{content}</li>;
                  } else if (type === 'paragraph') {
                    return <p key={i}>{content}</p>;
                  } else if (type === 'title') {
                    return (
                      <h6 key={i} className="font-medium text-xl">
                        {content}
                      </h6>
                    );
                  } else {
                    return <></>;
                  }
                })}
              </section>

              <div className="bg-gradient-to-r from-landingPage-audeaBlue via-landingPage-textSurfaceVariant to-landingPage-audeaBlue dark:from-landingPage-audeaBlue dark:via-landingPage-textSurfaceVariant dark:to-landingPage-audeaBlue h-[2px] w-full" />

              <section className="w-full h-fit flex flex-col gap-0 text-justify p-4 md:p-8">
                <p className="underline">Your transcription:</p>
                <p>{displayTranscription}</p>
              </section>

              <div className="bg-gradient-to-r from-landingPage-audeaBlue via-landingPage-textSurfaceVariant to-landingPage-audeaBlue dark:from-landingPage-audeaBlue dark:via-landingPage-textSurfaceVariant dark:to-landingPage-audeaBlue h-[2px] w-full" />

              <section className="flex flex-col items-center justify-center gap-2 font-medium text-xl w-full h-fit text-center p-4 md:p-8">
                <p>Do you like it? Sign up and create unlimited notes.</p>

                <a
                  href="https://app.audea.id/signup"
                  className="w-fit h-fit block"
                  target="_blank"
                >
                  <Button
                    tabIndex={-1}
                    className={cn('flex items-center justify-center gap-2')}
                  >
                    <div className="w-fit h-fit rounded-sm overflow-hidden">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 0H24V24H0V0Z" fill="#2C5EA8" />
                        <path
                          d="M10.0568 13.6746H13.9839L12.062 7.68027H12.0207L10.0568 13.6746ZM9.82947 6.17104C10.1814 5.22043 10.9874 4.45581 12.0413 4.45581C13.1366 4.45581 13.9019 5.1791 14.2525 6.17104L18.3043 17.415C18.4276 17.7456 18.4696 18.0356 18.4696 18.1803C18.4696 18.9862 17.8076 19.5442 17.0437 19.5442C16.1751 19.5442 15.7411 19.0896 15.5344 18.4696L14.9145 16.5264H9.16818L8.54822 18.4489C8.34157 19.0896 7.90693 19.5442 7.05965 19.5442C6.23303 19.5442 5.53041 18.9242 5.53041 18.0976C5.53041 17.767 5.63374 17.519 5.67507 17.415L9.82947 6.17104Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <span className="block">Sign up</span>
                  </Button>
                </a>
              </section>
            </motion.section>
          );
        } else if (currentProgress === 'error') {
          return (
            <motion.section
              className="max-w-[1000px] w-full min-h-[400px] h-full max-h-[400px] bg-gradient-to-br from-landingPage-linierGray to-landingPage-linierEndGray dark:from-landingPage-linierGray dark:to-landingPage-linierEndGray rounded-2xl shadow-inner py-4 px-2 flex flex-col items-center justify-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <AddLottieAnimation
                animationConfig={{
                  path: 'https://assets5.lottiefiles.com/packages/lf20_qpwbiyxf.json',
                  loop: false,
                  autoplay: true,
                }}
                className="w-72 h-fit"
              />

              <p className="font-medium">
                Error, please reload the page and try again
              </p>
            </motion.section>
          );
        } else {
          return <></>;
        }
      })()}
    </section>
  );
}

const getMicrophonePermission = (): Promise<MediaStream> => {
  return new Promise((resolve, reject) => {
    (async () => {
      if (!('MediaRecorder' in window)) {
        reject();
        toast.error('The MediaRecorder API is not supported in your browser.');
        return;
      }

      if (!MediaRecorder.isTypeSupported('audio/webm')) {
        reject();
        toast.error('Currently, recording on Safari in unavailable');
      }
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });
        resolve(mediaStream);
      } catch (err) {
        reject();
        toast.error('You denied permission to use the microphone.');
      }
    })();
  });
};

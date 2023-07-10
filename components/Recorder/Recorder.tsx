import Mic from "../../assets/logo/mic.png"
import Arrow from "../assets/logo/arrow.png"
import { useWhisper } from '@chengsokdara/use-whisper'
import { useState } from "react"
import { Typography } from "@material-tailwind/react";
import axios from "axios";
import { Player } from '@lottiefiles/react-lottie-player';
import Image from "next/image";

export default function Recorder() {
    const [isRecording, setIsRecording] = useState(false);
    const [isFinish, setIsFinish] = useState(false);
    const [contentFinish, setContentFinish] = useState([]) as any;
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const {
        transcript,
        startRecording,
        stopRecording,
      } = useWhisper({
        apiKey: "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",
        streaming: true,
        timeSlice: 1_000,
        whisperConfig: {
            language: ""
        },
        removeSilence: true,
      })

      const fetchAPI = async () => {
        setLoading(true);
        try {
            const apiEndpoint = "https://api.openai.com/v1/chat/completions";
            const apiKey = "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";
    
            const headers = {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`,
            };
    
            const requestBody = {
                max_tokens: 2048,
                messages: [
                { role: "system", content: "You are an assistant that only speaks the array of Javascript objects specified in the example below. Do not write any other text that isn\\'t formatted as the Javascript object specified below. In other words, I repeat, you are an assistant that only speaks the array of Javascript objects specified in the example below.\\n\\nYou are also an assistant that will be given two prompts: 1. Audio transcription, 2. Output language. The audio transcription has been provided by the Open AI Whisper API.\\n\\nFor every audio transcription:\\n1. Write a Title for the transcript in under 15 words. Rephrase the title to become attractive to read. Please follow the language of the transcript for the Title.\\n2. Then return the revitalized summary of the transcript with improved readability and engaging content for the readers.\\n\\nA paragraph can only contain around 4-6 sentences. You can make as many paragraphs as you like but you should make a minimum of 2 paragraphs.\\n\\nThere will be a preferred output language specified by the user:\\n- If the output language specified is \\\"Same as transcript\\\", then please return in that audio transcription original language.\\n- If the output language specified is anything other than \\\"Same as transcript\\\", please return the language of the array of Javascript objects specified below in that language. Specifically, the \\\"content\\\" properties should change to the language the user preferred.\\n\\nExample:\\n\\nIncoming user prompt:\\nAudio transcription:\\nThis audio recording documents a test of a no-code workflow using Google Drive and a single code step to reduce calls and improve efficiency. This audio recording also contains some practical tips on how to utilize everything.\\nWriting style: Default\\nOutput language: Same as transcript\\n\\nYour output as an assistant should look like these:\\n[{\\\"type\\\":\\\"title\\\",\\\"content\\\":\\\"Testing No-Code Workflow\\\"},{\\\"type\\\":\\\"paragraph\\\",\\\"content\\\":\\\"This audio recording documents a test of a no-code workflow using Google Drive and a single code step to reduce calls and improve efficiency. This audio recording also contains some practical tips on how to utilize everything.\\\"},{\\\"type\\\":\\\"paragraph\\\",\\\"content\\\":\\\"Furthermore, I hope that this can be a useful tools for youtubers.\\\"},{\\\"type\\\":\\\"paragraph\\\",\\\"content\\\":\\\"Another paragraph goes here\\\"}]\\n\\nPlease remember to not speak anything other than the array of Javascript objects specified above!" },
                { role: "user", content: `Audio transcription:\n ${transcript.text}` }
                ],
                model: "gpt-3.5-turbo-0301"
            };
    
            const response = await axios.post(apiEndpoint, requestBody, { headers });
            setContentFinish(JSON.parse(response.data.choices[0].message.content));
            setLoading(false);
            setIsFinish(true);
        } catch (error) {
            setError(true);
            setIsFinish(true);
        }
      };

      const resetAll = () => {
        setContentFinish([]);
        setError(false);
        setIsRecording(false);
        setIsFinish(false);
        setLoading(false);
      }

    return (
        <>
        <div  className="w-fit mb-20 flex flex-col items-center gap-10">
            {
                isRecording ? 
                <div className="d-flex flex-col p-2">
                    {
                        isFinish ?
                        <>
                            {
                                error ? 
                                <>
                                    <Player
                                        src='https://assets5.lottiefiles.com/packages/lf20_qpwbiyxf.json'
                                        className="player w-60"
                                        loop
                                        autoplay
                                    />
                                    <Typography
                                    as="p"
                                    className={`text-transparent bg-clip-text bg-gradient-to-b from-linierTitleTop to-linierTitleBottom text-lg xl:text-xl`}
                                    >
                                    Oops! Sorry something went wrong.
                                    </Typography> 
                                    <button className="bg-gradient-to-r text-white font-bold from-linierPurple to-linierMidBlue rounded-3xl mb-4 py-3 w-48" onClick={() => {setIsRecording(false);}}>Try again</button>
                                </>
                                :
                                <>
                                    <div className="bg-gradient-to-b from-linierGray to-linierEndGray px-8 py-10 flex flex-col gap-4 rounded-xl text-white text-left">
                                        <article className="flex flex-col gap-8">
                                            {contentFinish.map((v:any, i:any) => {
                                                if (v.type === 'title') {
                                                    return (
                                                        <h3 key={i} className="text-justify font-extrabold text-2xl xl:text-3xl">
                                                        {v.content}
                                                        </h3>
                                                    );
                                                } else {
                                                    return (
                                                        <p key={i} className="text-justify">
                                                        {v.content}
                                                        </p>
                                                    );
                                                }
                                            })}
                                        </article>
                                        <div className="bg-gradient-to-r from-linierLineSide via-white to-linierLineSide line-header-footer mt-10 z-50 py-0.5"></div>
                                        <Typography
                                        as="p"
                                        className={`text-white text-center font-bold text-lg xl:text-xl`}
                                        >
                                        Do you like it? <br /> Sign up and create unlimited notes with various formats.
                                        </Typography> 
                                        <a href="https://app.audea.id/signup" className="inline-block bg-gradient-to-r from-linierPurple to-linierMidBlue rounded-3xl px-3 py-2 text-center w-40 self-center" target="_blank">Sign Up</a>
                                    </div>
                                </>
                            }
                            
                        </>
    
                        :
                        <>
                            {
                                loading ? 
                                <>
                                    <Player
                                        src='https://assets4.lottiefiles.com/packages/lf20_g0rr0uyo.json'
                                        className="player w-60"
                                        loop
                                        autoplay
                                    />
                                    <Typography
                                    as="p"
                                    className={`text-transparent bg-clip-text bg-gradient-to-b from-linierTitleTop to-linierTitleBottom text-lg xl:text-xl`}
                                    >
                                    Processing your audio...
                                    </Typography> 
                                </>
                                :
                                <>
                                <Player
                                    src='https://assets9.lottiefiles.com/packages/lf20_znayulli.json'
                                    className="player w-36"
                                    loop
                                    autoplay
                                />
                                <div className="bg-gradient-to-b from-linierGray to-linierEndGray px-8 py-10 flex flex-col gap-4 mt-10 rounded-xl">
                                    <Typography
                                    as="p"
                                    className={`text-transparent bg-clip-text bg-gradient-to-b from-linierTitleTop to-linierTitleBottom text-lg xl:text-xl`}
                                    >
                                    {transcript.text ? transcript.text : `Recording on progress...`}
                                    </Typography> 
                                </div>
                                <button className="rounded-3xl w-60 mt-10 mb-4 p-2 text-white font-bold bg-gradient-to-r from-linierStartBtn via-linierMidBtn to-linierEndBtn" onClick={async () => { await stopRecording(); fetchAPI()}}>Finish recording</button>
                                </>
                            }
                        </>
                    }
                    
                </div>
                :
                <>
                <button className="bg-transparent underline border-0 text-linierBlue">
                    See how Audea works
                </button>
                <Image src={Arrow} alt="" />
                <button className="bg-gradient-to-r text-white font-bold from-linierPurple to-linierMidBlue rounded-full"
                onClick={() => {setIsRecording(true); startRecording()}}
                >
                    <Player
                        src='https://assets9.lottiefiles.com/packages/lf20_znayulli.json'
                        className="player w-36"
                    />
                </button>
                </>
            }
        </div>
        </>
    )
}

// import Mic from "../../assets/logo/mic.png"
// import Arrow from "../../assets/logo/arrow.png"
// import { useWhisper } from '@chengsokdara/use-whisper'
// import { useState } from "react"
// import { Typography } from "@material-tailwind/react";
// import axios from "axios";

// export default function RecorderBullet() {
//     const [isRecording, setIsRecording] = useState(false);
//     const [isFinish, setIsFinish] = useState(false);
//     const [contentFinish, setContentFinish] = useState([]) as any;
//     const [summaryFinish, setSummaryFinish] = useState([]) as any;
//     const [additionalInfoFinish, setAdditionalInfoFinish] = useState([]) as any;
//     const [bulletPointsFinish, setBulletPointsFinish] = useState([]) as any;

//     const {
//         transcript,
//         startRecording,
//         stopRecording,
//       } = useWhisper({
//         apiKey: process.env.REACT_APP_OPENAI_API_TOKEN,
//         autoTranscribe: true,
//         streaming: true,
//         timeSlice: 1_000,
//         whisperConfig: {
//             language: "id",
//             prompt: "You are an assistant that only speaks the array of Javascript object specified below.\\n\\nYou are an assistant that understand Markdown and you will convert it into an array of Javascript object that will be specified below in the example. Do not write text that isn\\'t formatted as the Javascript object specified below. In other words, I repeat, you are an assistant that only speaks the array of Javascript object specified below.\\n\\nYou are also an assistant that will be given prompt in the form of audio transcription and a writing style prompt. The audio transcription has been provided by the Open AI Whisper API.\\n\\nIf the user specified the writing style, please write the content according to that writing style. If the writing style specified as \\\"Default\\\", then just write normally.\\n\\nAlso, there will be preferred output language specified by the user:\\n- If the output language specified is \\\"Same as transcript\\\", then please return in that audio transcription original language. For example, if the audio transcription is in English, return in English, if the audio transcription is in Bahasa Indonesia, please also return in Bahasa Indonesia.\\n- If the output language specified is anything other than \\\"Same as transcript\\\", please return the language of the array of Javascript object specified below in that language. Specifically, the \\\"content\\\" properties should change to the language the user preferred.\\n\\nA paragraph can only contain around 4-6 sentences. Limit each list item to 100 words, and return no more than 5 points per list.\\n\\nFor every audio transcription:\\n1. Write a Title for the transcript in under 15 words. Please follow the language of the transcript for the title\\n2. Write \\\"Summary\\\" as a Heading 1\\n3. Write a summary of the provided transcript\\n4. Then write: \\\"Additional Info\\\" as Heading 1\\n5. Then write \\\"Main Point\\\" as Heading 2\\n6. Then return a list of the main points in the provided transcript.\\n7. Then write \\\"Action Items\\\" as Heading 2\\n8. Then return a list of action items.\\n9. Then write \\\"Follow Up Questions\\\" as Heading 2\\n10. Then return a list of follow up questions.\\n11. Then write \\\"Potential Arguments Against\\\"\\n12. Then return a list of potential arguments against the transcript.\\n\\nExample of incoming prompt:\\n\\nAudio transcription:\\nThis audio recording documents a test of a no-code workflow using Google Drive and a single code step to reduce calls and improve efficiency. This audio recording also contains some practical tips on how to utilize everything.\\nWriting style: Default\\nOutput language: Same as transcript\\n\\nThe audio transcription above will be converted to an array of Javascript object like this:\\n[{\\\"type\":\"title\",\"content\\\":\\\"Testing No-Code Workflow\\\"},{\\\"type\\\":\\\"heading_1\\\",\\\"content\\\":\\\"Summary\\\"},{\\\"type\\\":\\\"paragraph\\\",\\\"content\\\":\\\"This audio recording documents a test of a no-code workflow using Google Drive and a single code step to reduce calls and improve efficiency. This audio recording also contains some practical tips on how to utilize everything.\\\"},{\\\"type\\\":\\\"paragraph\\\",\\\"content\\\":\\\"Furthermore, I hope that this can be a useful tools for youtubers.\\\"},{\\\"type\\\":\\\"heading_1\\\",\\\"content\\\":\\\"Additional Info\\\"},{\\\"type\\\":\\\"heading_2\\\",\\\"content\\\":\\\"Main points\\\"},{\\\"type\\\":\\\"bulleted_list_item\\\",\\\"content\\\":\\\"point 1\\\"},{\\\"type\\\":\\\"bulleted_list_item\\\",\\\"content\\\":\\\"point 2\\\"},{\\\"type\\\":\\\"heading_2\\\",\\\"content\\\":\\\"Action Items\\\"},{\\\"type\\\":\\\"bulleted_list_item\\\",\\\"content\\\":\\\"point 1\\\"},{\\\"type\\\":\\\"bulleted_list_item\\\",\\\"content\\\":\\\"point 2\\\"},{\\\"type\\\":\\\"heading_2\\\",\\\"content\\\":\\\"Follow Up Questions:\\\"},{\\\"type\\\":\\\"bulleted_list_item\\\",\\\"content\\\":\\\"point 1\\\"},{\\\"type\\\":\\\"bulleted_list_item\\\",\\\"content\\\":\\\"point 2\\\"},{\\\"type\\\":\\\"heading_2\\\",\\\"content\\\":\\\"Potential Arguments Against:\\\"},{\\\"type\\\":\\\"bulleted_list_item\\\",\\\"content\\\":\\\"point 1\\\"},{\\\"type\\\":\\\"bulleted_list_item\\\",\\\"content\\\":\\\"point 2\\\"}] \\n\\nPlease remember to not speak anything other than the array of Javascript object specified above!"
//         }
//       })

//       const fetchAPI = async () => {
//         try {
//             const apiEndpoint = "https://api.openai.com/v1/chat/completions";
//             const apiKey = process.env.REACT_APP_OPENAI_API_TOKEN;
    
//             const headers = {
//                 "Content-Type": "application/json",
//                 "Authorization": `Bearer ${apiKey}`,
//             };
    
//             const requestBody = {
//                 max_tokens: 2048,
//                 messages: [
//                 { role: "system", content: "You are an assistant that only speaks the array of Javascript object specified below.\\n\\nYou are an assistant that understand Markdown and you will convert it into an array of Javascript object that will be specified below in the example. Do not write text that isn\\'t formatted as the Javascript object specified below. In other words, I repeat, you are an assistant that only speaks the array of Javascript object specified below.\\n\\nYou are also an assistant that will be given prompt in the form of audio transcription and a writing style prompt. The audio transcription has been provided by the Open AI Whisper API.\\n\\nIf the user specified the writing style, please write the content according to that writing style. If the writing style specified as \\\"Default\\\", then just write normally.\\n\\nAlso, there will be preferred output language specified by the user:\\n- If the output language specified is \\\"Same as transcript\\\", then please return in that audio transcription original language. For example, if the audio transcription is in English, return in English, if the audio transcription is in Bahasa Indonesia, please also return in Bahasa Indonesia.\\n- If the output language specified is anything other than \\\"Same as transcript\\\", please return the language of the array of Javascript object specified below in that language. Specifically, the \\\"content\\\" properties should change to the language the user preferred.\\n\\nA paragraph can only contain around 4-6 sentences. Limit each list item to 100 words, and return no more than 5 points per list.\\n\\nFor every audio transcription:\\n1. Write a Title for the transcript in under 15 words. Please follow the language of the transcript for the title\\n2. Write \\\"Summary\\\" as a Heading 1\\n3. Write a summary of the provided transcript\\n4. Then write: \\\"Additional Info\\\" as Heading 1\\n5. Then write \\\"Main Point\\\" as Heading 2\\n6. Then return a list of the main points in the provided transcript.\\n7. Then write \\\"Action Items\\\" as Heading 2\\n8. Then return a list of action items.\\n9. Then write \\\"Follow Up Questions\\\" as Heading 2\\n10. Then return a list of follow up questions.\\n11. Then write \\\"Potential Arguments Against\\\"\\n12. Then return a list of potential arguments against the transcript.\\n\\nExample of incoming prompt:\\n\\nAudio transcription:\\nThis audio recording documents a test of a no-code workflow using Google Drive and a single code step to reduce calls and improve efficiency. This audio recording also contains some practical tips on how to utilize everything.\\nWriting style: Default\\nOutput language: Same as transcript\\n\\nThe audio transcription above will be converted to an array of Javascript object like this:\\n[{\\\"type\":\"title\",\"content\\\":\\\"Testing No-Code Workflow\\\"},{\\\"type\\\":\\\"heading_1\\\",\\\"content\\\":\\\"Summary\\\"},{\\\"type\\\":\\\"paragraph\\\",\\\"content\\\":\\\"This audio recording documents a test of a no-code workflow using Google Drive and a single code step to reduce calls and improve efficiency. This audio recording also contains some practical tips on how to utilize everything.\\\"},{\\\"type\\\":\\\"paragraph\\\",\\\"content\\\":\\\"Furthermore, I hope that this can be a useful tools for youtubers.\\\"},{\\\"type\\\":\\\"heading_1\\\",\\\"content\\\":\\\"Additional Info\\\"},{\\\"type\\\":\\\"heading_2\\\",\\\"content\\\":\\\"Main points\\\"},{\\\"type\\\":\\\"bulleted_list_item\\\",\\\"content\\\":\\\"point 1\\\"},{\\\"type\\\":\\\"bulleted_list_item\\\",\\\"content\\\":\\\"point 2\\\"},{\\\"type\\\":\\\"heading_2\\\",\\\"content\\\":\\\"Action Items\\\"},{\\\"type\\\":\\\"bulleted_list_item\\\",\\\"content\\\":\\\"point 1\\\"},{\\\"type\\\":\\\"bulleted_list_item\\\",\\\"content\\\":\\\"point 2\\\"},{\\\"type\\\":\\\"heading_2\\\",\\\"content\\\":\\\"Follow Up Questions:\\\"},{\\\"type\\\":\\\"bulleted_list_item\\\",\\\"content\\\":\\\"point 1\\\"},{\\\"type\\\":\\\"bulleted_list_item\\\",\\\"content\\\":\\\"point 2\\\"},{\\\"type\\\":\\\"heading_2\\\",\\\"content\\\":\\\"Potential Arguments Against:\\\"},{\\\"type\\\":\\\"bulleted_list_item\\\",\\\"content\\\":\\\"point 1\\\"},{\\\"type\\\":\\\"bulleted_list_item\\\",\\\"content\\\":\\\"point 2\\\"}] \\n\\nPlease remember to not speak anything other than the array of Javascript object specified above!" },
//                 { role: "user", content: `Audio transcription:\n ${transcript.text}` }
//                 ],
//                 model: "gpt-3.5-turbo-0301"
//             };
    
//             const response = await axios.post(apiEndpoint, requestBody, { headers });
//             setContentFinish(JSON.parse(response.data.choices[0].message.content));

//             let summary: any[] = [];

//             let additionalInfo: any[] = [];

//             let bulletPointsToIterate: any[] = [];

//             let headingOneCount: number = 0;

//             console.log(contentFinish);

//             for (const item of JSON.parse(response.data.choices[0].message.content)) {

//                 console.log(item, "itemmm=====");

//                 if (item.type === 'heading_1') {
//                 if (headingOneCount < 1) {
//                     summary.push(item);
//                     setSummaryFinish(summary);
//                 } else {
//                     additionalInfo.push(item);
//                     setAdditionalInfoFinish(additionalInfo);
//                 }

//                 headingOneCount++;
//                 }

//                 if (headingOneCount < 2 && item.type === 'paragraph') {
//                 summary.push(item);
//                 setSummaryFinish(summary);
//                 }

//                 if (item.type === 'heading_2' || item.type === 'bulleted_list_item') {
//                 bulletPointsToIterate.push(item);
//                 }
//             }

//             const bulletPoints: any[] = [];
//             let currentHeadingTwo;

//             for (const item of bulletPointsToIterate) {
//                 if (item.type === 'heading_2') {
//                 currentHeadingTwo = item;
//                 currentHeadingTwo.children = [];
//                 bulletPoints.push(currentHeadingTwo);
//                 setBulletPointsFinish(bulletPoints)
//                 } else if (currentHeadingTwo) {
//                 currentHeadingTwo.children.push(item);
//                 }
//             }

//             console.log(summaryFinish);
//             console.log(additionalInfoFinish);
//             console.log(bulletPointsFinish);

//             setIsFinish(true);
//         } catch (error) {
//           console.error(error);
//         }
//       };

//     return (
//         <>
//         <div  className="w-fit mb-20 flex flex-col items-center gap-10">
//             <img src={Arrow} alt="" />
//             {
//                 isRecording ? 
//                 <div className="d-flex flex-col p-2">
//                     <Typography
//                     as="h2"
//                     className={`text-transparent bg-clip-text bg-gradient-to-b from-linierTitleTop to-linierTitleBottom text-3xl xl:text-5xl font-bold`}
//                     >
//                     Turn your messy thoughts into structured notes.
//                     </Typography>
//                     <Typography
//                     as="p"
//                     className={`text-transparent bg-clip-text bg-gradient-to-b my-4 from-linierTitleTop to-linierTitleBottom text-lg xl:text-xl`}
//                     >
//                     Record your voice and Audea will do its magic.
//                     </Typography>
//                     {
//                         isFinish ?
//                         <>
//                             <div className="border-1px border-white px-8 py-4 flex flex-col gap-4 rounded-xl text-white text-left">
//                                 <section className="flex flex-col gap-2">
//                                     {summaryFinish.map((item:any, index:any) => {
//                                     if (item.type === 'heading_1') {
//                                         return (
//                                         <h2
//                                             key={`${index}-summary`}
//                                             className="sm:text-3xl text-2xl font-bold"
//                                         >
//                                             {item.content}
//                                         </h2>
//                                         );
//                                     } else if (item.type === 'paragraph') {
//                                         return (
//                                         <p key={`${index}-summary`} className="">
//                                             {item.content}
//                                         </p>
//                                         );
//                                     } else {
//                                         return <></>;
//                                     }
//                                     })}
//                                 </section>

//                                 <section>
//                                     <h2 className="sm:text-3xl text-2xl font-bold my-6">
//                                     {additionalInfoFinish[0].content}
//                                     </h2>

//                                     <section className="flex flex-col gap-6">
//                                     {bulletPointsFinish.map((item:any, index:any) => {
//                                         return (
//                                         <section
//                                             key={`${index}-bulletPoints`}
//                                             className="flex flex-col gap-2"
//                                         >
//                                             <h3 className="sm:text-2xl text-xl font-medium">{item.content}</h3>
//                                             <ul className="flex flex-col gap-1 list-disc list-inside">
//                                             {item.children.map((value: any, index: any) => {
//                                                 return (
//                                                 <li key={`${index}-bulletPoint-Child`} className="">
//                                                     {value.content}
//                                                 </li>
//                                                 );
//                                             })}
//                                             </ul>
//                                         </section>
//                                         );
//                                     })}
//                                     </section>
//                                 </section>
//                             </div>
//                             <button className="rounded-xl mt-10 mb-4 p-2 bg-green-400" onClick={() => {setIsRecording(false);}}>Record again</button>
//                         </>
    
//                         :
//                         <>
//                             <div className="border-1px border-white p-4 flex flex-col gap-4 rounded-xl">
//                                 <Typography
//                                 as="p"
//                                 className={`text-transparent bg-clip-text bg-gradient-to-b from-linierTitleTop to-linierTitleBottom text-lg xl:text-xl`}
//                                 >
//                                 Recording on progress...
//                                 </Typography> 
//                             </div>
//                             <button className="rounded-xl mt-10 mb-4 p-2 bg-red-400" onClick={async () => { await stopRecording(); fetchAPI()}}>Stop recording</button>
//                         </>
//                     }
                    
//                 </div>
//                 :
//                 <img src={Mic} alt="" className="cursor-pointer" onClick={() => {setIsRecording(true); startRecording()}} />
//             }
//         </div>
//         </>
//     )
// }

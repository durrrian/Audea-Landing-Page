import { Configuration, OpenAIApi } from 'openai';

interface IGPTResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
  choices: {
    message: {
      role: 'assistant';
      content: string;
    };
    finish_reason: string;
    index: number;
  }[];
}

const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_TOKEN as string,
});

const openai = new OpenAIApi(configuration);

export const gpt = (userPrompt: string): Promise<IGPTResponse> => {
  return new Promise((resolve, reject) => {
    (async () => {
      try {
        const systemPrompt =
          'You are an assistant that only speaks the array of Javascript objects specified in the example below. Do not write any other text that isn\'t formatted as the Javascript object specified below. In other words, I repeat, you are an assistant that only speaks the array of Javascript objects specified in the example below.\n\nYou are also an assistant that will be given only one prompt: Audio transcription. The audio transcription has been provided by the Open AI Whisper API.\n\nFor every audio transcription:\n1. Return the revitalized summary of the transcript with improved readability and engaging content for the readers.\n\nA paragraph can only contain around 4-6 sentences. You can make as many paragraphs as you like but you should make a minimum of 2 paragraphs.\n- Your output language should be the same as the audio transcription\'s original language. If the language is mixed, then use the dominant language as your output language. More specifically, the "content" properties should change according to the output language.\n\nExample:\n\nIncoming user prompt:\nAudio transcription:\nThis audio recording documents a test of a no-code workflow using Google Drive and a single code step to reduce calls and improve efficiency. This audio recording also contains some practical tips on how to utilize everything.\n\nYour output as an assistant should look like these:\n[{"type":"title","content":"Testing No-Code Workflow"}, {"type":"paragraph","content":"This audio recording documents a test of a no-code workflow using Google Drive and a single code step to reduce calls and improve efficiency. This audio recording also contains some practical tips on how to utilize everything."},{"type":"paragraph","content":"Furthermore, I hope that this can be a useful tools for youtubers."},{"type":"paragraph","content":"Another paragraph goes here"}]\n\nPlease remember to not speak anything other than the array of Javascript objects specified above!';

        const { data } = await openai.createChatCompletion({
          model: 'gpt-3.5-turbo-0613',
          max_tokens: 2048,
          messages: [
            {
              role: 'system',
              content: systemPrompt,
            },
            {
              role: 'user',
              content: userPrompt,
            },
          ],
        });

        resolve(data as unknown as IGPTResponse);
      } catch (error) {
        console.error(error);
        reject(error);
      }
    })();
  });
};

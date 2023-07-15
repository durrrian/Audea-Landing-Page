import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_TOKEN as string,
});

const openai = new OpenAIApi(configuration);

export default openai;

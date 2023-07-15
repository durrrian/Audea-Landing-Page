interface IWhisperResponse {
  text: string;
}

export const whisper = (file: File): Promise<IWhisperResponse> => {
  return new Promise((resolve, reject) => {
    (async () => {
      try {
        const model = 'whisper-1';

        const formData = new FormData();
        formData.append('file', file);
        formData.append('model', model);

        const response = await fetch(
          'https://api.openai.com/v1/audio/transcriptions',
          {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_TOKEN}`,
            },
            body: formData,
          }
        );

        const whisperData: IWhisperResponse = await response.json();

        resolve(whisperData);
      } catch (error) {
        console.error(error);
        reject(error);
      }
    })();
  });
};

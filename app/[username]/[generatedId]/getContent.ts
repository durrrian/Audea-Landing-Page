import client from '@/utils/graphql';
import { gql } from '@apollo/client';

export interface IGetContent {
  __typename: 'SharedContent';
  description: string;
  generatedId: string;
  gptObject: string;
  title: string;
  username: string;
  createdAt: string;
}

export const getContent = (
  generatedId: string,
  username: string
): Promise<IGetContent | null> => {
  const query = gql`
    query GetSharedContent($generatedId: String!, $username: String!) {
      getSharedContent(generatedId: $generatedId, username: $username) {
        description
        generatedId
        gptObject
        title
        username
        createdAt
      }
    }
  `;

  return new Promise((resolve, reject) => {
    (async () => {
      try {
        const {
          data: { getSharedContent },
        } = await client.query({
          query,
          variables: {
            generatedId,
            username,
          },
          fetchPolicy: 'no-cache',
        });

        resolve(getSharedContent);
      } catch (e) {
        reject(e);
      }
    })();
  });
};

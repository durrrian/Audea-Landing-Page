import { getContent } from './getContent';
import { notFound } from 'next/navigation';
import { Metadata, ResolvingMetadata } from 'next';
import Client from './lib';

export const revalidate = 1;

type Props = {
  params: { username: string; generatedId: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  try {
    if (!params.username || !params.generatedId) return {};

    const username = decodeURIComponent(params.username).split('@')[1];

    const generatedId = params.generatedId;

    const content = await getContent(generatedId, username);

    if (content === null) {
      return {};
    } else {
      // optionally access and extend (rather than replace) parent metadata
      const previousImagesOG = (await parent).openGraph?.images || [];
      const previousImagesTwitter = (await parent).twitter?.images || [];

      return {
        title: content.title,

        description: content.description,

        openGraph: {
          title: content.title,
          description: content.description,
          url: `/@${content.username}/${content.generatedId}`,
          images: [
            `/og?title=${content.title}&username=${content.username}`,
            ...previousImagesOG,
          ],
        },

        twitter: {
          title: content.title,
          description: content.description,
          images: [
            `/og?title=${content.title}&username=${content.username}`,
            ...previousImagesTwitter,
          ],
        },
      };
    }
  } catch (error) {
    console.error(error);
    return {};
  }
}

export default async function Page({ params }: Props) {
  try {
    if (!params.username || !params.generatedId) return notFound();

    const username = decodeURIComponent(params.username).split('@')[1];

    const generatedId = params.generatedId;

    const content = await getContent(generatedId, username);

    if (content === null) {
      return notFound();
    } else {
      return <Client content={content} />;
    }
  } catch (error) {
    console.error(error);
    return notFound();
  }
}

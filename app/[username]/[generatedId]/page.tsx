import { getContent } from "./getContent";
import { notFound } from "next/navigation";

export default async function Page({
	params,
}: {
	params: { username: string; generatedId: string };
}) {
	const username = decodeURIComponent(params.username).split("@")[1];

	const generatedId = params.generatedId;

	const content = await getContent(generatedId, username);

	if (content === null) {
		return notFound();
	} else {
		const parseContent = JSON.parse(content.gptObject);

		return (
			<main>
				<h1>{content.title}</h1>

				{parseContent.map((v) => {
					if (v.type === "heading_1") {
						return <h2>{v.content}</h2>;
					} else if (v.type === "heading_2") {
						return <h3>{v.content}</h3>;
					} else if (v.type === "paragraph") {
						return <p>{v.content}</p>;
					} else if (v.type === "bulleted_list_item") {
						return <li>{v.content}</li>;
					} else {
						return <></>;
					}
				})}
			</main>
		);
	}
}

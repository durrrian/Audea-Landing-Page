import { Typography } from "@material-tailwind/react";

export default function HeaderSection(
    {
        title,
        subtitle,
        spaceTitle,
        spaceSubTitle,
        id
    }
    : 
    {
        title: string,
        subtitle: string,
        spaceTitle: string,
        spaceSubTitle: string,
        id: string,
    }
) {
    return (
        <>
            <div id={id}></div>
            <Typography
            as="h1"
            className={`text-transparent bg-clip-text bg-gradient-to-b from-linierTitleTop to-linierTitleBottom text-3xl xl:text-4xl ${title === "Audea has 3 pricing options" ? 'font-bold' : ''}`}
            >
            {title}<br/>{spaceTitle}
            </Typography>
            <Typography
            as="h2"
            className="text-transparent bg-clip-text bg-gradient-to-b from-linierFooterTop to-linierFooterBottom text-lg xl:text-xl"
            >
            {subtitle}<br/>{spaceSubTitle}
            </Typography>
        </>
    )
}
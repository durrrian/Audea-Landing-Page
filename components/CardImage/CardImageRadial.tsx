import { Card, CardBody, Typography } from "@material-tailwind/react";
import Explore from "./img/explore.png";
import Talk from "./img/talk.png";
import Image from "next/image";

export default function CardImageRadial(
    {
        customStyle,
        title,
        titleSec
    } 
    : 
    {
        customStyle: string
        title: string
        titleSec: string
    }
) {
    return (
        <>
        <Card className={`mt-6 radialPrimary items-center w-full py-2 px-4 rounded-3xl gap-4 ${customStyle}`}>
            <CardBody className="mx-4 flex flex-col gap-20 items-center justify-center">
                <div className="flex flex-col lg:flex-row gap-20">
                    <div>
                        <Typography variant="h3" className="mt-2 mb-6 text-xl text-white">
                            {title}
                        </Typography>
                        <Image src={Explore} alt="" />
                    </div>
                    <div>
                        <Typography variant="h3" className="mt-2 mb-6 text-xl text-white">
                            {titleSec}
                        </Typography>
                        <Image src={Talk} alt="" />
                    </div>
                </div>
                <div className="flex flex-wrap justify-center gap-4 md:gap-20">
                    <Typography variant="h3" className="mt-2 mb-6 text-xl text-white">
                        Summarize meeting session
                    </Typography>
                    <Typography variant="h3" className="mt-2 mb-6 text-xl text-white">
                        Perfecting your pitch
                    </Typography>
                    <Typography variant="h3" className="mt-2 mb-6 text-xl text-transparent bg-clip-text bg-gradient-to-b from-linierFooterTop to-linierFooterBottom">
                        and many more...
                    </Typography>
                </div>
            </CardBody>
        </Card>
        </>
    )
}
import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";
import Promt from "./img/promt.png";
import Writing from "./img/writing.png";
import Language from "./img/language.png";
import Audio from "./img/audio.png";
import PromtPhone from "./img/promtPhone.png";
import WritingPhone from "./img/writingPhone.png";
import LanguagePhone from "./img/languagePhone.png";
import AudioPhone from "./img/audioPhone.png";
import Image from "next/image";

export default function CardImage(
    {
        srcImg, 
        customStyle,
        title
    } 
    : 
    {
        srcImg: string, 
        customStyle: string,
        title: string
    }
) {
    return (
        <>
        <Card className={`mt-6 bg-gradient-to-b from-linierGray items-center to-linierEndGray w-full py-2 px-4 rounded-3xl gap-4 ${customStyle}`}>
            <CardHeader className="bg-transparent text-white">
                <Typography variant="h3" className="my-2 text-md lg:text-xl lg:h-fit h-10 w-56 lg:w-fit">
                    {title}
                </Typography>
            </CardHeader>
            <CardBody className="mx-4 hidden lg:block">
                {
                    srcImg === "Promt" ? 
                    <Image src={Promt} alt="" className="h-40 lg:h-fit" />
                    : srcImg === "Writing" ?
                    <Image src={Writing} alt="" className="h-40 lg:h-fit" />
                    : srcImg === "Language" ?
                    <Image src={Language} alt="" className="h-40 lg:h-[465px] lg:w-fit" />
                    : srcImg === "Audio" ?
                    <Image src={Audio} alt="" className="h-40 lg:h-fit" />
                    :
                    <Image src="" alt="" className="h-40 lg:h-fit" />
                }
            </CardBody>
            <CardBody className="block lg:hidden">
                {
                    srcImg === "Promt" ? 
                    <div className="h-52 w-full">
                        <Image src={PromtPhone} alt="" className="h-fit w-full" />
                    </div>
                    : srcImg === "Writing" ?
                    <div className="h-52 w-full">
                        <Image src={WritingPhone} alt="" className="h-fit w-full" />
                    </div>
                    : srcImg === "Language" ?
                    <div className="h-52 w-full">
                        <Image src={LanguagePhone} alt="" className="h-full w-full" />
                    </div>
                    : srcImg === "Audio" ?
                    <div className="h-52 w-full">
                        <Image src={AudioPhone} alt="" className="h-fit w-full" />
                    </div>
                    :
                    <Image src="" alt="" className="h-40 lg:h-fit" />
                }
            </CardBody>
        </Card>
        </>
    )
}
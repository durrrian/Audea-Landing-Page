import { Typography } from "@material-tailwind/react";

export default function Pricing() {
    const pricing = [
        {
            title: "Monthly subscription",
            price: "$3",
            description: "per month, billed monthly (USD)",
            subtitle: "Subscribe after free trial"
        },
        {
            title: "Yearly subscription",
            price: "$2.5",
            description: "per month, billed yearly (USD)",
            subtitle: "Subscribe after free trial"
        },
        {
            title: "Lifetime subscription",
            price: "$60",
            description: "pay one time, and use it forever (USD) limited to only 50 quotas",
            subtitle: "Subscribe after free trial"
        }
    ]
    return (
        <div className="gap-10 flex lg:flex-row flex-col items-center justify-center w-full h-fit">
            {
                pricing.map((item) => 
                <div className={`flex flex-col items-center justify-center gap-10 px-2 border-1px ${item.price === "$60" ? "border-borderPricingOn bg-gradient-to-b from-linierBgPricingTop via-linierBgPricingVia to-from-linierBgPricingBottom" : "border-borderPricing bg-transparent" } w-72 lg:w-full h-60 md:h-72 rounded-3xl`}>
                    <Typography
                    as="h4"
                    className="text-whitePricing w-72 text-lg"
                    >
                        {item.title}
                    </Typography>
                    <div className="gap-2 flex flex-col">
                        <Typography
                        as="h4"
                        className="text-whitePricing text-3xl xl:text-5xl font-bold"
                        >
                            {item.price}
                        </Typography>
                        <Typography
                        as="h4"
                        className="text-linierBlue text-xs h-10"
                        >
                            {item.description}
                        </Typography>
                    </div>
                    <Typography
                    as="h4"
                    className="text-linierBlue text-lg"
                    >
                        {item.subtitle}
                    </Typography>
                </div>
                )
            }
        </div>
    )
}
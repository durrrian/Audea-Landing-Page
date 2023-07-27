'use client';

import { Badge } from '@/components/ui/badge';
import { pricingList } from '../../lib/utils';
import cn from '@/utils/cn';
import { gql, useQuery } from '@apollo/client';
import LoadingSpinner from '@/components/LoadingSpinner';
import { Heading, SubHeading } from '../components';

export default function Pricing() {
  const query = gql`
    query GetLifetimeSubscriptionCount($type: SubscriptionTypeEnum!) {
      getLifetimeSubscriptionCount(type: $type) {
        response
      }
    }
  `;

  const { data, loading } = useQuery(query, {
    variables: { type: 'LIFETIME60' },
  });

  return (
    <section
      className="max-w-[1300px] mx-auto text-landingPage-textSurfaceVariant dark:text-landingPage-textSurfaceVariant flex flex-col items-center justify-center text-center gap-12 pt-10 pb-10 md:bg-cover bg-contain bg-no-repeat bg-top px-4 scroll-mt-20"
      style={{
        backgroundImage:
          'linear-gradient(rgba(8, 10, 25, 0.4), rgba(8, 10, 25, 0.4)), url(/decor/hero_light.png)',
      }}
      id="pricing"
    >
      <header className="flex flex-col gap-4">
        <Heading as="h6">Try it first, then pay if you love it</Heading>

        <SubHeading>
          You can try it <strong>for free</strong> for 2 weeks. Subscribe later
          if you love it.
        </SubHeading>
      </header>

      <section className="w-full h-fit flex items-center justify-center flex-wrap gap-8">
        {pricingList.map(({ name, price, description }, i) => {
          return (
            <section
              key={i}
              className={`border p-8 w-full h-full rounded-2xl flex flex-col justify-between gap-10 min-h-[280px] max-w-[300px] ${
                name === 'Lifetime subscription'
                  ? 'bg-gradient-to-b from-landingPage-linierBgPricingTop via-landingPage-linierBgPricingVia to-landingPage-linierBgPricingBottom border-landingPage-borderPricingOn dark:from-landingPage-linierBgPricingTop dark:via-landingPage-linierBgPricingVia dark:to-landingPage-linierBgPricingBottom dark:border-landingPage-borderPricingOn'
                  : 'border-landingPage-borderPricing dark:border-landingPage-borderPricing bg-transparent'
              }`}
            >
              <section className="flex flex-col gap-0 items-center justify-center">
                <p className="font-medium text-lg">{name}</p>
                {(() => {
                  if (name === 'Monthly subscription') {
                    return (
                      <Badge
                        className={cn(
                          'w-fit h-fit bg-yellow-300 dark:bg-yellow-300 text-black dark:text-black hover:bg-yellow-300 hover:dark:bg-yellow-300 hover:text-black hover:dark:text-black'
                        )}
                      >
                        Popular
                      </Badge>
                    );
                  } else if (name === 'Yearly subscription') {
                    return (
                      <Badge
                        className={cn(
                          'w-fit h-fit bg-green-300 dark:bg-green-300 text-black dark:text-black hover:bg-green-300 hover:dark:bg-green-300 hover:text-black hover:dark:text-black'
                        )}
                      >
                        Free 2 months
                      </Badge>
                    );
                  } else if (name === 'Lifetime subscription') {
                    return (
                      <Badge
                        className={cn(
                          'w-fit h-fit bg-red-300 dark:bg-red-300 text-black dark:text-black hover:bg-red-300 hover:dark:bg-red-300 hover:text-black hover:dark:text-black flex items-center justify-center gap-1'
                        )}
                      >
                        {loading ? (
                          <LoadingSpinner size={4} />
                        ) : (
                          <span>
                            {50 -
                              Number(
                                data.getLifetimeSubscriptionCount.response
                              )}
                          </span>
                        )}
                        <span>quotas</span>
                        <span>left</span>
                      </Badge>
                    );
                  } else {
                    return <></>;
                  }
                })()}
              </section>

              <p className="font-bold text-3xl">{price}</p>

              <p className="font-normal text-transparent bg-clip-text bg-gradient-to-b from-landingPage-linierFooterTop to-landingPage-linierFooterBottom">
                {description}
              </p>
            </section>
          );
        })}
      </section>
    </section>
  );
}

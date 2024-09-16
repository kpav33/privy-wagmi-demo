import '../styles/globals.css';

import Providers from 'components/providers';

// In components there are example on how to use wagmi hook, we could be useful
// When using Privy you can decide if you want to just have users connect their wallet or Login into out application by using SIWE (sign in with ethereum)
// Development app has 150 user's limit
// Pricing => The basic Developer tier is already 99$ per month, but first 1000 MAUs (Monthly active users) are free, so only after you reach at least 1000 users you are charged? There doesn't seem to be an option to pay additionally on a per user basis as it is with Dynamic, if you reach 2500 MAUs, you would then need to upgrade to Pro plan (299$) to get max 10.000 MAUs, so its more expensive compared to Dynamic
// Otherwise Privy seems very similar to Dynamic in its functionality and user management, customization options..., just more expensive
// But there seems to be more people actually using Privy, seems to be more popular (maybe its more expensive just because its more common and dynamic is still up-and-coming?)

// Links
// https://docs.privy.io/guide/react/wallets/usage/wagmi/ => Manual Wagmi integration with Privy
// https://docs.privy.io/guide/react/recipes/starter-repos => Starter repos examples
// https://docs.privy.io/guide/react/quickstart => Use just Privy, without Wagmi integration added

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

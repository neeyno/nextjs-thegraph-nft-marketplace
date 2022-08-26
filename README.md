<div align="center">
 <h2 align="center">NFT Marketplace</h2>
  <p align="center">
    Buy and sell NFTs over Ethereum network.
    <br />
    <a href="https://github.com/neeyno/hardhat_nft_marketplace" target="_blank" >
      <strong>| Explore Smart Contract </strong>
    </a>
    <a  href="https://github.com/neeyno/nextjs-thegraph-nft-marketplace" target="_blank">
    <strong>| Explore Frontend |</strong>
    </a>
    <br />
    <a  href="https://plain-frost-3087.on.fleek.co/" target="_blank"><strong>| View DEMO |</strong></a>
 </p>
</div>
<hr>

### Description
This repository contains frontend part of NFT Marketplace Dapp.

The application allows users to list, buy, and sell NFTs by connecting to their Metamask wallet. There are two pages in it.

* Home page, which displays recently listed NFTs. And any user is able to purchase NFT, but only owner  is able to change the price.

* Sell page enables users to list their NFT on the market and withdraw the proceeds from NFTs that have been sold.

The listed NFTs are derived from events data that is indexed by The Graph. The Graph is an indexing protocol for querying networks like Ethereum and IPFS.

<hr>

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

<hr>


## Note 
this error:
```bash
Server Error
NoMoralisContextProviderError: Make sure to only call useMoralis within a  <MoralisProvider>
```
can be fixed by deleting folder "react-moralis" from "./node_modules/web3uikit/node_modules/react-moralis/"
```bash
rm -r -f ./node_modules/web3uikit/node_modules/react-moralis
```
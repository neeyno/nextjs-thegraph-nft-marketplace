import "../styles/globals.css"

import { MoralisProvider } from "react-moralis"
import { NotificationProvider } from "web3uikit"
import Header from "../components/Header"
import Head from "next/head"

import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"

//const APP_ID = process.env.NEXT_PUBLIC_APP_ID
//const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL
const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://api.studio.thegraph.com/query/32759/nft-marketplace/0.0.2",
})

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>NFT Marketplace</title>
                <meta name="description" content="NFT Marketplace" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MoralisProvider initializeOnMount={false}>
                <ApolloProvider client={client}>
                    <NotificationProvider>
                        <Header />
                        <Component {...pageProps} />
                    </NotificationProvider>
                </ApolloProvider>
            </MoralisProvider>
        </>
    )
}

export default MyApp

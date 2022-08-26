import styles from "../styles/Home.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

import { useMoralisQuery, useMoralis } from "react-moralis"
import NftBox from "../components/NftBox"
import { useState, useEffect } from "react"
import { useQuery } from "@apollo/client"
import contractAddresses from "../constants/contractAddresses.json"
import { GET_ACTIVE_ITEMS } from "../constants/subGraphQueries"

export default function Home() {
    const [ui, setUI] = useState(false)
    const { isWeb3Enabled, chainId: chainIdHex } = useMoralis()
    const chainId = parseInt(chainIdHex).toString() || "4"
    const marketplaceAddress =
        chainId in contractAddresses ? contractAddresses[chainId]["NFTMarketplace"][0] : null

    const { loading, error, data: listedNfts } = useQuery(GET_ACTIVE_ITEMS)

    /*
    let { data: listedNfts, isFetching: fetchingListedNfts } = useMoralisQuery(
        "ActiveItem",
        (query) => query.limit(8).descending("tokenId")
    ) 
    */

    useEffect(() => {
        setUI(!ui)
    }, [isWeb3Enabled])

    return (
        <div className={styles.container}>
            {isWeb3Enabled ? (
                loading || !listedNfts ? (
                    <div className={styles.disabled}>Loading...</div>
                ) : (
                    listedNfts.activeItems.map((item, i) => {
                        const { price, nftAddress, tokenId, seller } = item
                        return (
                            <div className={styles.card} key={i}>
                                <NftBox
                                    price={price}
                                    nftAddress={nftAddress}
                                    tokenId={tokenId}
                                    marketplaceAddress={marketplaceAddress}
                                    seller={seller}
                                    key={`${nftAddress}_${tokenId}`}
                                />
                            </div>
                        )
                    })
                )
            ) : (
                <div className={styles.notWeb3}>
                    <div>Web3 not enabled.</div>
                    <div>Connect your wallet! </div>
                    <span className={styles.notWeb3span}>
                        <FontAwesomeIcon icon={faBars} />
                    </span>
                </div>
            )}
        </div>
    )
}

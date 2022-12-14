import React, { useEffect, useState } from "react";
import TopBanner from "../components/TopBanner"
import Accommodation from "../components/AlliedServices/Accommodation.js"
import Head from "next/head";
const AccommodationPage = ({ accommodation }) => {
    return (
        <>
            <Head>
                <title>Cheapest PGs & Places near you with all basic necessities</title>
                <meta name="description" content="Get the information of best and cheapest places on rent. Single & Double Occupancy rooms, PG/Hostel including food, and 1/2/3 BHK Flats with affordable charges." />
            </Head>
            <TopBanner imagPath={"/Image/Accomodation.png"} />
            <h1 className="heading">Cheapest rental places and PGs near you.</h1>
            <Accommodation accommodation={accommodation} />
        </>
    )
}

export async function getStaticProps() {
    let response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/get_accommodation.php`)
    response = await response.json();
    return { props: { accommodation: response } };
}

export default AccommodationPage;
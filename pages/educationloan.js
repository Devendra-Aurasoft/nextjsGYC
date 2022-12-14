import React, { useEffect, useState } from "react";
import TopBanner from "../components/TopBanner"
import EducationLoan from "../components/AlliedServices/EducationLoan.js"
import Head from "next/head";
const EducationLoanPage = ({ Loan }) => {
    return (
        <>
            <Head>
                <title>How to get an Instant education loan with a low interest?</title>
                <meta name="description" content="Want to get an education loan instantly for further studies? Know the best education loan schemes for national and international studies with lowest interest." />
            </Head>
            <TopBanner imagPath={"/Image/Banking.png"} />
            <h1 className="heading" >Education Loan Process, Eligibility and all other details </h1>
            <EducationLoan Loan={Loan} />
        </>
    )
}

export async function getStaticProps() {
    let response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/get_loans.php`)
    response = await response.json();
    return { props: { Loan: response } };
}

export default EducationLoanPage;
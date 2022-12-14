import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import TopBanner from '../components/TopBanner'
import "../styles/careers.module.css"
import classes from "../styles/careers.module.css"
import apiCall from '../utils/apiCall'
import Head from "next/head";
function careers() {
    const [jobs, setJobs] = useState({});

    useEffect(() => {
        const getData = async () => {
            const result = await apiCall("get_careers.php", "get")
            setJobs(result.data)
        }
        getData()
    }, [])
    return (
        <>
            <Head>
                <title>Career options in indore like a telecalling and more</title>
                <meta name="description" content="What are the top career options you have after 12th, Graduation and Post Graduation courses? High-Income job options in Indore for career growth such as telecalling" />
            </Head>
            <TopBanner imagPath={"/Image/JoinUs.png"} />
            <Container >
                <h1 className={`${classes.heading}`}>Which courses provide the best career options and growth?</h1>
                <h3 className={`${classes.heading}`}>Current Openings </h3>
                <Row>
                    {jobs.careers && jobs.careers.length !== 0
                        ?
                        jobs.careers.map((item, index) => {
                            return (
                                <Col key={item.job_id} className={`${classes.Job_card}`} lg="4">
                                    <p className={`${classes.job_title}`}>{item.job_title}</p>
                                    <div className={`${classes.job_menu}`}>
                                        <div className={`${classes.job_menuItem}`}><i className="ri-time-fill"></i><small>{item.posted_at}</small></div>
                                        <div className={`${classes.job_menuItem}`}><i className="ri-briefcase-4-fill"></i><small>{item.type}</small></div>
                                        <div className={`${classes.job_menuItem}`}><i className="ri-map-pin-fill"></i><small>{item.city}</small></div>
                                    </div>
                                    <div className={`${classes.job_cards}`}>
                                        <h6>Job Description :-</h6>
                                        <p>{item.description}</p>
                                        <h6>Required skills :-</h6>
                                        <p>{item.skills}</p>
                                    </div>
                                    <div className="text-box">
                                        <a href="#" className="btn btn-white btn-animate">Apply Now</a>
                                    </div>
                                </Col>

                            )
                        })
                        :
                        <div>
                            <h6 className='text-danger text-center'>Currently no openings are available.</h6>
                        </div>
                    }
                </Row>
            </Container>
        </>
    )
}

export default careers
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import ContactForm from '../components/ContactForm';
import TopBanner from '../components/TopBanner';
import classes from "../styles/contact.module.css";
import Head from "next/head";
function contact() {
    return (
        <>
            <Head>
                <title>No. 1 Career Counseling agency in Indore, Get Your College</title>
                <meta name="description" content="Get Your College (GYC) is the best Career Counselor in Indore. GYC helps you understand your passion and achieve your dreams and gets you a right college." />
            </Head>
            <TopBanner imagPath={"/Image/ContactUs.png"} />
            <Container className={`${classes}`}>
                <h1 className={`${classes.heading_45}`}>Best career counsellor in Indore - GYC</h1>
                <Row>
                    <Col lg="6" className={`${classes.ContactPage_text}`}>
                        <div >
                            <h3 className={`${classes.heading_45}`}>Head Office</h3>
                            <ul>
                                <li><i className="fas fa-map-marker-alt"></i><span>- 302, Balaji Corporate House, Above ICICI Bank,<br /> Zanzeerwala Square, New Palasia, Indore,<br />
                                    Madhya Pradesh
                                </span></li>
                                <li><i className="fas fa-phone"></i><span>Phone:  <a href="tel://7737080773"> 0731-4904343</a> ,</span></li>
                                <li><i className="fas fa-phone"></i><span>Mobile: <a href="tel://7737080773"> +91 7089434343</a></span></li>
                            </ul>
                        </div>
                        <div className='branch-office'>
                            <h3 className={`${classes.heading_45}`}>Branch Office</h3>
                            <ul>
                                <li><i className="fas fa-map-marker-alt"></i><span>F -2 R-18, Aastha Square, Yudhishter Marg,<br />
                                    C- Scheme, Jaipur,<br />
                                    Rajasthan
                                </span></li>
                                <li><span>Contact Person: Reema Jain</span></li>
                                <li><i className="fas fa-phone"></i><span> <a href="tel://7737080773"> +91 7737080773</a></span></li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg="6" className={`${classes.form}`}>
                        <ContactForm />
                    </Col>
                </Row>
            </Container>
            <Container fluid md={{ my: 2 }}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14721.186629121696!2d75.8717773!3d22.7172125!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcfe3d34ff26bd13!2sGet%20Your%20College!5e0!3m2!1sen!2sin!4v1655299996500!5m2!1sen!2sin"
                    width="100%"
                    height={450}
                    title="head office"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </Container>
        </>
    )
}

export default contact
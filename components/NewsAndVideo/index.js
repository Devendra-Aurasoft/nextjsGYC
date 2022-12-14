import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Latest from "./LatestNews"
import Video from "./Video"
import classes from "./Video/Video.module.css"
function index({ data }) {
    return (
        <>
            <Container style={{ padding: "25px 0px" }}>
                <Row>
                    <Col md="5">
                        <Latest data={data.NewsData} />
                    </Col>
                    <Col md="7">
                        <h4 className={`${classes.heading}`}>Video</h4>
                        <Video data={data.VideoData} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default index
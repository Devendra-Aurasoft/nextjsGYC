import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';

function Blog({ data }) {
    const [time, setTime] = useState("")
    const article = useRef("")
    const getContent = (content) => {
        if (content) {
            return {
                __html: window.atob(content)
            }
        } else {
            return;
        }
    }

    useEffect(() => {
        const wpm = 200;
        const words = article.current.innerText;
        // const words = article.current.innerText.trim().split(/\s+/).length;
        setTime(Math.ceil(words / wpm));
    }, [])
    return (
        <>
            <Container>
                <Row>
                    <h4 className='heading fs-40 mt-5'> Blogs</h4>
                    {
                        data?.blogs && typeof (window) !== "undefined" && data?.blogs.map((blog) => {
                            return (
                                <Col md="4" key={blog.blog_id}>
                                    <div className='blogCard  text-left'>
                                        <div className="blogCard-header">
                                            <img src={`${blog.imagepath + blog.image}`} alt="blog" />
                                        </div>
                                        <div className="blogCard-body">
                                            <h4 className='title_blog_long'>{window.atob(blog.title)}</h4>
                                            <p className='small_disc Blog_disc' id='article' ref={article} dangerouslySetInnerHTML={getContent(blog.content)}>
                                            </p>

                                        </div>
                                        <p className="">  <span className="">Posted Date :-</span> {blog.posted_date}</p>
                                        <div className="blogCard-footer">
                                            <div className="postDetails">
                                            </div>
                                        </div>
                                        <h5 className='text-center my-md-0 my-3'>
                                            <a href={blog.blog_link}> Read More . . .</a>
                                        </h5>
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </>
    )
}

export default Blog
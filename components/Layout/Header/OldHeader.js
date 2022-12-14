import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Link from 'next/link';
function OldHeader() {
    const [hidenav, setHideNav] = useState(false);
    const [lastScroll, setLastScroll] = useState(0);
    const [ugCourses, setUGCourses] = useState({})
    const [pgCourses, setPGCourses] = useState({})
    const [Coaching, setCoaching] = useState({})
    const [ugExams, setUGExams] = useState({})
    const [pgExams, setPGExams] = useState({})
    const [CoachingExam, setCoachingExam] = useState({})
    useEffect(() => {
        const handleNavbar = () => {
            if (lastScroll < window.scrollY && window.scrollY > 90) {
                setHideNav(true)
                setLastScroll(window.scrollY)
            } else {
                setHideNav(false)
                setLastScroll(window.scrollY)
            }
        }
        window.addEventListener('scroll', handleNavbar)
        return () => {
            window.removeEventListener("scroll", handleNavbar)
        }
    }, [hidenav, lastScroll])
    // Courses API fetch =========================
    useEffect(() => {
        const getUGCourses = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/get_courses.php?type=1`);
                setUGCourses(response.data)
            } catch (error) {
                console.log(error.message)

            }
        }
        getUGCourses()
    }, [])
    useEffect(() => {
        const getPGCourses = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/get_courses.php?type=2`);
                setPGCourses(response.data)
            } catch (error) {
                console.log(error.message)
            }
        }
        getPGCourses()
    }, [])
    useEffect(() => {
        const getCoaching = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/get_courses.php?type=3`);
                setCoaching(response.data)

            } catch (error) {
                console.log(error.message)
            }
        }
        getCoaching()
    }, [])
    // Exam API fetch =========================
    useEffect(() => {
        const getPGCourses = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/get_exam_categories.php?type=1`);
                setUGExams(response.data)
            } catch (error) {
                console.log(error.message)
            }
        }
        getPGCourses()
    }, [])
    useEffect(() => {
        const getCoaching = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/get_exam_categories.php?type=2`);
                setPGExams(response.data)

            } catch (error) {
                console.log(error.message)
            }
        }
        getCoaching()
    }, [])

    return (
        <div className={`wrapper ${hidenav && "hide-navbar"} `}>
            <nav>
                <input type="checkbox" id="show-search" />
                <input type="checkbox" id="show-menu" />
                <label htmlFor="show-menu" className="menu-icon"><i className="fas fa-bars" /></label>
                <div className="content ">
                    <div className="logo"><Link href="/"><img src="/Image/logo/gyclogo.png" alt="logo" /></Link></div>
                    <ul className="links" id='myDIV'>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li>
                            <div className="waviy">
                                <span>
                                    <Link href={'/Institutions'} className="desktop-link dropdown-toggle " > Institutions</Link>
                                </span>
                            </div>
                            <input type="checkbox" id="show-features" />
                            <label htmlFor="show-features Institutions" id='animate-charcter'>Institutions</label>
                            <ul>
                                <li className='m-0 py-1'>
                                    <Link href={"#"} className="desktop-link dropdown-toggle">UG (Undergraduate Prog)</Link>
                                    <input type="checkbox" id="show-items" />
                                    <label className='small' htmlFor="show-items">UG (Undergraduate Prog)</label>
                                    <ul>
                                        {ugCourses.courses && ugCourses.courses.map((course) => {
                                            return <li key={course.course_id}> <Link href={`/Institutions/collegebycourse/${course.course_slug}`} >{course.course_name}</Link></li>
                                        })}
                                    </ul>
                                </li>
                                <li className='m-0 py-1'>
                                    <Link href="#" className="desktop-link dropdown-toggle">PG (Post Graduate Prog) </Link>
                                    <input type="checkbox" id="show-items" />
                                    <label className='small' htmlFor="show-items">PG (Post Graduate Prog)</label>
                                    <ul>
                                        {pgCourses.courses && pgCourses.courses.map((course) => {
                                            return <li key={course.course_id}><Link href={`/Institutions/collegebycourse/${course.course_slug}`} >{course.course_name}</Link></li>
                                        })}
                                    </ul>
                                </li>
                                <li className='m-0 py-1'>
                                    <Link href="#" className="desktop-link dropdown-toggle">Coaching  </Link>
                                    <input type="checkbox" id="show-items" />
                                    <label className='small' htmlFor="show-items">Coaching</label>
                                    <ul>
                                        {Coaching.courses && Coaching.courses.map((course) => {
                                            return <li key={course.course_id}><Link href={`/Institutions/collegebycourse/${course.course_slug}?type=3`} >{course.course_name}</Link></li>
                                        })}
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link href={'/exams'} className="desktop-link dropdown-toggle exam">Exams </Link>
                            <input type="checkbox" id="show-features" />
                            <label htmlFor="show-features ">Exams</label>
                            <ul className='examUL'>
                                <li className='m-0 py-1'>
                                    <Link href={"#"} className="desktop-link dropdown-toggle">UG </Link>
                                    <input type="checkbox" id="show-items" />
                                    <label className='small' htmlFor="show-items">UG</label>
                                    <ul>
                                        {ugExams.exam_category && ugExams.exam_category.map((exam) => {
                                            return <li key={exam.category_id}><Link href={`/exams/${exam.category_id}?type=UG`} >{exam.category_name}</Link></li>
                                        })}
                                    </ul>
                                </li>
                                <li className='m-0 py-1'>
                                    <Link href="#" className="desktop-link dropdown-toggle">PG </Link>
                                    <input type="checkbox" id="show-items" />
                                    <label className='small' htmlFor="show-items">PG </label>
                                    <ul>
                                        {pgExams.exam_category && pgExams.exam_category.map((exam) => {
                                            return <li key={exam.category_id}><Link href={`/exams/${exam.category_id}?type=PG`} >{exam.category_name}</Link></li>
                                            // return <li key={exam.category_id}><Link href={`/exams?exam=${exam.category_id}&type=${exam.course_type}`} >{exam.category_name}</Link></li>
                                        })}
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <Link href="#" className="desktop-link dropdown-toggle">GD / PI  </Link>
                            <input type="checkbox" id="show-gdpi" />
                            <label htmlFor="show-gdpi">GD / PI</label>
                            <ul className='examUL'>
                                <li><Link href="/gd">GD</Link></li>
                                <li><Link href="/pi">PI</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link href={'#/'} className="desktop-link dropdown-toggle">Allied Services </Link>
                            <input type="checkbox" id="show-features" />
                            <label htmlFor="show-features">Allied Services</label>
                            <ul className='Allied_services'>
                                <li>
                                    <Link href={"/accommodation"} className="desktop-link ">Accommodation </Link>
                                    <input type="checkbox" id="show-items" />
                                    <label htmlFor="show-items">Accommodation</label>
                                </li>
                                <li>
                                    <Link href="/educationloan" className="desktop-link ">Education Loan </Link>
                                    <input type="checkbox" id="show-items" />
                                    <label htmlFor="show-items">Education Loan</label>
                                </li>
                            </ul>
                        </li>
                        <li> <a href='https://getyourcollege.in/blog/all-blogs/'>Blogs</a></li>
                        <li><Link href="/careers">Careers</Link></li>
                        <li><Link href="/contact">Contact Us</Link></li>
                    </ul>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="#ffa500"><path d="M12 12h4v4h-4zm0-6h4v4h-4zM6 0h4v4H6zm10 0v4h-4V0zM6 6h4v4H6zM0 6h4v4H0zm0 6h4v4H0zm6 0h4v4H6zM0 0h4v4H0z"></path></svg>

            </nav >
        </div >
    )
}

export default OldHeader

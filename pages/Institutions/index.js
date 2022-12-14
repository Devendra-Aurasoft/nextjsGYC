import React, { useEffect, useState } from 'react'
import Head from "next/head";
import Link from 'next/link';
function index({ College }) {
    const type = ""
    const [collegeList, setCollegeList] = useState([])
    const [serchCollegeList, setSerchCollegeList] = useState([])
    const [inputVal, setInputVal] = useState("")

    // Iframe Function for Decode Data
    const getiframe = (iframe) => {
        if (iframe) {
            return {
                __html: iframe
            }
        } else {
            return;
        }
    }

    // passing Data in  college list
    useEffect(() => {
        setCollegeList(College.colleges)
        setSerchCollegeList(College.colleges)
    }, [College])


    // handaleChange function for search collehge 
    const handaleChange = (e) => {
        setInputVal(e.target.value)
        if (e.target.value !== null) {
            const Data = serchCollegeList.filter(item => item.college_name.toLowerCase().includes(e.target.value.toLowerCase()) || item.city.toLowerCase().includes(e.target.value.toLowerCase()))
            setCollegeList(Data)
        }
        else {
            setCollegeList(serchCollegeList)
        }
    }

    // let encodeData = window.btoa(courseName)
    return (
        <>
            <Head>
                <title>Govt IIT Colleges in India with ITI and Polytechnic specialization</title>
                <meta name="description" content="Full Information about the top IIT colleges in India: Government colleges, Polytechnic Colleges, Colleges in Siliguri, and the best Colleges in Midnapore." />
            </Head>
            <section className='college-list'>
                <h1 className='heading fs-40 my-4'>Top IIT Colleges in India for ITI and Polytechnic Courses</h1>
                <div className="container">
                    <div className='serch_box'>
                        <h4 className='heading fs-40 my-4'>Institutions/Coaching</h4>
                        <input className='Serch ms-auto' placeholder='search coaching/institution' value={inputVal} onInput={(e) => handaleChange(e)} />
                    </div>
                    <div className="row mx-auto justify-content-around">
                        {collegeList?.length !== 0 && typeof window !== "undefined"
                            ?
                            collegeList?.map((college) => {
                                return (
                                    <div key={college.college_id} className='college-card col-lg-4 p-3 bg-transparent  col-md-6 pt-3' >
                                        <div className='Clg_list_card bg-transparent'>
                                            <div className="college-details bg-white">
                                                <div className='college-image'>
                                                    <img src={college.logo_path + college.college_logo} alt="college list" />
                                                </div>
                                                <h6 className="college-name">{college.college_name} ({college.college_type})</h6>
                                                <div className='card-content'>
                                                    <p className='text-content small_disc' dangerouslySetInnerHTML={getiframe(window.atob(college.description))}></p>
                                                    <div className='redirection pb-3'>
                                                        <Link href={{ pathname: `/Institutions/moreabout/${college.college_slug}` }}> Read More</Link>
                                                        <button id='button' type='button' className='btn  apply-btn shadow-lg'>
                                                            {/* <Link to={`/collegeform?college=${college.college_id}&course=${encodeData}&type=${type}`}>Apply Now </Link> */}
                                                            Apply Now    </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                            : (type === '3' ? (
                                <div className='text-danger text-center p-3'>No coaching/ institutions available found for this course.</div>
                            ) : (
                                <div className='text-danger text-center p-3'>No colleges/ universities available for this course.</div>
                            )
                            )
                        }
                    </div>
                </div>
            </section>
        </>

    )
}

export async function getServerSideProps(context) {
    const { params } = context
    let response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/get_colleges.php`)
    response = await response.json();
    return { props: { College: response } };
}

export default index
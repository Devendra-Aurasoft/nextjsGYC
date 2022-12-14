import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import classes from "./LatestNews.module.css"

function index({data}) {
  // const [data, setAllExams] = useState({})
  // const [allExmLength, setAllExmLength] = useState()

  // useEffect(() => {
  //   const getData = async () => {
  //     const result = await apiCall("get_exams.php", "get")
  //     setAllExams(result.data)
  //     setAllExmLength(data.count)
  //   }
  //   getData()
  // }, [])

  const marqueeSryle = {
    top: "100%",
    position: "relative",
    animation: data.length ? `marquee ${data.length * 3}s linear infinite` : " ",
  };
  return (
    <>
      <h4 className={`${classes.heading}`}>Latest News in Education World</h4>
      <div className={`${classes.Marquee_Box}`}>
        <ul className='marquee' style={marqueeSryle}>
          {data.exams && data.exams.map((exam) => {
            return (
              <li key={exam.examid} className={`${classes.Li_tag}`}>
                <p>
                  <Link href={`/exams/?type=${exam.course_type}`} className={`${classes.link}`}>
                    {exam.exam_name}
                  </Link>
                </p>
                <hr style={{ color: "var(--orange)", height: "2px" }} />
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default index
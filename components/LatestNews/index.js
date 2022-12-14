import Link from 'next/link';
import React from 'react'
import classes from "./LatestNews.module.css"
function index({ data }) {
    console.log("latest news data", data);
    (function() {
        ('marquee').mouseover(function() {
            (this).attr('scrollamount',0);
        }).mouseout(function() {
             (this).attr('scrollamount',5);
        });
    });

    return (
        <div className='container-fluid'>
            <div className={`${classes.New_container}`}>
                <marquee behavior="scroll" direction="left" onmouseover="this.stop();" onmouseout="this.start();" className={`${classes.marquee_container}`}>
                    {data && data.map((item) => {
                        return (
                            <li key={item.news_id} className={`${classes.Li_tag}`}>
                                <Link href={`${item.news_link}`} target="_blank" className={`${classes.link}`}>
                                    {item.news_title}
                                </Link>
                            </li>
                        )
                    })}
                </marquee>

            </div>
        </div>
    )
}

export default index
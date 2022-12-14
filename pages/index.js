import Link from "next/link";
import Blog from "../components/Blog";
import HomeSlider from "../components/HomeSlider"
import Testiminials from "../components/Testimonials"
import AssociatedInstitutions from "../components/AssociatedInstitutions"
import NewsAndVideo from "../components/NewsAndVideo"
import Test from "../components/TestingForNewChanges/test";
import LatestNews from "../components/LatestNews"
import TopCities from "../components/TopCities"
import Head from "next/head";
function Home({ VideoAndNews, LogosData, TestiminialsData, BlogData, LatestNewsData }) {

  return (
    <>
      <Head>
        <title>Information of best colleges in India with fees, placement, exam, result</title>
        <meta name="description" content="The best colleges in India include IIT Chennai, Christ University(Bangalore) for BBA & BCA, IIT (Delhi) for Science Courses & SRCC, Delhi for Commerce" />
      </Head>
    
      {/* <TopCities/> */}
      <HomeSlider />
      <LatestNews data={LatestNewsData.news} />
      <h1 className='heading fs-40 my-4'>Best Colleges in India with their specialized courses</h1>
      <NewsAndVideo data={VideoAndNews} />
      <Test data={VideoAndNews} />
      <AssociatedInstitutions data={LogosData} />
      <Testiminials data={TestiminialsData} />
      <Blog data={BlogData} />
    </>
  );
}

export async function getStaticProps() {

  // featching Api for Video Componenet 
  let videoRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/get_videos.php?page=HOME`)
  const VideoData = await videoRes.json();

  // featching Api for News Componenet 
  let NewsRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/get_exams.php`)
  const NewsData = await NewsRes.json();

  // featching Api for AssociatedInstitutions Componenet 
  let logosRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/get_colleges.php`)
  const LogosData = await logosRes.json();

  // featching Api for Testiminials Componenet 
  let TestiminialsRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/get_testimonials.php`)
  const TestiminialsData = await TestiminialsRes.json();

  // featching Api for Testiminials Componenet 
  let LatestNews = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/get_news_feeds.php`)
  const LatestNewsData = await LatestNews.json();

  // featching Api for BlogData  Componenet 
  let BlogRes = await fetch(`https://getyourcollege.in/blog/wp-content/themes/astra/get_three_blogs.php`)
  const BlogData = await BlogRes.json();

  return {
    props: {
      VideoAndNews: { VideoData, NewsData },
      LogosData: LogosData,
      TestiminialsData: TestiminialsData,
      BlogData: BlogData,
      LatestNewsData: LatestNewsData
    }
  };
}

export default Home;
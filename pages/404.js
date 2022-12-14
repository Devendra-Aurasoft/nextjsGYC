import Link from "next/link"
import Head from 'next/head'
function PageNotFound() {
    return <section className='page-404'>
        <Head>
            <title>About Get Your College</title>
            <meta name="viewport" content="It aims to “bridge the gap between the aspirants and the institutions, which they desire and deserve.” We are young and passionate #Edupreneurs, having a base in Indore and a global mindset." />
        </Head>
        <div className="container">
            <div className="bg-404">
                <h2 className='text_404 mt-0 pt-4'>404</h2>
            </div>
        </div>
        <h2 className='main-heading  mt-0'>Oops! Look like you're lost</h2>
        <h6 className='text-center'>The page you are looking for not available!</h6>
        <div className='backtohome'>
            <button className='btn homebtn' > <Link href='/'> Back To Home</Link></button>
        </div>
    </section>
}
export default PageNotFound
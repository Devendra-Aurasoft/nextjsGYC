import Image from 'next/image'
import classes from './banner.module.css'
export default function TopBanner({ imagPath }) {
    return (
        <section className={`${classes.banner_section}`}>
            <Image src={imagPath} width="1440" height="510"></Image>
        </section >
    )
}
import Link from "next/link";
import React, { Fragment } from "react";
import Post from "../../components/Post";

const posts = ({ posts }) => {
    return (
        <>
            <h1>List of posts</h1>
            {posts && posts.length > 0 && posts.map(post => <Fragment key={post.id}><Post post={post}/><Link href={`posts/${post.id}`} passHref>Go Details</Link><hr/></Fragment>)}
        </>
    )
}

export async function getStaticProps() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    response = await response.json();
    return { props: { posts: response.slice(0,5) } };
}

export default posts;
const PostDetails = ({ postDetailedData }) => {
    console.log('postDetailedData : ', postDetailedData);
    return (
        <>
            <h1>{postDetailedData.id} {postDetailedData.title}</h1>
            <p>{postDetailedData.body}</p>
        </>
    )
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { postId: '1' } },
            { params: { postId: '2' } },
            { params: { postId: '3' } },
            { params: { postId: '4' } },
            { params: { postId: '5' } },
        ],
        fallback: false
    }
}
export async function getStaticProps(context) {
    console.log('context : ', context);
    const { params } = context;
    let id = 1;
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    response = await response.json();
    return { props: { postDetailedData: response } };
}

export default PostDetails;
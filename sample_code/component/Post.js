export default function Post({ post }) {
    return (
        <div key={post.id}>
            <p>{post.id} - {post.title}</p>
            <p>{post.body}</p>
        </div>
    )
}
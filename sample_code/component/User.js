export default function User({ user }) {
    return (
        <div>
            <h1>Hello Dev</h1>
            <p>{user.name}</p>
            <p>{user.email}</p>
        </div>
    )
}
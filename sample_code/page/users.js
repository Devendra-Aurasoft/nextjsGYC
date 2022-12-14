import User from "../components/User";

function Users({ users }) {
  return (
    <>
      {/* <h1>Users Component</h1>
      <ul>
        {users.map((user, index) => <li key={`${index}`}>{user.name + '-' + user.email}</li>)}
      </ul> */}
      {users && users.length >0 && users.map((user) => <User user={user} key={user.id}/>)}
    </>
  );
}

export async function getStaticProps() {
  let response = await fetch('https://jsonplaceholder.typicode.com/users')
  response = await response.json();
  return { props: { users: response } };
}

export default Users;
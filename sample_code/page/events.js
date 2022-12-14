import { useState } from "react";
import { useRouter } from "next/router";

function Events({ events }) {
  const [eventsList, setEventList] = useState(events);
  const router = useRouter();
  const fetchFilterList = async () => {
    let response = await fetch('http://localhost:4000/events?category=sports');
    response = await response.json();
    setEventList(response);
    router.push('/events?category=sports', undefined, {shallow: true});
  }
  return (
    <>
      <button onClick={fetchFilterList}>Fatch sports list</button>
      <h1>All Events list</h1>
      {eventsList.map(event => (
        <div key={event.id}>
          <div>{event.id} {event.title} | {event.category}</div>
          <div>{event.description}</div>
          <hr />
        </div>
      ))}
    </>
  );

}
export default Events;
export async function getServerSideProps(context) {
  const { query } = context;
  const { category } = query;
  const queryString = category ? 'category=sports' : '';
  let response = await fetch(`http://localhost:4000/events?${queryString}`)
  response = await response.json();
  return { props: { events: response } };
}
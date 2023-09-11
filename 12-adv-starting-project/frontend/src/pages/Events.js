import { useLoaderData, json, defer, Await } from 'react-router-dom';

import EventsList from '../components/EventsList';
import { Suspense } from 'react';

function EventsPage() {
  /** being replaced by loader in app.js */
  // const [isLoading, setIsLoading] = useState(false);
  // const [fetchedEvents, setFetchedEvents] = useState();
  // const [error, setError] = useState();

  // useEffect(() => {
  //   async function fetchEvents() {
  //     setIsLoading(true);

    /** moved to loader funciton in app.js */
      // const response = await fetch('http://localhost:8080/events');

      // if (!response.ok) {
      //   setError('Fetching events failed.');
      // } else {
      //   const resData = await response.json();
      //   setFetchedEvents(resData.events);
      // }
      // setIsLoading(false);
  //   }

  //   fetchEvents();
  // }, []);

  const { events} = useLoaderData();

  /** suspense is used to show a fallback while we wait for more data to arrive */
  return (
    <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  )

  /** - being replaced by defer
   
  if (data.isError){
    return <p>{data.message}</p>
  }
  const events = data.events;

  return (
    <>
      { {!isLoading && fetchedEvents && <EventsList events={fetchedEvents} />} }
      <EventsList events={events} />
    </>
  );

  */
}

export default EventsPage;

async function loadEvents() {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    // return { isError: true, message: 'Could not fetch events.' };
    // throw new Response(JSON.stringify({ message: 'Could not fetch events.'}), {
    //   status: 500,
    // });
    return json(
      { message: 'Could not fetch events.' },
      { status: 500 });
  } else {
    const resData = await response.json();
    return resData.events;
  }
}

export function loader() {

  return defer({
    events: loadEvents()
  });

/** - moved over to the loadEvents so it can be defered

  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    // return { isError: true, message: 'Could not fetch events.' };
    // throw new Response(JSON.stringify({ message: 'Could not fetch events.'}), {
    //   status: 500,
    // });
    return json(
      { message: 'Could not fetch events.' },
      { status: 500 });
  } else {
    return response;
  }


   */
}
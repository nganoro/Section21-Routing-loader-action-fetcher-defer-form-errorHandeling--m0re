import { useRouteLoaderData, json, redirect } from "react-router-dom";

import EventItem from '../components/EventItem';

const EventsDetail = (props) => {
    /** finds the data based on an parameter search, which is specified as an id in app.js */
    const data = useRouteLoaderData('event-detail');

    return (
        <EventItem event={data.event}/>
    )
};

export default EventsDetail;

/** react router passes an object when executing loader for you
 * request property for a request object
 * params object with all your router parameters
*/
export async function loader({request, params}) {
    const id = params.eventId;

    const response = await fetch('http://localhost:8080/events/' + id);

    if (!response.ok) {
        throw json({message: 'Could not fetch details for selected event.'},
        { status: 500});
    } else {
        return response;
    }
}

export async function action({params, request}) {
    const eventId = params.eventId;
    const response = await fetch('http://localhost:8080/events/' + eventId, {
        method: request.method
    });

    if (!response.ok) {
        throw json(
            { message: 'Could not delete event.' },
            {
                status: 500
            }
        );
    }

    return redirect('/events');
}
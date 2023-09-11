import { json, redirect } from 'react-router-dom';

import EventForm from "../components/EventForm";

const NewEvent = (props) => {
    return (
        <EventForm method="post" />
    )
};

export default NewEvent;

/** moved over to EventForm */

// export async function action({request, params}) {
//     const data = await request.formData();

//     const eventData = {
//         title: data.get('title'),
//         image: data.get('image'),
//         date: data.get('date'),
//         description: data.get('description'),
//     }

//     const response = await fetch('http://localhost:8080/events', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(eventData),
//     });

//     /** 422 is validation code on the back-end */
//     if (response.status === 422) {
//         return response;
//     }

//     if (!response.ok) {
//         throw json({ message: 'Could not save event.'}, { status: 500 });
//     } 
        
//     return eventData && redirect ("/events");
       
// }
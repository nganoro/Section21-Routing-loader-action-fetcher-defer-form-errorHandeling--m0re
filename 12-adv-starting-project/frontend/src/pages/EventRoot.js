import { Outlet } from 'react-router-dom';

import EventsNavigation from '../components/EventsNavigation';

const EventRoot = (props) => {
    /** outlet allows events navigation to act as a wrapper around other pages
     * where the content of those pages are displayed where outlet is*/
    return (
        <>
            <EventsNavigation />
            <Outlet />
        </>
    )
};

export default EventRoot;
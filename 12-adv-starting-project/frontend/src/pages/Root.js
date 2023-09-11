import { Fragment } from "react";

import MainNavigation from '../components/MainNavigation';
import { Outlet, useNavigation } from "react-router-dom";

const Root = (props) => {
    const navigation = useNavigation();

    return (
        <>
            <MainNavigation />
            <main>
                {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
                <Outlet />
            </main>
        </>
    )
};

export default Root;
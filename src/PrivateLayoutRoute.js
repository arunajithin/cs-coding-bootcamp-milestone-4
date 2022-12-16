import React, {useContext} from 'react';
import Box from '@mui/material/Box';
import { Redirect, Route } from 'react-router-dom';
import ResponsiveHeader from './ResponsiveHeader';
import Footer from './Footer';
import { UserContext } from './UserContext';
import HeaderScreen from './HeaderScreen';


function LayoutRoute(props) {

    const {loggedIn} = useContext(UserContext);

    if (!loggedIn) {
        return (
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
            }}>
                <HeaderScreen />
                <ResponsiveHeader {...props}/>
                <Route path={props.path} exact={props.exact} component={props.component} />
                <Footer />
            </Box>
        )
    } else {
        return (
            <Redirect to={'/'} />
        )
    }
}

export default LayoutRoute;
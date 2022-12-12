import React from 'react';
import { Route } from 'react-router-dom';
import ResponsiveHeader from './ResponsiveHeader';
import Footer from './Footer';
import CallToActionBanner from './CallToActionBanner';

function LayoutRoute(props){
    return(
        <React.Fragment>
            <ResponsiveHeader {...props}/>
            <Route path={props.path} exact={props.exact} component={props.component}/>
            <CallToActionBanner/>
            <Footer/>
        </React.Fragment>
    )
}

export default LayoutRoute;

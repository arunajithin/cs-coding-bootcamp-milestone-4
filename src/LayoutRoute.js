import React from 'react';
import { Route } from 'react-router-dom';
import ResponsiveHeader from './ResponsiveHeader';
import Footer from './Footer';
import HeaderScreen from './HeaderScreen';

function LayoutRoute(props){
    return(
        <React.Fragment>
            <HeaderScreen {...props}/>
            <ResponsiveHeader {...props}/>
            <Route path={props.path} exact={props.exact} component={props.component}/>
            <Footer/>
        </React.Fragment>
    )
}

export default LayoutRoute;

import React from 'react';
import { Route } from 'react-router-dom';
import ResponsiveHeader from './ResponsiveHeader';

function LayoutRoute(props){
    return(
        <React.Fragment>
            <ResponsiveHeader {...props}/>
            <Route path={props.path} exact={props.exact} component={props.component}/>
        </React.Fragment>
    )
}

export default LayoutRoute;

import React from 'react';
import { Redirect } from 'react-router-dom';

export const RedirectToIndexRoute = ({match, route}) => {
    const parentPath = match.path || route.path;

    if(match.isExact && route.indexRoute !== undefined) {
        return <Redirect to={parentPath + route.routes[route.indexRoute].path} />
    };
    
    return null;
};
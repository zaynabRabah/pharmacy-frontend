import React from 'react';
import { useSelector } from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
import { AppState } from '../reducers';

export interface IRoutProps {
	component: any;
	isPrivate?: boolean;
	exact?: boolean;
	path?: string;
}

function RouteWrapper({component, isPrivate, ...props}: IRoutProps) {
	const isAuthenticated = useSelector((state: AppState) => state.auth.isAuthenticated );
	if (isPrivate) {
		if (isAuthenticated) {
			return <Route {...props} component={component} />;
		}
		return <Redirect to="/login" />;
	}
	if ((component.name === 'login' || props.path) && isAuthenticated === true) {
		return <Redirect to="/" />;
	}
	return <Route {...props} component={component} />;
}

export default RouteWrapper;

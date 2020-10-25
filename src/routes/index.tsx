import React from 'react';
import {Switch} from 'react-router-dom';
import Route from './route';
import Home from '../pages';
import AssignmentForm from '../pages/assignments/AssignmentForm';
import AssignmentPosting from '../pages/assignments/AssignmentPosting';
import Assignments from '../pages/assignments/Assignments';
import CourseMaterial from '../pages/CourseMaterial';
import CourseTrial from '../pages/CourseTrial';
import Installments from '../pages/Installments';
import Instructors from '../pages/Instructors';
import Invoice from '../pages/Invoice';
import Login from '../pages/Login';
import Meeting from '../pages/Meeting';
import Profile from '../pages/Profile';
import RegisterInstructor1 from '../pages/RegisterInstructor1';
import RegisterInstructor2 from '../pages/RegisterInstructor2';
import RegisterStudent from '../pages/RegisterStudent';
import Terms from '../pages/Terms';
import CoursesList from '../components/courses/coursesList.jsx';
import CourseForm from '../pages/courseForm/CourseForm';
import CourseDescription from '../pages/Courses/coursesDescription.page';
import Meetijng from '../pages/Meeting';
import AdminDashboard from '../pages/adminDashboard/Index';
import AdminInstructors from '../pages/adminDashboard/instructors/index';
import InstructorRegistrationForm1 from '../pages/InstructorRegistration/InstructorRegistrationForm1';
import InstructorRegistrationForm2 from '../pages/InstructorRegistration/InstructorRegistrationForm2';
import AdminLogin from '../pages/adminDashboard/login/login';
export interface IRoutesConfiguration {
	path: string;
	exact: boolean;
	component: any;
	isPrivate: boolean;
}
//TO-Do incase we need subroutes---> https://reactrouter.com/web/example/route-config
const routesConfiguration: IRoutesConfiguration[] = [
	
	{
		path: '/',
		exact: true,
		component: Home,
		isPrivate: false,
	},
	{
		path: '/branches',
		exact: false,
		component: Branches,
		isPrivate: false,
	},
	{
		path: '/login',
		exact: false,
		component: LogIn,
		isPrivate: false,
	},
	{
		path: '/registration',
		exact: false,
		component: Registration,
		isPrivate: false,
	},
	{
		path: '/admin',
		exact: false,
		component: AdminDashboard,
		isPrivate: true,
	},
	{
		path: '/orders',
		exact: false,
		component: orders,
		isPrivate: true,
	},
	{
		path: '/course/:id',
		exact: false,
		component: CourseDescription,
		isPrivate: true,
	},
];
export default function Routes() {
	return (
		<Switch>
			{routesConfiguration.map((route, index) => (
				<Route
					path={route.path}
					exact={route.exact}
					component={route.component}
					isPrivate={route.isPrivate}
					key={index}
				/>
			))}
			<Route component={Login} />
		</Switch>
	);
}

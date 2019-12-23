

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";

import Login from "../views/Login";
import Home from "../views/Home";
import LoadingPage from "../views/LoadingPage";
import Results from "../views/Results";
import Profile from "../views/Profile";

// crear stackNavigator
const AppNavigator = createStackNavigator({
    'LoadingPage': LoadingPage,
    'Login': Login,
    'Home': Home,
    'Results': Results,
    'Profile': Profile
});

export default createAppContainer(AppNavigator);
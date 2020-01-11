
import React from "react";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";

import { 
    LOADING_PAGE,
    LOGIN,
    HOME,
    RESULTS,
    PROFILE,
    GROUPS,
    CREATE_GROUP
 } from "../consts";

import Login from "../views/Login";
import Home from "../views/Home";
import LoadingPage from "../views/LoadingPage";
import Results from "../views/Results";
import Profile from "../views/Profile";
import Groups from "../views/Groups";
import CreateGroup from "../views/Groups/CreateGroup";

// crear stackNavigator
const AppNavigator = createStackNavigator({
    [LOADING_PAGE]: LoadingPage,
    [LOGIN]: Login,
    [HOME]: Home,
    [RESULTS]: Results,
    [PROFILE]: Profile,
    [GROUPS]: Groups,
    [CREATE_GROUP]: CreateGroup
}, {
    // Esconder el header de react navigation
    headerMode: 'none'
});

export default createAppContainer(AppNavigator);
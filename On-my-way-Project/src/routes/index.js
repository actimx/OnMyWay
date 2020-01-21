
import React from "react";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";

import { 
    LOADING_PAGE,
    LOGIN,
    REGISTER,
    HOME,
    RESULTS,
    PROFILE,
    GROUPS,
    CREATE_GROUP,
    SEARCH_GROUP
 } from "../consts";

import Login from "../views/Login";
import Home from "../views/Home";
import LoadingPage from "../views/LoadingPage";
import Results from "../views/Results";
import Profile from "../views/Profile";
import Groups from "../views/Groups";
import CreateGroup from "../views/Groups/CreateGroup";
import SearchGroup from "../views/Groups/SearchGroup";
import Register from "../views/Register";

// crear stackNavigator
const AppNavigator = createStackNavigator({
    [LOADING_PAGE]: LoadingPage,
    [LOGIN]: Login,
    [REGISTER]: Register,
    [HOME]: Home,
    [RESULTS]: Results,
    [PROFILE]: Profile,
    [GROUPS]: Groups,
    [CREATE_GROUP]: CreateGroup,
    [SEARCH_GROUP]: SearchGroup
}, {
    // Esconder el header de react navigation
    headerMode: 'none'
});

export default createAppContainer(AppNavigator);
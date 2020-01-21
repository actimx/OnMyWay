
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
    SEARCH_GROUP,
    EVENT,
    CREATE_EVENT,
    MAPS
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
import Event from "../views/Events";
import CreateEvent from "../views/Events/CreateEvent";
import Maps from "../views/Maps";

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
    [SEARCH_GROUP]: SearchGroup,
    [EVENT]: Event,
    [CREATE_EVENT]: CreateEvent,
    [MAPS]: Maps,
}, {
    // Esconder el header de react navigation
    headerMode: 'none'
});

export default createAppContainer(AppNavigator);
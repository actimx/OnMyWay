import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import {
    REGISTER,
    HOME,
    ARTICLES,
    ELEMENTS,
    PROFILE,
    ONBOARDING,
    PRO
} from '../constants';

import Articles from '../views/Articles';
import Elements from '../views/Elements';
import Home from '../views/Home';
import Onboarding from '../views/Onboarding';
import Pro from '../views/Pro';
import Profile from '../views/Profile';
import Register from '../views/Register';

const AppNavigator = createStackNavigator({
    [PRO]: Pro,
    [REGISTER]: Register,
    [HOME]: Home,
    [ARTICLES]: Articles,
    [ELEMENTS]: Elements,
    [PROFILE]: Profile,
    [ONBOARDING]: Onboarding
});

export default createAppContainer(AppNavigator);
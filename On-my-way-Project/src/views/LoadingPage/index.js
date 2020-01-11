import React, { useEffect } from "react";
import { Spinner, Container, Content, Grid, Text } from 'native-base';

import { LOGIN, HOME, ACCESS_TOKEN } from '../../consts';
import { getItem } from "../../utils/storage";

import style from './style';

export default ({ navigation }) => {
    useEffect(() => {
        redirect();
    });
    
const redirect = async () => {
    const token = getItem(ACCESS_TOKEN);
    console.log("Token: ", token)
    let route = LOGIN;
    if (!token == null) {
        route = HOME;
    }
    
    navigation.navigate(route);
};

    return (
        <Container>
            <Content contentContainerStyle={style.content}>
                <Grid style={style.grid}> 
                    <Spinner color='blue' />
                    <Text>Loading...</Text>
                </Grid>
            </Content>
        </Container>
    );
};
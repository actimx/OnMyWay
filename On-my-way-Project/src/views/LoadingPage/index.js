import React, { useEffect } from "react";
import { Spinner, Container, Content, Grid, Text } from 'native-base';

import { LOGIN } from '../../consts';

import style from './style';

export default ({ navigation }) => {
    useEffect(() => {
        navigation.navigate(LOGIN);
    });
    
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
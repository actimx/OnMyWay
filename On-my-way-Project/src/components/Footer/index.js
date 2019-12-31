import React from "react";
import { Container, Footer, FooterTab, Button, Text, Icon } from "native-base";

import { WHITE, SECONDARY } from "../../consts";

import styles from './style';

export default function MyFooter() {
    return (
            <Footer>
                <FooterTab style={styles.footer}>
                <Button vertical active style={{ backgroundColor: SECONDARY }}>
                    <Icon name="apps" style={{ color: WHITE }}/>
                    <Text style={{ color: WHITE }}>Home</Text>
                </Button>
                <Button vertical >
                    <Icon name="navigate" style={{ color: WHITE }}/>
                    <Text style={{ color: WHITE }}>Navigate</Text>
                </Button>
                <Button vertical>
                    <Icon name="person" style={{ color: WHITE }}/>
                    <Text style={{ color: WHITE }}>Contact</Text>
                </Button>
                <Button vertical>
                    <Icon name="ios-notifications" style={{ color: WHITE }}/>
                    <Text style={{ color: WHITE, fontSize: 8 }}>Notifications</Text>
                </Button>
                </FooterTab>
            </Footer>
        // <Header androidStatusBarColor={PRIMARY_DARK} style={styles.header}>
        //     <Left />
        //     <Body>
        //         <Image source={LOGO_OFICIAL} />
        //     </Body>
        //     <Right>
        //         <Thumbnail source={{ uri: imageUri && imageUri }} small />
        //     </Right>
        // </Header>
    );
}
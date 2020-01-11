import React, {useEffect} from "react";
import { Footer, FooterTab, Button, Text, Icon } from "native-base";
import { withNavigation } from "react-navigation";

import { WHITE, PRIMARY_DARK, GROUPS } from "../../consts";

import styles from './style';

export function MyFooter({ navigation }) {

    const handleGroupsPress = () => {
        //useEffect( () => {
            navigation.navigate(GROUPS);
        //});
    }

    return (
            <Footer>
                <FooterTab style={styles.footer}>
                <Button vertical active style={{ backgroundColor: PRIMARY_DARK }}>
                    <Icon name="apps" style={{ color: WHITE }}/>
                    <Text style={{ color: WHITE }}>Home</Text>
                </Button>
                <Button vertical >
                    <Icon name="navigate" style={{ color: WHITE }}/>
                    <Text style={{ color: WHITE }}>Navigate</Text>
                </Button>
                <Button vertical onPress={handleGroupsPress}>
                    <Icon name="person" style={{ color: WHITE }}/>
                    <Text style={{ color: WHITE }}>Groups</Text>
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

export default withNavigation(MyFooter);
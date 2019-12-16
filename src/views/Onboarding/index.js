import React, { useEffect } from "react";
import {
  ImageBackground,
  Image,
  StyleSheet,
  StatusBar,
  Dimensions
} from "react-native";
import { Block, Button, Text, theme } from "galio-framework";

const { height, width } = Dimensions.get("screen");

// import argonTheme from "../../constants/Theme";
// import Images from "../../constants/Images";


import { HOME, REGISTER, ACCESS_TOKEN } from '../../constants';
import { getItem } from '../../utils/storage';
import { Content, Grid, Spinner, Container } from 'native-base';

import styles from './style';

//Este sera el LOADING_PAGE
export default ({ navigation }) => {
  useEffect(() => {
    redirect();
  });

  const redirect = async () => {
    const token = await getItem(ACCESS_TOKEN);
    let route = REGISTER;
    if (token) {
      route = HOME;
    }
    alert("Ya estas logueado por lo que te redirecciona a Home")
    navigation.navigate(route);
  }

  return (
    <Container>
      <Content contentContainerStyle="{styles.content}">
        <Grid style={styles.grid}>
          <Spinner color="red" />
        </Grid>
      </Content>
    </Container>
  );

}





// class Onboarding extends React.Component {
//   render() {
//     const { navigation } = this.props;
//     return (
//       <Block flex style={styles.container}>
//         <StatusBar hidden />
//         <Block flex center>
//         <ImageBackground
//             source={Images.Onboarding}
//             style={{ height, width, zIndex: 1 }}
//           />
//         </Block>
//         <Block center>
//           <Image source={Images.LogoOnboarding} style={styles.logo} />
//         </Block>
//         <Block flex space="between" style={styles.padded}>
//             <Block flex space="around" style={{ zIndex: 2 }}>
//               <Block style={styles.title}>
//                 <Block>
//                   <Text color="white" size={60}>
//                     Design
//                   </Text>
//                 </Block>
//                 <Block>
//                   <Text color="white" size={60}>
//                     System feo
//                   </Text>
//                 </Block>
//                 <Block style={styles.subTitle}>
//                   <Text color="white" size={16}>
//                     Fully coded React Native components.
//                   </Text>
//                 </Block>
//               </Block>
//               <Block center>
//                 <Button
//                   style={styles.button}
//                   color={argonTheme.COLORS.SECONDARY}
//                   onPress={() => navigation.navigate("Home")}
//                   textStyle={{ color: argonTheme.COLORS.BLACK }}
//                 >
//                   Get Started
//                 </Button>
//               </Block>
//           </Block>
//         </Block>
//       </Block>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: theme.COLORS.BLACK
//   },
//   padded: {
//     paddingHorizontal: theme.SIZES.BASE * 2,
//     position: "relative",
//     bottom: theme.SIZES.BASE,
//     zIndex: 2,
//   },
//   button: {
//     width: width - theme.SIZES.BASE * 4,
//     height: theme.SIZES.BASE * 3,
//     shadowRadius: 0,
//     shadowOpacity: 0
//   },
//   logo: {
//     width: 200,
//     height: 60,
//     zIndex: 2,
//     position: 'relative',
//     marginTop: '-50%'
//   },
//   title: {
//     marginTop:'-5%'
//   },
//   subTitle: {
//     marginTop: 20
//   }
// });

// export default Onboarding;

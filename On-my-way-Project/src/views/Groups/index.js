import React, {useState, useEffect} from "react";
import { Image, TouchableOpacity, FlatList } from "react-native";
import {
    Container, Content, List, ListItem, Thumbnail, Header, Left, Body, Right, 
    Button, Icon, Text, Title, Subtitle, View, Item} from "native-base";
import { CREATE_GROUP, SEARCH_GROUP, PRIMARY_DARK, SINGRUPOS_ICON, TOKEN_LARAVEL_MACACAR96 } from "../../consts";
import styles from "./style";
import ListGroups from "../../components/ListGroups/ListGroups";

//var conta = 1;

export default function Groups({ navigation }) {

    const [idUser, setIdUser] = useState("111"); 
    let [groupsPrepare, setGroupsPrepare] = useState({data : []});
    let [groups, setGroups] = useState({data : []});
    const [startGroups, setStartGroups] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [totalGroups, setTotalGroups] = useState(0);
    const limitGroups = 8;
    const [dataAPI, setDataAPI] = useState(null);

    //console.log(totalGroups);

    useEffect(() => {
        console.log("Consultando API");

        fetch('https://onmyway69.herokuapp.com/api/groups/111', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': TOKEN_LARAVEL_MACACAR96,
            }
        })
            .then((response) => {return response.json()})
            .then((responseJson) => {
                //return responseJson.movies;
                if (groupsPrepare.data.length != 0){
                    setTotalGroups(groupsPrepare.data.length);
                    setGroups(groupsPrepare);
                } else {
                    setGroupsPrepare({data : responseJson.group_information});
                }

            })
            .catch((error) => {
                console.error(error);
            });

    }, [groupsPrepare]);

   /*  useEffect(() => {
        
    }, []); */
    
    //Variables
    //const [dataGroups, setDataGroups] = useState(null);

    // Cargarmos los datos de la API
    /*const dataGroupsApi = async () => {
        try {
            let response = await fetch(
                'https://onmyway69.herokuapp.com/api/groups', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': TOKEN_LARAVEL_MACACAR96,
                }
            });
            let responseJson = await response.json();
            //console.log({data : responseJson.groups});
            if (responseJson != null) {
                setDataGroups({groups : responseJson.groups});
                //console.log({dataGroups});
            } else {
                setDataGroups(null);
            }
        } catch (error) {
            console.error(error);
            return false;
        }
    }
    //console.log({dataGroups});
    if (conta == 1) {
        dataGroupsApi();
        conta++;
    }*/

    const handleBackPress = () => {
        conta = 1;
        navigation.goBack();
    };

    const handleCreateGroupPress = () => {
        conta = 1;
        navigation.navigate(CREATE_GROUP);
    }

    const hanhleSearchGroupPress = () => {
        navigation.navigate(SEARCH_GROUP);
    }

    /*const handlePress = () => {
        //console.log("Si funciona");
        //console.log({dataGroups});
    }*/

    return (
        <Container>
            <Header style={styles.header}>
                <Left>
                    <Button transparent onPress={handleBackPress}>
                        <Icon name='arrow-back'/>
                    </Button>
                </Left>
                <Body>
                    <Title>Groups</Title>
                    <Subtitle>{totalGroups} groups</Subtitle>
                </Body>
                <Right>
                    <Button transparent onPress={hanhleSearchGroupPress}>
                        <Icon name='search' />
                    </Button>
                    <Button transparent onPress={handleCreateGroupPress}>
                        <Icon name='add' />
                    </Button>
                </Right>
            </Header>
            <Content contentContainerStyle={styles.content}>
                <ListGroups groups={groups} isLoading={isLoading}></ListGroups>


                {/* {dataGroups ? (
                    <List>
                        <FlatList
                            data={dataGroups.groups}
                            renderItem={listadoGroup => <GroupsCom data={listadoGroup} />}
                            keyExtractor={(item, index) => "ejemplo"+index}
                            //onEndReachedThreshold={0}
                        />
                    </List>
                    
                ) : (
                    <List>
                        <Item style={{flexDirection: 'column', borderBottomWidth: 0}}>
                            <Image source={SINGRUPOS_ICON} style={styles.googleIcon} />
                            <Text style={{color: PRIMARY_DARK}}>There are no groups at the moment.</Text>
                        </Item>
                    </List>
                )} */}
           
            </Content>
        </Container>
    );
}

/* function GroupsCom(props) {
    const {data} = props;
    //console.log(data);
    const {id, user_id, name, photo} = data.item;

    return(

        <ListItem avatar>
            <Left>
                <Thumbnail source={{ uri: 'https://s3-us-west-2.amazonaws.com/devcodepro/media/blog/como-funciona-reactjs.png' }} />
            </Left>
            <Body>
            <Text>{name}</Text>
                <Text note>{photo}</Text>
            </Body>
        </ListItem>
        
    )
} */
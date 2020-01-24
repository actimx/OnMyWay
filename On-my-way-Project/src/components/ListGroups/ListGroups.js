import React from "react";
import { ActivityIndicator, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import {
    Container, Content, List, ListItem, Thumbnail, Header, Text, View, Left, Body, Right, 
    Button, Icon, Title, Subtitle, Item} from "native-base";
import { CREATE_GROUP, SEARCH_GROUP, PRIMARY_DARK, SINGRUPOS_ICON, TOKEN_LARAVEL_MACACAR96 } from "../../consts";
import { Image, Avatar } from "react-native-elements";

export default function ListGroups(props) {
    const { groups, iLoading } = props;

    /* if (groups.data.length != 0){
        console.log(groups);
    } */
    
    return(
        <View>
            {groups ? (
                <FlatList
                    data={groups.data}
                    renderItem={group => <Group group={group} />}
                    keyExtractor={(item, index) => ""+index}
                    //onEndReached={}
                    //onEndReachedThreshold={0}
                    //ListFooterComponent={}
                />
            ): (
                <View style={styles.loadingGroups}>
                    <ActivityIndicator size="large">
                        <Text>Loading groups</Text>
                    </ActivityIndicator>
                </View>
            )}
        </View>
    )
}

function Group(props){
    const {group} = props;
    const { id, name, photo, user_id} = group.item;
    //console.log(group);

    return(
       /*  <TouchableOpacity onPress={() => console.log('Ir al grupo')}>
            <View style={styles.viewGroups}>
                <View style={styles.viewGroupsImageer}>
                    <Image   
                        resizeMode="cover"
                        source={{ uri: "https://s3-us-west-2.amazonaws.com/devcodepro/media/blog/como-funciona-reactjs.png"}}
                        style={styles.imageGroup}
                        PlaceholderContent={<ActivityIndicator color="fff" />}
                    /> 

                </View>
                <View>
                    <Text style={styles.groupName}>{name}</Text>
                    <Text style={styles.groupTotalUsers}> 0 users </Text>
                </View>
            </View>
        </TouchableOpacity> */
        <List>
            <ListItem avatar onPress={() => console.log('Ir al grupo')} style={styles.listGroups}>
                <Left>
                    <Thumbnail source={{ uri: 'https://s3-us-west-2.amazonaws.com/devcodepro/media/blog/como-funciona-reactjs.png' }} />
                </Left>
                <Body>
                    <Text>{name}</Text>
                    <Text note> 0 users...</Text>
                </Body>
                {/* <Right>
                    <Text note></Text>
                </Right> */}
            </ListItem>
        </List>
        
    )
}

const styles = StyleSheet.create({
    loadingGroups: {
        marginTop: 20,
        alignItems: "center"
    },
    viewGroups: {
        flexDirection: "row",
        margin: 10
    },
    viewGroupsImage: {
        marginRight: 15
    },
    imageGroup: {
        width: 80,
        height: 80
    },
    groupName: {
        fontWeight: "bold"
    },
    groupTotalUsers: {
        paddingTop: 2,
        color: "grey"
    },
    listGroups: {
        /* alignItems: "center", */
    }
});
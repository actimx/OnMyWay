import React from 'react';
import { Container, Content, Text, Item, Button } from "native-base";
import styles from "./style";
import {ScrollView } from 'react-native';

function DetailEvent(props) {
    return (
        <Container>
            <Content contentContainerStyle={styles.content}>
                <ScrollView>
                <Item style={styles.item}>
                    <Text style={styles.title}>Name Group:</Text>
                    <Text>Dummy Data Name</Text>
                </Item>

                <Item style={styles.width}>
                    <Text style={styles.date}>Date: </Text>
                    <Text>29/Feb/2020</Text>
                </Item>
                
                <Item style={styles.widthDescription}>
                    <Text style={styles.title}>Description:</Text>
                    <Text style={{textAlign: 'justify', lineHeight: 25}}>"En vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occasionecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum quga. rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necesitaritatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat ".</Text>
                </Item>
                 
                 <Item style={styles.widthDescription}>
                     <Button style={{marginTop: 15, marginBottom: 15}}>
                         <Text>Continue</Text>
                     </Button>
                 </Item>
                </ScrollView>
            </Content>
        </Container>
    );
}

DetailEvent.navigationOptions = ({navigation}) => {
    return {
        headerTitle: 'Deatil Event'
    }
}

export default DetailEvent
import React from "react";
import { Header, Body, Right, Left, Thumbnail } from "native-base";

export default function MyHeader({ imageUri }) {
    return (
        <Header>
            <Left />
            <Body />
            <Right>
                <Thumbnail source={{ uri: imageUri && imageUri }} small />
            </Right>
        </Header>
    );
}
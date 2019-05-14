import React from 'react';
import { StyleSheet } from 'react-native';
import { Item, Input } from "native-base";

const CustomInput = ({...props}) => {
    return (
        <Item style={styles.item}>
            <Input
                style={styles.input}
                {...props}
            />
        </Item>
    );
};

const styles = StyleSheet.create({
    item: {
        width: '100%',
    },
    input: {},
    icon: {},
});

export default CustomInput;
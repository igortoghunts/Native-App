import React, {Component} from 'react';
import { TextInput, View } from 'react-native';

import { Alert } from 'react-native';
import { reduxForm, Field } from 'redux-form';
import {  Item, Input, Label } from 'native-base';

class Login extends Component {

    onPressHandler = () => {
        Alert.alert("e");
    };

    onChangeHandler = () => {
        Alert.alert("text");
    };

    render() {

        return(
            <View>
                <Item inlineLabel>
                    <Label>Username</Label>
                    <Input />
                </Item>
                <Item inlineLabel last>
                    <Label>Password</Label>
                    <Input />
                </Item>
                <Field component={Input} type="text" name="wdf"/>

            </View>
        );
    }
}

export default reduxForm({
    form: 'login'
})(Login);

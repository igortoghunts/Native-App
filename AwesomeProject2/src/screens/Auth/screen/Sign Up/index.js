import React, {Component} from 'react';
import { Container, Text, Button, Form, Item } from 'native-base';
import { Formik } from 'formik';

import CustomInput from '../../components/input';
import ErrorMesage from '/var/www/AwesomeProject2/src/screens/Auth/components/ErrorMessage.js'

class  SignUp extends Component{
    render() {
        return (
            <Container>
                <Formik
                    initialValues={initialValues}
                    validate={validate}
                    onSubmit={onSubmit}
                    render={this.SignUpForm}
                />
            </Container>
        );
    }

    SignUpForm = props => {
        const {
            isSubmitting,
            errors,
            handleChange,
            handleSubmit,
        } = props;

        return (
            <>
                <Form form={} onSubmit={}>
                    <Item>
                        <CustomInput
                            keyboardType="email-address"
                            icon="email"
                            placeholder="Email"
                            onChangeText={props.handleChange('email')}
                            onBlur={props.handleBlur('email')}
                            value={props.values.email}
                        />
                        <ErrorMesage name='email'/>
                    </Item>
                    <Item>
                        <CustomInput
                            keyboardType="email-address"
                            icon="email"
                            placeholder="Email"
                            onChangeText={props.handleChange('email')}
                            onBlur={props.handleBlur('email')}
                            value={props.values.email}
                        />
                        <ErrorMesage name='email'/>
                    </Item>
                    <Item>
                        <CustomInput
                            keyboardType="email-address"
                            icon="email"
                            placeholder="Email"
                            onChangeText={props.handleChange('email')}
                            onBlur={props.handleBlur('email')}
                            value={props.values.email}
                        />
                        <ErrorMesage name='email'/>
                    </Item>
                </Form>
            </>
        );
    }
}

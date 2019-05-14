// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { object } from 'yup';
// import { StyleSheet, KeyboardAvoidingView, Dimensions } from 'react-native';
// import { Container, Form, Text, Button, View, Icon } from 'native-base';
// import { Formik } from 'formik';
// import CustomInput from '../../components/input';
//
// import AuthErrorMessage from 'screens/Auth/components/ErrorMessage';
//
//
// // import Colors from 'native-base-theme/variables/commonColors';
//
// class Sign In extends Component {
//     state = { error: null };
//     render(){
//         const { navigator, componentId, loading } = this.props;
//         const { height, width } = Dimensions.get('window');
//         const { error } = this.state;
//         return(
//             <Container style={styles.screen}>
//                 {/*<KeyboardAvoidingView>*/}
//                 {/*    <Button*/}
//                 {/*        // transparent*/}
//                 {/*        style={styles.signUpStyle}*/}
//                 {/*        onPress={() => {*/}
//                 {/*            // navigator.push(componentId, {*/}
//                 {/*            //     component: {*/}
//                 {/*            //         // name: constants.SignUp*/}
//                 {/*            //     }*/}
//                 {/*            // });*/}
//                 {/*        }}*/}
//                 {/*    >*/}
//                 {/*        <Text style={styles.text}>Sign Up</Text>*/}
//                 {/*    </Button>*/}
//                     <Text style={styles.titleText}>Sign In</Text>
//                 {/*    <View>*/}
//                 {/*        /!*sign in whit google and facebook*!/*/}
//                 {/*    </View>*/}
//                 {/*    <AuthErrorMessage message={error} />*/}
//                 {/*    <Formik*/}
//                 {/*        initialValues={{ mail: '', password: ''}}*/}
//                 {/*        onsubmit={values => {*/}
//
//                 {/*        }}*/}
//                 {/*    >*/}
//                 {/*        render={props => (*/}
//                 {/*            <>*/}
//                 {/*                <Form>*/}
//                 {/*                     <View style={{ marginBottom: '10%', width: '100%'}}>*/}
//                 {/*                         <CustomInput />*/}
//                 {/*                     </View>*/}
//                 {/*                </Form>*/}
//                 {/*            </>*/}
//                 {/*    )}*/}
//                 {/*    </Formik>*/}
//                 {/*</KeyboardAvoidingView>*/}
//             </Container>
//         );
//     }
// }
//
// const styles = StyleSheet.create({
//     screen: {
//         flex: 1,
//         alignItems: 'center'
//     },
//     signUpStyle: {
//         // position: 'absolute',
//         // top: 60,
//         // alignSelf: 'flex-end'
//     },
//     titleText: {
//         // color: Colors.brandIcon,
//         marginBottom: 20,
//         fontSize: 40,
//         fontWeight: 'bold'
//     },
//     text: {
//         color: Colors.textColorSecondary,
//     }
//
// });
//
// export default Sign In;
//

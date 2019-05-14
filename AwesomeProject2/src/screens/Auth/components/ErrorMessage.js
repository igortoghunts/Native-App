import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Colors from 'native-base-theme/variables/commonColors';

const ErrorMessage = ({ message, type }) => (
    <View style={
        message && {
            backgroundColor: type === 'error'
                ? Colors.brandDanger : type === 'success'
                    ? Colors.brandSuccess : Colors.brandInfo,
                paddingHorizontal: 5,
                paddingVertical: 10,
            }
        }
    >
        <Text style={styles.text}>{message}</Text>
    </View>
);

ErrorMessage.defaultProps = {
    message: 'An unexpected error came up',
    type: 'error'
};

const styles = StyleSheet.create({
    text: {
        color: '#fff',
        textAlign: 'center'
    },
});

export default ErrorMessage;
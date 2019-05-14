import { Navigation } from 'react-native-navigation';
import { registerScreens } from '../screens'

registerScreens();

export function initializing() {
    Navigation.setDefaultOptions({
        topBar: {
            background: {
                color: '#039893'
            },
            title: {
                color: 'white',
            },
            backButton: {
                title: '', // Remove previous screen name from back button
                color: 'white'
            },
            buttonColor: 'white',
        },
        statusBar: {
            style: 'light'
        },
        layout: {
            orientation: ['portrait']
        },
        bottomTabs: {
            titleDisplayMode: 'alwaysShow'
        },
        bottomTab: {
            textColor: 'gray',
            selectedTextColor: 'black',
            iconColor: 'gray',
            selectedIconColor: 'black',
        }
    });

    Navigation.setRoot({
        root: {
            stack: {
                children: [{
                    component: {
                        name: WELCOME_SCREEN,
                        options: {
                            topBar: {
                                visible: false,
                            },
                            statusBar: {
                                style: 'dark'
                            }
                        }
                    }
                }]
            }
        }
    });
}

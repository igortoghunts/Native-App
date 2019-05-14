import { Navigation } from 'react-native-navigation';
import { screens } from './constants';
import { Provider } from 'react-redux';
import store from '../store';

export function registerScreens() {

    Object.keys(screens).forEach(name => {
        Navigation.registerComponentWithRedux(name, screens[name], Provider, store);
    })

}
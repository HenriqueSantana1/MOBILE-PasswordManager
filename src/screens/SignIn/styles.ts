import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        fontFamily: theme.fonts.roboto400,
        backgroundColor: '#fff'
    },
    logo: {
        width: 300,
        height: 300,
        marginTop: getStatusBarHeight() + 30
    },
    containerInput: {
        width: '90%',
        alignItems: 'center'
    },
    input: {
        width: '90%',
        marginBottom: 18,
        borderColor: '#55CC88',
        color: '#222',
        borderBottomWidth: 0.5,
        borderRadius: 7,
        padding: 10
    },
    btnSubmit: {
        marginTop: '5%',
        backgroundColor: '#55CC88',
        width: '90%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7
    },
    txtSubmit: {
        color: '#fff',
        fontSize: 18,
    },
    btnSignUp: {
        marginTop: 10
    },
    txtSignUp: {
        color: '#55CC88'
    }
});
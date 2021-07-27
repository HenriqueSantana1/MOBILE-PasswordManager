import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: theme.fonts.roboto400,
        backgroundColor: '#fff'
    },
    containerInput: {
        marginTop: 20,
        width: '90%',
        alignItems: 'center'
    },
    input: {
        width: '90%',
        marginBottom: 18,
        borderColor: theme.colors.primary,
        color: '#222',
        borderBottomWidth: 0.5,
        borderRadius: 7,
        padding: 10
    },
    btnSubmit: {
        marginTop: '5%',
        backgroundColor: theme.colors.primary,
        width: '90%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7
    },
    txtSubmit: {
        color: '#fff',
        fontSize: 18,
        fontFamily: theme.fonts.roboto700
    }
});
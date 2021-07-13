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
    header: {
        width: '100%',
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: getStatusBarHeight(),
        borderBottomWidth: 0.5,
        borderBottomColor: '#333'
    },
    backIcon: {
        position: 'absolute',
        left: 10
    },
    txtHeader: {
        color: '#333',
        fontSize: 20,
        fontFamily: theme.fonts.roboto700
    },
    btn: {
        marginTop: '5%',
        backgroundColor: '#55CC88',
        width: '90%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7
    },
    txtBtn: {
        color: '#fff',
        fontSize: 18,
        fontFamily: theme.fonts.roboto700
    },
    btnLogout: {
        position: 'absolute',
        bottom: 15,
        backgroundColor: '#55CC88',
        width: '90%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7
    }
});
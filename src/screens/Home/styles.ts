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
        paddingHorizontal: 20,
        paddingVertical: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: getStatusBarHeight(),
        borderBottomWidth: 0.5,
        borderBottomColor: '#eee'
    },
    listContainer: {
        flex: 1,
        alignItems: 'center',
    },
    list: {
        marginTop: '5%',
        width: '90%',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 4
    },
    title: {
        fontFamily: theme.fonts.roboto700,
        fontSize: 16
    },
    txtPW: {
        fontFamily: theme.fonts.roboto400,
        fontSize: 13
    },
    txtHeader: {
        color: '#333',
        fontSize: 20,
        fontFamily: theme.fonts.roboto700
    },
    configIcon: {
        position: 'absolute',
        right: 10,
        paddingHorizontal: 10 
    },
    btn: {
        marginTop: '5%',
        backgroundColor: theme.colors.primary,
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
    btnAdd: {
        position: 'absolute',
        width: 55,
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        right: 25,
        bottom: 25,
        borderRadius: 50,
        color: '#fff',
        backgroundColor: theme.colors.primary
    }
});
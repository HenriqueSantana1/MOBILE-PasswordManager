import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        fontFamily: theme.fonts.roboto400
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
        alignItems: 'center'
    },
    list: {
        marginTop: '5%',
        width: '90%',
        alignItems: 'center',
        borderWidth: 0.5,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        backgroundColor: theme.colors.primary,
        borderColor: '#666',
        padding: 5
    },
    title: {
        fontFamily: theme.fonts.roboto700,
        fontSize: 18,
        color: '#fff'
    },
    passwordView: {
        width: '90%',
        alignItems: 'center',
        borderColor: '#666',
        borderWidth: 0.5,
        borderTopWidth: 0,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        padding: 10,
        backgroundColor: '#fff'
    },
    txtPW: {
        fontFamily: theme.fonts.roboto400,
        fontSize: 13,
        padding: 4
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
        borderColor: '#333',
        borderWidth: 0.5,
        borderRadius: 50,
        color: '#fff',
        backgroundColor: theme.colors.primary
    }
});
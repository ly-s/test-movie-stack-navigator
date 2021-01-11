import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    icon: {
        width: 300,
        height: 300,
        borderWidth: 5,
        borderRadius: 50,
        margin: 5,
    },
    list: {
        fontSize: 30,
        fontWeight: 'bold',
        margin: 5,
    }
});

export default styles;
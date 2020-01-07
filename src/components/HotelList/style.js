import { StyleSheet, Dimensions } from 'react-native'
const { height, width } = Dimensions.get('window')
export default StyleSheet.create({
    container: {
        width: width,
        margin: 20,
    },
    imageStyle: {
        width: '90%',
        height: 200, 
        resizeMode: "cover", 
        borderRadius: 10
    },
    titleStyle: {
        marginTop: 5, 
        fontSize: 16, 
        fontWeight: '700'
    },
    subtitle: {
        marginTop: 5, 
        fontSize: 10,
    },
    price: {
        marginTop: 5, 
        fontSize: 10,
        fontWeight: '700'
    }
});
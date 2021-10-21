import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#efeee9',
        alignItems: 'center',
       // justifyContent: 'center',
        width: "100%"
    },
    textHeader: {
        fontSize: 24,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: '90%',
        textAlign: "center",
        marginTop: 50
    },
    text: {
        fontSize: 18,
        width: '90%',
        textAlign: "center",
        marginTop: 20
    },
    picker: {
        marginVertical: 30,
        width: 400,
        padding: 10,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "black",
    },
    button :{
        borderRadius:15,
        backgroundColor: "salmon",
        paddingHorizontal: 20,
        paddingVertical:5,
    },
    textButton: {
        fontSize: 18,
        color: 'white'
    }
});

export default styles;

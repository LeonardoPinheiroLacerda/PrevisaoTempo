import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#efeee9',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%"
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 10,
        marginTop: 85
    },
    icon : {
        resizeMode: "stretch",
        width: 60,
        height: 60,
        margin: 10
    },
    weekDays: {
        display: 'flex',
        flexDirection: 'row'
    },
    day: {
        marginHorizontal: 4,
        backgroundColor: '#2ed9f0',
        borderRadius: 10,
        padding: 5
    },
    dayFocused : {
        marginHorizontal: 4,
        backgroundColor: 'rgb(53, 145, 165)',
        borderRadius: 10,
        padding: 5
    },
    invisible: {
        opacity: 0,
    },
    weatherView: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'center',
        alignContent: 'center'
    },
    weatherDesc: {
        fontSize: 18,
        alignSelf: "center"
    },
    dayText:{
        fontSize: 19,
        color:'white'
    },
    bold: {
        fontWeight: 'bold',
        fontSize: 17,
        marginHorizontal: 15,
        marginVertical: 5
    },
    nonBold : {
        fontWeight: '200',
        fontSize: 17
    },
    refresh: {
        backgroundColor: "salmon",
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
        position: 'absolute',
        top: 60,
        right: 30
    },
    refreshText: {
        color: 'white',
        fontSize: 18
    }
});

export default styles;

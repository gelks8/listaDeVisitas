import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A1A1A',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2%',
    },
    text: {
        fontSize: 28,
        color: "#FFF",
        textAlign: "center",
        marginBottom: "21%",
        marginTop: "55%"
    },
    enterButton: {
        backgroundColor: "#087A0B",
        borderRadius: 8,
    },
    titleButton: {
        fontSize: 31
    },
    logo: {
        width: "65%",
        height: "35%",
        position: "absolute",
        top: 89
    },
    sponsers: {
        position: "absolute",
        bottom: 34
    },
    
    sendButton: {
        backgroundColor: "#087A0B",
        borderRadius: 8,
        marginTop: "3%"
    },

    //forms styles
    form: {
        flex:3,
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
        marginTop: "3%",
        padding: '5%',
    },
    partnersFormsView: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: '5%'
    },
    bodeReiFormsViewImg: {
        marginStart: "3%",
        width: 120,
        height: 120,
    },
    input: {
        width: "100%",
        height: 38,
        marginBottom: "8%",
        borderWidth: 1,
        backgroundColor: "#232428",
        borderColor: "white",
        padding: '3%',
        color: '#9EA1A4'
    },

});

export default styles
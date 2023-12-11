import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A1A1A',
        alignItems: 'center',
        justifyContent: 'center',
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
    partners: {
        position: "absolute",
        top: 5
    },
    textInput: {
        backgroundColor: "#232428",
        width: "70%",
        marginBottom: "8%"
    },
    sendButton: {
        backgroundColor: "#087A0B",
        borderRadius: 8,
        marginTop: "3%"
    },
    textForms: {
        fontSize: 28,
        color: "#FFF",
        textAlign: "center",
        marginBottom: "8%",
    },
});

export default styles
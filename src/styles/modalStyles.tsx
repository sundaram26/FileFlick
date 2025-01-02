import { StyleSheet } from "react-native";
import { screenHeight, screenWidth } from "../utils/Constants";

export const modalStyles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    qrContainer: {
        marginHorizontal: 20,
        marginTop: screenHeight * 0.12,
        padding: 20,
        borderColor: "#ccc",
        alignSelf: 'center',
        justifyContent: "center",
        alignItems: 'center',
        overflow: 'hidden'
    },
    noCameraImage: {
        width: '100%',
        height: "100%",
        resizeMode: 'cover'
    },
    camera: {
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
    },
    info: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 25
    },
    infoText1: {
        fontFamily: 'Okra-Medium',
        textAlign: "center",
        opacity: 0.7,
        marginBottom: 20
    },
    infoText2: {
        fontFamily: 'Okra-Medium',
        textAlign: "center",
        fontSize: 14
    },
    skeleton: {
        width: 250,
        height: 250,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: '#f0f0f0',
    },
    shimmerOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
    },
    shimmerGradient: {
        width: '100%',
        height: '100%',
    },
    closeButton: {
        padding: 4,
        borderRadius: 100,
        zIndex: 4,
        position: 'absolute',
        top: 10,
        right: 10,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.5,
        elevation: 5,
        shadowRadius: 5,
        shadowColor: "#888",
        backgroundColor: "#fff",
    }
})
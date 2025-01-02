import { StyleSheet } from "react-native";
import { screenWidth } from "../utils/Constants";

export const sendStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#85CAFB",
    },
    mainContainer: {
        flex: 1,
    },
    deviceDot: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
    },
    popup: {
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: 120,
    },
    deviceImage: {
        width: 35,
        height: 35,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#fff',
    },
    deviceText: {
        textAlign: 'center',
        paddingVertical: 2,
        paddingHorizontal: 5,
        borderRadius: 10,
        maxWidth: 140
    },
    radarContainer: {
        position: 'absolute',
        width: screenWidth,
        height: screenWidth,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backButton: {
        padding: 4,
        borderRadius: 100,
        zIndex: 4,
        position: "absolute",
        top: 10,
        left: 10,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.5,
        elevation: 5,
        shadowRadius: 5,
        shadowColor: "#888",
        backgroundColor: "#fff",
    },
    infoContainer: {
        margin: 20,
        marginTop: 60,
        justifyContent: "center",
        alignItems: "center",
        opacity: 0.9,
    },
    lottieContainer: {
        position: "absolute",
        zIndex: 4,
        width: "100%",
        height: "100%",
        alignSelf: "center",
    },
    lottie: {
        width: "100%",
        height: "100%",
    },
    animationContainer: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        height: screenWidth,
    },
    profileImage: {
        height: 50,
        width: 50,
        resizeMode: "cover",
        borderRadius: 100,
        zIndex:5
    },
    qrButton: {
        backgroundColor: "#fff",
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        gap: 5,
        borderRadius: 20,
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.5,
        elevation: 5,
        shadowRadius: 12,
        shadowColor: "#fff",
    },
});

import { Platform } from "react-native";
import { StyleSheet } from "react-native";
import { Colors } from "../utils/Constants";

export const bottomTabStyles = StyleSheet.create({
    container: {
        width: '100%',
        position: "absolute",
        bottom: 0,
        flexDirection: "row",
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        alignItems: 'center',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.3,
        elevation: 10,
        borderTopWidth: Platform.OS === 'android' ? 1 : 0,
        borderColor: "#eee",
        shadowRadius: 5,
        shadowColor: "#888",
        paddingHorizontal: 25,
        paddingTop: 15,
        paddingBottom: Platform.OS === 'ios' ? 25 : 15,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
    },
    qrCode: {
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        backgroundColor: Colors.primary,
        bottom: 15,
        position: 'absolute',
        left: '48%',
        borderWidth: 4,
        borderColor: '#fff',
        shadowOffset: { width: 1, height: -15 },
        shadowOpacity: 0.1,
        elevation: 5,
        shadowRadius: 5,
        shadowColor: "#888",
    }
})

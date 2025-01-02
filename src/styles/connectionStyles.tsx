import { StyleSheet } from "react-native";
import { Colors, screenHeight } from "../utils/Constants";

export const connectionStyles = StyleSheet.create({
    container: {
        marginTop: 15,
        padding: 15
    },
    connectionContainer: {
        marginTop: 29,
        padding: 10,
        flexDirection: "row",
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        borderRadius: 10
    },
    sendReceiveButton: {
        paddingHorizontal: 10,
        borderRadius: 2,
        paddingVertical: 5,
        gap: 4,
        flexDirection: 'row',
        alignItems: "center",
    },
    disconnectButton: {
        paddingHorizontal: 10,
        backgroundColor: '#f2f2f2',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: "center",
        gap: 5,
        width: '35%'
    },
    fileContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        marginTop: 25
    },
    sendReceiveContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        padding: 12,
        borderBottomColor: '#ccc',
    },
    activeButton: {
        backgroundColor: Colors.primary,
        borderColor: '#888',
        borderWidth: 1,
    },
    inactiveButton: {
        backgroundColor: '#fff',
        borderColor: '#888',
        borderWidth: 1,
    },
    sendReceiveButtonContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    sendReceiveDataContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 1,
    },
    sendRecieveButton: {
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        borderRadius: 2,
        paddingVertical: 5,
        gap: 4,
        flexDirection: 'row',
        alignItems: "center",
    },
    fileItem: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between',
        padding: 12,
        backgroundColor: "#fff",
        borderBottomWidth: 1,
        borderBottomColor: "#ccc"
    },
    fileInfoContainer: {
        flexDirection: 'row',
        alignItems: "center",
    },
    fileDetails: {
        marginLeft: 10,
        width: '70%'
    },
    openButton: {
        backgroundColor: Colors.primary,
        borderRadius: 100,
        padding: 5,
        paddingHorizontal: 15,
        justifyContent: 'center',
        alignItems: "center"
    },
    fileList: {
        height: screenHeight * 0.4,
    },
    noDataContainer: {
        height: screenHeight * 0.4,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
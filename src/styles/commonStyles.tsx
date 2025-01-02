import { StyleSheet } from "react-native";
import { Colors, screenWidth } from "../utils/Constants";

export const commonStyles = StyleSheet.create({
    baseContainer: {
        flex: 1,
        backgroundColor: Colors.background
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.background
    },
    img: {
        width: screenWidth * 0.5,
        height: screenWidth * 0.5,
        resizeMode: 'contain'
    },
    flexRowBetween: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    flexRowGap: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4
    }
})
import { StyleSheet } from "react-native";

export const optionStyles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between",
        padding: 15,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.1,
        elevation: 5,
        shadowRadius: 5,
        shadowColor: "#888",
        backgroundColor:"#fff",
        borderRadius: 10,
   
        borderWidth: 1,
        marginTop:25,
        borderColor: '#eee'
      },
      subContainer: {
        justifyContent: 'center',
        alignItems: "center"
      }
})
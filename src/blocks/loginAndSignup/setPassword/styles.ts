import { StyleSheet } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../../../../Matrics";
import { popBold, popMediumItalic } from "../../../../fonts/Font";

export const styles = StyleSheet.create({
    backImg:{
        height:verticalScale(950),
        width:horizontalScale(390),
    },
    loginText:{
        marginTop:verticalScale(250),
        fontSize:verticalScale(32),
        fontFamily:popBold,
   
        color:"#EAF4F4",
        marginLeft:horizontalScale(32)

    },
    loginCard:{
        backgroundColor:"rgba(49, 51, 51, 0.50)",
        width:horizontalScale(358),
        height:verticalScale(357),
        borderRadius:verticalScale(12),
        marginLeft:horizontalScale(10),
        marginTop:horizontalScale(16),
        padding:16,
        paddingTop:verticalScale(24)
    },

    codeVerified:{
        color:"#EAF4F4",
        fontSize:verticalScale(16),
        // fontWeight:"500",
        fontFamily:popMediumItalic,
        fontStyle:"normal",
        marginTop:verticalScale(8)
    },
    checkedCard:{
        display:'flex',
        alignItems:"center"

    },
    alLeast8cha:{
        color:"red",
        fontSize:verticalScale(12),
        fontWeight:"300",
        marginTop:verticalScale(8),
        marginBottom:verticalScale(8)
    },
    margin:{
        marginBottom:verticalScale(16),
        marginTop:verticalScale(24)
    },
    ckeckStyle:{
        height:verticalScale(64),
        width:verticalScale(64)
    }
})
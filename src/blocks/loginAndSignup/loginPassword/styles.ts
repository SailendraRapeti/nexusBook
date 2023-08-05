import { StyleSheet } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../../../../Matrics";
import { popBold } from "../../../../fonts/Font";

export const styles = StyleSheet.create({
    backImg:{
        height:verticalScale(950),
        width:horizontalScale(390),
    },
    loginText:{
        marginTop:verticalScale(250),
        fontSize:verticalScale(32),
        // fontWeight:"400",
        fontFamily:popBold,
        color:"#EAF4F4",
        marginLeft:horizontalScale(32)

    },
    loginCard:{
        backgroundColor:"rgba(49, 51, 51, 0.50)",
        width:horizontalScale(358),
        height:verticalScale(287),
        borderRadius:verticalScale(12),
        marginLeft:horizontalScale(10),
        marginTop:horizontalScale(16),
        padding:16,
        paddingTop:verticalScale(24)
    },
    checkedIcon:{
        width:horizontalScale(24),
        height:verticalScale(24),
        marginLeft:horizontalScale(75)
    },
    userIcon1:{
        width:horizontalScale(70),
        height:verticalScale(70),
        marginRight:horizontalScale(16)
      
    },
    userName:{
        color:"#EAF4F4",
        fontSize:verticalScale(16),
        // fontWeight:"400",
        fontStyle:"normal",
        fontFamily:popBold
    },
    userEmail:{
        color:"#C4CCCC",
        fontSize:verticalScale(14),
        fontWeight:"300",

    },
    userFlex:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        marginBottom:verticalScale(24)
        
      
    },
    passWordField:{
        marginTop:horizontalScale(24),
    },
    forgetPassword:{
        color:"#CDE7BE",
        fontSize:verticalScale(14),
        // fontWeight:"400",
        fontFamily:popBold,
        textAlign:"center",
        marginTop:verticalScale(16),
        
    },
    passwordError:{
        color:"red",
        marginTop:verticalScale(1),
        marginBottom:verticalScale(1)
    }
})
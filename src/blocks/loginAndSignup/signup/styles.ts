import { StyleSheet } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../../../../Matrics";
import { popBold } from "../../../../fonts/Font";

export const styles = StyleSheet.create({
    backImg:{
        height:verticalScale(950),
        width:horizontalScale(390),
    },
    loginText:{
        marginTop:verticalScale(235),
        fontSize:verticalScale(32),
        fontFamily:popBold,
      
        color:"#EAF4F4",
        marginLeft:horizontalScale(32)

    },
    loginCard:{
        backgroundColor:"rgba(49, 51, 51, 0.50)",
        width:horizontalScale(358),
        height:verticalScale(437),
        borderRadius:verticalScale(12),
        marginLeft:horizontalScale(10),
        marginTop:horizontalScale(16),
        padding:16,
        paddingTop:verticalScale(24)
    },
    paraText:{
        color:"#EAF4F4",
        fontSize:verticalScale(14),
        marginBottom:verticalScale(24)

    },
    emailFild:{
        marginBottom:verticalScale(16),
        marginTop:verticalScale(16)
    },
    terms:{
        marginTop:verticalScale(16),
        marginBottom:verticalScale(16),
        fontSize:verticalScale(14),
        color:'#EAF4F4',
    },
    terms1:{
        color:"#CDE7BE",
    },
    paraText1:{
        color:"#EAF4F4",
        fontSize:verticalScale(14),
        marginTop:verticalScale(24),
        marginBottom:verticalScale(24),
        textAlign:"center"

    },
    errorText:{
        color:"red",
        fontSize:verticalScale(12),
        marginTop:verticalScale(2)
    }
})
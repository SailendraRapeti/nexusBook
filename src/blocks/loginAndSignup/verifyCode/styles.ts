import { StyleSheet } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../../../../Matrics";
import { popBold } from "../../../../fonts/Font";

export const styles = StyleSheet.create({
    backImg:{
        height:verticalScale(950),
        width:horizontalScale(390),
    },
    backTologintitle:{
        marginTop:verticalScale(60),
        display:"flex",
        flexDirection:"row",
        marginLeft:horizontalScale(16)
    },
    backToLoginText:{
        marginLeft:horizontalScale(8),
        color:"#EAF4F4",
        fontSize:verticalScale(16),
        fontStyle:"normal",
        fontWeight:"400"
    },
    recoverPasswordTit:{
        color:"#EAF4F4",
        fontSize:verticalScale(32),
        // fontWeight:"400",
        fontFamily:popBold,
        fontStyle:"normal",
        marginLeft:horizontalScale(32),
        marginTop:verticalScale(170)
    },
    loginCard:{
        backgroundColor:"rgba(49, 51, 51, 0.50)",
        width:horizontalScale(358),
        height:verticalScale(259),
        borderRadius:verticalScale(12),
        marginLeft:horizontalScale(10),
        marginTop:horizontalScale(16),

        paddingTop:verticalScale(24),
        paddingLeft:horizontalScale(16),
        paddingRight:horizontalScale(16)
    },
    recoveryText:{
        height:verticalScale(34),
        width:horizontalScale(326),
        marginBottom:horizontalScale(10)
        
    },
    reoveryPara:{
        fontSize:verticalScale(14),
        fontStyle:"normal",
        fontWeight:"300",
        color:"#EAF4F4"

    },
    recoverMailError:{
        marginTop:verticalScale(2),
        marginBottom:verticalScale(2),
        fontSize:verticalScale(13),
        color:"red"
    }, signUpText:{
        textAlign:"center",
        marginTop:verticalScale(24),
        marginBottom:verticalScale(24),
        color:"#EAF4F4",
        fontWeight:"400",
        fontSize:verticalScale(14),
     
    },
    signUp:{
        color:"#CDE7BE",
        fontWeight:"bold",
        fontSize:verticalScale(14),
        
    },
    resend:{
        display:"flex",
        flexDirection:"row",
        textAlign:"center",
        justifyContent:"center"
    },
    resendIcon:{
        marginTop:verticalScale(26),
        marginLeft:horizontalScale(4),
        height:verticalScale(14),
        width:horizontalScale(14)
    }
    
    

})
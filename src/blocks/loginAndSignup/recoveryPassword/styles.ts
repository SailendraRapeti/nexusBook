import { StyleSheet } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../../../../Matrics";
import { popBold, popMedium } from "../../../../fonts/Font";

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
        fontFamily:popMedium
       
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
        marginBottom:horizontalScale(24)
        
    },
    reoveryPara:{
        fontSize:verticalScale(14),
        fontStyle:"normal",
        fontWeight:"300",
        color:"#EAF4F4"

    },
    recoverMailError:{
        fontSize:verticalScale(12),
        color:"red",
        margin:verticalScale(3)
    }, 
    
    signUpText:{
        textAlign:"center",
        marginTop:verticalScale(24),
        marginBottom:verticalScale(24),
        color:"#EAF4F4",
        fontWeight:"400",
        fontSize:verticalScale(14),
     
    },
    signUp:{
        color:"#CDE7BE",
        fontWeight:"700",
        fontSize:verticalScale(14),
        
    },
    leftArrow:{
        width:horizontalScale(24),
        height:verticalScale(24)
    }
    
    

})
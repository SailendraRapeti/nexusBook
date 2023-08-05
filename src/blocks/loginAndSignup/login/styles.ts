import { StyleSheet } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../../../../Matrics";
import { popBold, regular, semiBold } from "../../../../fonts/Font";

export const styles = StyleSheet.create({
    backImg:{
        height:verticalScale(950),
        width:horizontalScale(390),
    },
    loginText:{
        marginTop:verticalScale(220),
        fontSize:verticalScale(32),
        fontFamily:popBold,
        // fontWeight:"400",
        color:"#EAF4F4",
        marginLeft:horizontalScale(32)

    },
    loginCard:{
        backgroundColor:"rgba(49, 51, 51, 0.50)",
        width:horizontalScale(358),
        height:verticalScale(500),
        borderRadius:verticalScale(12),
        marginLeft:horizontalScale(10),
        marginTop:horizontalScale(16),
     paddingLeft:horizontalScale(16),
     paddingRight:horizontalScale(16),
        paddingTop:verticalScale(24)
    },
    forgetPassword:{
        color:"#CDE7BE",
        fontSize:verticalScale(14),
        // fontWeight:"400",
        textAlign:"center",
        marginTop:verticalScale(16),
        marginBottom:verticalScale(30),
        fontFamily:regular
    },
    lineFlex:{
        display:'flex',
        flexDirection:"row",
        marginLeft:horizontalScale(1),
        alignItems:"center",
        justifyContent:"center",
        marginBottom:verticalScale(30)

    },
    orTest:{
        marginLeft:horizontalScale(16),
        marginRight:horizontalScale(16),
        color:"#939999",
        fontSize:verticalScale(14),
        
    },
faceBookButton:{
    height:verticalScale(48),
    width:horizontalScale(326),
    borderRadius:verticalScale(8),
    backgroundColor:"#EAF4F4",
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    marginBottom:verticalScale(16)
},
faceBookImg:{
    marginLeft:horizontalScale(16),
    marginRight:horizontalScale(40),
  
},
faceBookText:{
    fontSize:verticalScale(13),
    // fontWeight:"400",
    fontFamily:popBold,
    color:"#313333"
    },
    signUpText:{
        textAlign:"center",
        marginTop:horizontalScale(18),
        color:"#EAF4F4",
        fontWeight:"400",
        fontSize:verticalScale(14),
     
    },
    signUp:{
        color:"#CDE7BE",
        fontFamily:popBold,
        fontSize:verticalScale(14),
        
    },
    errorMsg:{
        color:"red",
        marginTop:verticalScale(3),
        fontSize:verticalScale(12)
    },
    lineStyle:{
        width:horizontalScale(138)
    }
    
})
import { StyleSheet } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../../../Matrics";
import { popBold, popBoldItalic, popMedium, popMediumItalic } from "../../../fonts/Font";


export const styles = StyleSheet.create({
    container:{
        backgroundColor:"#181A1A",
     flex:1,
     padding:verticalScale(16)
     
    },
    loginText:{
        // marginTop:verticalScale(16),
        fontFamily:popBold,
        fontSize:verticalScale(24),
        color:"#EAF4F4",
        // marginLeft:horizontalScale(16)

    },
    user:{
        height:verticalScale(48),
        width:verticalScale(48)
    },
    line:{
        width:verticalScale(60),
        // marginLeft:horizontalScale(16)
       
    },
    userFlex:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
       
    },
    status:{
        width:verticalScale(76),
        height:verticalScale(76),
        borderColor:"#CDE7BE",
        borderWidth:verticalScale(2),
        marginRight:verticalScale(12),
        marginTop:verticalScale(20),
        justifyContent:"center",
        alignItems:"center",
        borderRadius:verticalScale(38),
       
    },
    statusImage:{
        width:verticalScale(64),
        height:verticalScale(64),
        borderRadius:verticalScale(38)
    },
    storyText:{
        color:"#EAF4F4",
        fontSize:verticalScale(10),
        marginTop:verticalScale(10),
        textAlign:"center",
        marginRight:verticalScale(12),
        marginBottom:verticalScale(28)

    },
    trendsCard:{
        paddingTop:verticalScale(12),
        paddingBottom:verticalScale(12),
        paddingRight:horizontalScale(16),
        paddingLeft:horizontalScale(16),
        borderWidth:verticalScale(1),
        borderColor:"#313333",
        borderRadius:verticalScale(20),
        margin:verticalScale(4),
        marginBottom:verticalScale(32)

    },
    trendFlex:{
        display:"flex",
        flexDirection:"row",
        gap:verticalScale(4)
    },
    trendingText:{
        color:"#EAF4F4",
        fontSize:verticalScale(14),
       
        fontFamily:popMedium
        

    },
    trendIcon:{
        width:verticalScale(18),
        height:verticalScale(18),
 
    },
    bookCard:{
        height:verticalScale(201),
        width:horizontalScale(342),
        backgroundColor:"#2D3047",
        borderRadius:moderateScale(8),
        paddingTop:verticalScale(16),
        paddingLeft:horizontalScale(16),
        paddingRight:horizontalScale(9)
    },
    textCard:{
        height:verticalScale(48),
        width:horizontalScale(266)

    },
    cardText:{
        fontSize:verticalScale(20),
        fontWeight:"400",
        fontStyle:"normal",
        color:"#EAF4F4"
    },
    dollar:{
        fontSize:verticalScale(36),
        color:"#CDE7BE",
        marginTop:verticalScale(10)

    },
    cardFlex:{
        display:"flex",
        flexDirection:"row",

        gap:verticalScale(4)
    },
    cardImg:{
        height:verticalScale(85),
        width:horizontalScale(58),
        marginTop:verticalScale(27)
    },
    cardFlex1:{
        display:"flex",
        flexDirection:"row",
        width:horizontalScale(315),
        justifyContent:"space-between",
    
     
    },
    cardFlex2:{
        display:"flex",
        flexDirection:"row",
        width:horizontalScale(255),
        justifyContent:"space-between",
        borderWidth:verticalScale(2)
     
    },
    cardImg1:{
        height:verticalScale(85),
        width:horizontalScale(58),
        marginTop:verticalScale(19)
    },
    cardImg2:{
        height:verticalScale(85),
        width:horizontalScale(58),
        marginTop:verticalScale(4)
    },
    terms:{
        fontSize:verticalScale(10),
        fontWeight:"400",
        color:"#EAF4F4"
    },
    cardStyle:{
        height:horizontalScale(201),
        width:horizontalScale(345),
        // marginRight:horizontalScale(9.5),
        borderRadius:moderateScale(8)
    },
    trendhEAD:{
        color:"#FFFFFF",
        fontSize:verticalScale(20),
        // fontWeight:"700",
        fontFamily:popBold
    },
    showAllText:{
        color:"#CDE7BE",
        fontSize:verticalScale(12),
        fontWeight:"400",

    },
    arrow:{
        height:verticalScale(16),
        width:verticalScale(16)
    },
    showFlex:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        width:verticalScale(68),
      

    },
    trenddFlex:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        width:horizontalScale(340),
        marginTop:verticalScale(32),
        alignItems:"center",
       marginBottom:verticalScale(16)


    },
    trendImage:{
        height:verticalScale(184),
        width:horizontalScale(128),
        margin:verticalScale(8)
    },
    trendCrdText:{
        color:"#EAF4F4",
        fontSize:verticalScale(12),
        // fontWeight:"500",
        fontFamily:popMediumItalic,
        fontStyle:"normal",
        marginTop:verticalScale(8),

    },
    trendCardIcons:{
        marginRight:horizontalScale(4),
        height:verticalScale(14),
        width:horizontalScale(14),
   

    },
    fiveM:{
        color:'#C4CCCC',
        fontSize:verticalScale(10),
        fontWeight:"400"

    },
    headFlex:{
        display:"flex",
        flexDirection:"row"
    },
    headFlex1:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        width:horizontalScale(88),
        marginTop:verticalScale(8)
    },
    musicCard:{
        height:verticalScale(70),
        padding:verticalScale(5),
        width:horizontalScale(340),
        backgroundColor:"#626666",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginTop:verticalScale(20),

    },
    musicCrdImage:{
        height:verticalScale(54),
        width:horizontalScale(38),
    
    },
    play:{
        height:verticalScale(20),
        width:horizontalScale(20)
    },
    play1:{
        height:verticalScale(54),
        width:horizontalScale(38),
    
    },
    
    smallFlex:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        gap:verticalScale(12)

    },
    largeFlex:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between"


    },
    textStyle:{
        color:"#CDE7BE",
        fontFamily:popBold,
        fontSize:verticalScale(14)
    },
    textStyle1:{
        color:"#EAF4F4",
        fontFamily:popMedium,
        fontSize:verticalScale(12)
    },
  
   
})
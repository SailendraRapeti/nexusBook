import { StyleSheet } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../../../Matrics";
import { popBold } from "../../../fonts/Font";


export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#181A1A"
    },
    bgStyles:{
        height:verticalScale(357),
        width:horizontalScale(418),
        display:"flex",
        flexDirection:"column",
        justifyContent:"flex-end",
        // alignItems:"center",
        
    },
    bgImage:{
        height:verticalScale(140),
        width:horizontalScale(153),
        marginLeft:horizontalScale(110),
    
    },
    playCard:{
        height:verticalScale(56),
        width:horizontalScale(358),
        backgroundColor:"#232538",
        marginLeft:horizontalScale(8),
        // padding:verticalScale(16),
        borderRadius:moderateScale(8),
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-around"

        
    },
    readNexus:{
        fontSize:verticalScale(14),
        color:"#EAF4F4",
        fontFamily:popBold
    },
    smallFlex:{
        display:'flex',
        flexDirection:"row",
        alignItems:"center"
       
    },img:{
        marginRight:horizontalScale(10),
        height:verticalScale(24),
        width:verticalScale(24)
    },
    bookMark:{
        height:verticalScale(20),
        width:verticalScale(20)
    },
    para:{
        color:"#FFFFFF",
        fontSize:verticalScale(20),
        fontFamily:popBold

    },
    paraa:{
        color:"#FFFFFF",
        fontSize:verticalScale(20),
        fontFamily:popBold,
        marginTop:verticalScale(24)

    },
    para1:{
        color:"#FFFFFF",
        fontSize:verticalScale(14),
        fontFamily:popBold

    },
    paraFlex:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginBottom:verticalScale(12)
      

    },
    container3:{
        padding:verticalScale(16)
    },
    funk:{
        color:"#EAF4F4",
        fontSize:verticalScale(14)
    },
    playCard1:{
        height:verticalScale(40),
        width:horizontalScale(345),
        backgroundColor:"#232538",
        // padding:verticalScale(16),
        borderRadius:moderateScale(8),
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-around",
        marginTop:verticalScale(24),
     

        
    },
    bookText:{
        color:"#FFFFFF",
        fontSize:verticalScale(15),
        fontFamily:popBold,
        marginTop:verticalScale(24)
    },
    paraText:{
        color:"#EAF4F4",
        fontSize:verticalScale(14)
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
        backgroundColor:"#313333",
        marginTop:verticalScale(16)

    },
    btnText:{
        color:"#EAF4F4",
        fontSize:verticalScale(12)
    },
    songsList:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:verticalScale(16)
    },
    titleStyle:{
        color:"#FFFFFF",
        fontFamily:popBold,
        fontSize:verticalScale(16)
    },
    paraStyle:{
        color:"#EAF4F4",
        fontSize:verticalScale(14)
    },
    playimg:{
        height:verticalScale(32),
        width:verticalScale(32),
        alignSelf:'center'
    }

})
import { StyleSheet } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../../../../Matrics";

export const styles = StyleSheet.create({
    container:{
        backgroundColor:"#181A1A",
        flex:1
    },
    generText:{
        marginTop:verticalScale(73),
        fontSize:verticalScale(32),
        fontWeight:"400",
        color:"#EAF4F4",
        marginLeft:horizontalScale(32)

    },
    generCard:{
        backgroundColor:"rgba(49, 51, 51, 0.50)",
        width:horizontalScale(358),
        height:verticalScale(562),
        borderRadius:verticalScale(12),
        marginLeft:horizontalScale(10),
        marginTop:horizontalScale(16),

        paddingTop:verticalScale(24),
        paddingLeft:horizontalScale(16),
        paddingRight:horizontalScale(16)
    },
    cardText:{
        color:"#EAF4F4",
        fontSize:verticalScale(14),
        fontWeight:"400",
        fontStyle:"normal",
        marginBottom:verticalScale(24)
    },
    checkIcon:{
        height:verticalScale(24),
        width:horizontalScale(24),
        
    },
    generItem:{
        display:"flex",
        flexDirection:"row",
        padding:verticalScale(12),
        backgroundColor:"white",
        borderRadius:moderateScale(20)
        
    },
    itemsText:{
        fontSize:verticalScale(14),
        marginTop:verticalScale(3)
    
    },
  
    card:{
        display:"flex",
        flexDirection:"row",
        width:horizontalScale(326),
        height:verticalScale(320),
     
        flexWrap:"wrap",
        gap: 10,
    },
    show:{
        textAlign:"center",
        color:"#CDE7BE",
        marginBottom:verticalScale(24),
        marginTop:verticalScale(16)
    },
    selectText:{
        fontSize:verticalScale(12),
        color:"#C4CCCC",
        textAlign:"center",
        marginTop:verticalScale(12)
    }
    
    
})
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import { horizontalScale, moderateScale, verticalScale } from '../../../../Matrics'
import { popBold, popMedium, semiBold } from '../../../../fonts/Font'
interface Iprops{
    text:string,
    onpress:any,
    bgColor:string,
    test:string,
}
export class CustomButton extends Component<Iprops> {
  render() {
    const {text,onpress,bgColor,test}=this.props
    return (
      <View>
        <TouchableOpacity testID={test} style={{...styles.button,backgroundColor:bgColor}} onPress={onpress}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
const styles = StyleSheet.create({
    button:{
        height:verticalScale(47),
        width:horizontalScale(326),
        borderRadius:verticalScale(8),
        // backgroundColor:"#CDE7BE",
        display:"flex",
        justifyContent:"center",
        textAlign:"center",
        alignItems:"center",
    },
    buttonText:{
        fontSize:verticalScale(13),
        // fontWeight:"400",
        color:"#313333",
        fontFamily:popBold
        
    }
})

export default CustomButton
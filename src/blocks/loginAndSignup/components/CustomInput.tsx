import { Text, View,TextInput, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import { horizontalScale, moderateScale, verticalScale } from '../../../../Matrics';
import { regular } from '../../../../fonts/Font';
interface Iprops{
    placeholder:string,
    onChangeTextt: any,
    bColor:string,
    test:string,
    value:string,


}

export class CustomInput extends Component <Iprops> {
  render() {
    const {placeholder, onChangeTextt, bColor,test,value} = this.props;

    return (
    <View style={{...styles.input,backgroundColor:bColor}}>
      <TextInput
      testID={test}
      value={value}
      style={styles.inputText}
      placeholder={placeholder}
      onChangeText={onChangeTextt}/>
       
    </View>
    )
  }
}
const styles = StyleSheet.create({
  input:{
    height:verticalScale(47),
    width:horizontalScale(326),
    borderRadius:verticalScale(8),
    textAlign:"center",
    display:"flex",
    justifyContent:"center",
   

  },
  inputText:{
    fontFamily:"400",
    // fontFamily:regular,
    fontSize:verticalScale(13),
    marginLeft:horizontalScale(16),
    color:"#939999",
    
  }

})
export default CustomInput
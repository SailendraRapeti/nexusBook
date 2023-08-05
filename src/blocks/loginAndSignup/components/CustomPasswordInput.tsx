import { Text, View,TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { horizontalScale, moderateScale, verticalScale } from '../../../../Matrics';
import { closeEye,openEye} from '../assects';
interface Iprops{
    placeholder:string,
    value:any,
    onChangeText?: ((text: string) => void) | undefined,
    bColor:string,
    test:string,
    
}
interface Istate{
  isPassword:boolean
}

export class CustomPasswordInput extends Component <Iprops,Istate> {
  state={
    isPassword:false
  }
  render() {
    const {placeholder, value, onChangeText, bColor,test} = this.props;

    return (
    <View style={{...styles.input,backgroundColor:bColor}}>
      <TextInput
      testID={test}
      value={value}
      style={styles.inputText}
      secureTextEntry={!this.state.isPassword}
      placeholder={placeholder}
      onChangeText={onChangeText}/>
      <TouchableOpacity onPress={()=>this.setState({isPassword:!this.state.isPassword})}>
      {this.state.isPassword ? <Image style={styles.eyeIcon} source={openEye}/> : <Image style={styles.eyeIcon} source={closeEye}/>}
      </TouchableOpacity>
  


    </View>
    )
  }
}
const styles = StyleSheet.create({
  input:{
    height:verticalScale(48),
    width:horizontalScale(326),
    borderRadius:verticalScale(8),
    textAlign:"center",
    display:"flex",
    flexDirection:"row",
    alignItems:"center",

  },
  inputText:{
    fontFamily:"400",
    fontSize:verticalScale(14),
    marginLeft:horizontalScale(10),
    color:"#939999",
    width:horizontalScale(260)
  },
  eyeIcon:{
    width:horizontalScale(24),
    height:verticalScale(24),
    tintColor:"#626666"
   
   
    

  }

})
export default CustomPasswordInput
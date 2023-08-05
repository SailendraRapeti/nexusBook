import { Image, ImageBackground, StatusBar, Text, View,TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { backImgg,userIcon ,checked} from '../assects'
import { styles } from './styles'
import { loginTittle,userEmail,userMail,passwordPlaceHolder,continueText,forgetPasswordText} from './config'
import CustomPasswordInput from '../components/CustomPasswordInput'
import CustomButton from '../components/CustomButton'

interface Iprops{
  navigation?:any
}
interface Istate{
  password:string,
  errorPassword:string
}
class Password extends Component<Iprops,Istate> {
  state = {
    password:"",
    errorPassword:''
  }
  onPassword=()=>{
    const {password} = this.state
    if(password === ""){
    this.setState({errorPassword:"*please enter password"})
  }else{
    this.props.navigation.navigate("Geners")

  }

}
  onForgetPassword=()=>{
    this.props.navigation.navigate("RecoveryPassword")
  }
  render() {

    return (
     <ImageBackground source={backImgg} 
      style={styles.backImg}>

<StatusBar
          translucent
          hidden={false}
          barStyle="light-content"
          backgroundColor="transparent"
        />
        <Text testID='title' style={styles.loginText}>{loginTittle}</Text>
        <View style={styles.loginCard}>
            <View style={styles.userFlex}>
                <Image style={styles.userIcon1} source={userIcon}/>
                <View>
                    <Text style={styles.userName}>{userMail}</Text>
                    <Text style={styles.userEmail}>{userEmail}</Text>
                </View>
                <Image style={styles.checkedIcon} source={checked}/>
            </View>

<CustomPasswordInput test="passwordId" value={this.state.password}  bColor={"#EAF4F4"} placeholder={passwordPlaceHolder} onChangeText={(text)=>this.setState({password:text})}/>
<Text testID='ErrorTextId' style={styles.passwordError}>{this.state.errorPassword}</Text>
<CustomButton test='button' bgColor={"#CDE7BE"} text={continueText} onpress={()=>this.onPassword()}/>
<TouchableOpacity testID='textButton' onPress={this.onForgetPassword}>
<Text style={styles.forgetPassword}>{forgetPasswordText}</Text>
</TouchableOpacity>

        </View>

     </ImageBackground>
    )
  }
}

export default Password
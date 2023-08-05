import { Image, ImageBackground, StatusBar, Text, View } from 'react-native'
import React, { Component } from 'react'
import { backImgg,userIcon ,checked} from '../assects'
import { styles } from './styles'
import { loginTittle,userEmail,userMail,passwordPlaceHolder,continueText,forgetPasswordText, passwordPlaceHolder1} from './config'
import CustomPasswordInput from '../components/CustomPasswordInput'
import CustomButton from '../components/CustomButton'
interface Iprops{
  navigation?:any
}
interface Istate{
  password:string,
  password1:string,
  errorPassword:string

}
class SetPassword extends Component<Iprops,Istate> {
  state = {
    password:"",
    password1:"",
    errorPassword:''
  }
  onPassword=()=>{

    const { password, password1 } = this.state;
    if (password !== password1) {
      this.setState({ errorPassword: "*Passwords do not match" });
    } else if (password.length < 8) {
      this.setState({ errorPassword: "*Password must be at least 8 characters long" });
    } else {
      this.props.navigation.navigate("Login");
    }
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
        <Text style={styles.loginText}>{loginTittle}</Text>
        <View style={styles.loginCard}>
           <View style={styles.checkedCard}>
            <Image style={styles.ckeckStyle} source={checked}/>
            <Text style={styles.codeVerified}>{userMail}</Text>
           </View>
<View style={styles.margin}>
<CustomPasswordInput test='password_id' value={this.state.password} bColor={"#EAF4F4"} placeholder={passwordPlaceHolder} onChangeText={(text)=>this.setState({password:text})}/>

</View>

<CustomPasswordInput value={this.state.password1} test='password_id1' bColor={"#EAF4F4"} placeholder={passwordPlaceHolder1} onChangeText={(text)=>this.setState({password1:text})}/>
<Text testID='setErrorId' style={styles.alLeast8cha}>{this.state.errorPassword}</Text>
<CustomButton test='setPassBtn' bgColor={"#CDE7BE"} text={continueText} onpress={()=>this.onPassword()}/>

        </View>

     </ImageBackground>
    )
  }
}

export default SetPassword
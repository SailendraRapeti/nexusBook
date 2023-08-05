import { ImageBackground, StatusBar, Text, View } from 'react-native'
import React, { Component } from 'react'
import { backImgg } from '../assects'
import { styles } from './styles'
import { singnUpTittle,signUpContent, name, email, password, text, text1, and, text2, createAccBtN, alreadAccount, logIn } from './config'
import CustomInput from '../components/CustomInput'
import CustomPasswordInput from '../components/CustomPasswordInput'
import CustomButton from '../components/CustomButton'
interface Iprops{
  navigation?:any
}
interface Istate{
  namee:string,
  emaill:string,
  passwordd:string,
  nameError: string,
      emailError: string,
      passwordError: string,
}
export class SignUp extends Component<Iprops,Istate> {
  state = {
    namee:"",
    emaill:"",
    passwordd:"",
    nameError: '',
      emailError: '',
      passwordError: '',

  }
  validateName = () => {
    const { namee } = this.state;
    let nameError = '';
    if (namee.trim() === '') {
      nameError = '*Name is required';
    }
    this.setState({ nameError });
    return nameError === '';
  }
  validateEmail = () => {
    const { emaill } = this.state;
    let emailError = '';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emaill.trim() === '') {
      emailError = 'Email is required';
    } else if (!emailRegex.test(emaill)) {
      emailError = '*Invalid email format';
    }
    this.setState({ emailError });
    return emailError === '';
  }
  validatePassword = () => {
    const { passwordd } = this.state;
    let passwordError = '';
    if (passwordd.trim() === '') {
      passwordError = '*Password is required';
    }
    this.setState({ passwordError });
    return passwordError === '';
  }
  onText=(text:string)=>{
    this.setState({namee:text})

  }

  onEmail=(text:string)=>{
    this.setState({emaill:text})

  }
  onPassword=(text:string)=>{
    this.setState({passwordd:text})

  }

  onLogin=()=>{
    const isValid = this.validateName() && this.validateEmail() && this.validatePassword();
    if (isValid) {
      // navigate to the next screen
      this.props.navigation.navigate('Login');
    }

  }
  render() {
    const {namee,emaill,passwordd}=this.state
    console.log(namee,emaill,passwordd)
    return (
   <ImageBackground source={backImgg} style={styles.backImg}>
    <StatusBar
          translucent
          hidden={false}
          barStyle="light-content"
          backgroundColor="transparent"
        />
        
<Text style={styles.loginText}>{singnUpTittle}</Text>
<View style={styles.loginCard}>
  <Text style={styles.paraText}>{signUpContent}</Text>
  <CustomInput test='NameFild' value={this.state.namee} onChangeTextt={this.onText} bColor={"#EAF4F4"} placeholder={name}/>
{ this.state.nameError != "" && <Text testID = 'nameError' style={styles.errorText}>{this.state.nameError}</Text>}
  <View style={styles.emailFild}>
  <CustomInput test="EmailFild" value={this.state.emaill} onChangeTextt={this.onEmail} bColor={"#EAF4F4"} placeholder={email}/>
  { this.state.emailError != "" && <Text style={styles.errorText}>{this.state.emailError}</Text>}
  </View>
  <CustomPasswordInput test='PasswordId' value={this.state.passwordd} onChangeText={this.onPassword} bColor={"#EAF4F4"} placeholder={password}/>
  { this.state.passwordError != "" && <Text style={styles.errorText}>{this.state.passwordError}</Text>}
  <Text style={styles.terms}>{text} <Text style={styles.terms1}>{text1}</Text><Text>{and}</Text><Text style={styles.terms1}>{text2}</Text></Text>
  <CustomButton test='CreateBtn' onpress={this.onLogin} bgColor={"#CDE7BE"} text={createAccBtN}/>
  <Text style={styles.paraText1}>{alreadAccount}<Text onPress={this.onLogin} style={styles.terms1}>{logIn}</Text></Text>
  

</View>
   </ImageBackground>
    )
  }
}

export default SignUp
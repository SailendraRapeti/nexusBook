import {
  Image,
  ImageBackground,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component} from 'react';
import {styles} from './styles';
import {
  backImgg,
  lineImg,
  facebookLogo,
  googleLogo,
  appleLogo,
} from '../assects';
import {
  loginTittle,
  emailPlaceHolder,
  continueText,
  forgetPasswordText,
  OrText,
  facebookText,
  appleText,
  googleText,
  signUpText,
  signUpText1,
  emailError
} from './config';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import Password from '../loginPassword/Password';
interface Iprops{
  navigation ?:any
}
interface Istate{
  inputValue:string,
  emailErrorMsg:any,
}
export class Login extends Component<Iprops,Istate> {
  state = {
    inputValue: '',
    emailErrorMsg:"",
  };
  validateEmail = () => {
    const { inputValue } = this.state;
    let emailErrorMsg = '';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (inputValue.trim() === '') {
      emailErrorMsg = '*Email is required';
    } else if (!emailRegex.test(inputValue)) {
      emailErrorMsg = '*Invalid email format';
    }
    this.setState({ emailErrorMsg });
    return emailErrorMsg=== '';
  }
  onContinue = () => {
    const isValid = this.validateEmail() 
    if(isValid){
         this.props.navigation.navigate("Password")
    }
    // const {inputValue}=this.state 
    // if(inputValue === ""){
    //   this.setState({emailErrorMsg:[emailError]})
    // }else{
    //   this.setState({emailErrorMsg:""})
    //   this.props.navigation.navigate("Password")
    // }
    
  };
  onSignUp=()=>{
    this.props.navigation.navigate("SignUp")
  }
  render() {
    console.log(this.state.inputValue);
    return (
      <ImageBackground
        resizeMode="cover"
        source={backImgg}
        style={styles.backImg}>
        <StatusBar
          translucent
          // hidden={false}
          barStyle="light-content"
          backgroundColor="transparent"
        />
        <Text testID='login_id' style={styles.loginText}>{loginTittle}</Text>

        <View style={styles.loginCard}>
          <CustomInput
            bColor='#EAF4F4'
            onChangeTextt={(text:string) => this.setState({inputValue: text})}
            placeholder={emailPlaceHolder}
            test="Email"
            value={this.state.inputValue}
          />
<Text testID='errorMsg' style={styles.errorMsg}>{this.state.emailErrorMsg}</Text>
          <CustomButton
          test="button_id"
            bgColor={'#CDE7BE'}
            text={continueText}
            onpress={() => this.onContinue()}
          />
          <Text style={styles.forgetPassword}>{forgetPasswordText}</Text>
          <View style={styles.lineFlex}>
            <Image style={styles.lineStyle} source={lineImg} />
            <Text style={styles.orTest}>{OrText}</Text>
            <Image style={styles.lineStyle} source={lineImg} />
          </View>
          <TouchableOpacity>
            <View style={styles.faceBookButton}>
              <Image style={styles.faceBookImg} source={facebookLogo} />
              <Text style={styles.faceBookText}>{facebookText}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.faceBookButton}>
              <Image style={styles.faceBookImg} source={googleLogo} />
              <Text style={styles.faceBookText}>{googleText}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.faceBookButton}>
              <Image style={styles.faceBookImg} source={appleLogo} />
              <Text style={styles.faceBookText}>{appleText}</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.signUpText}>{signUpText}<Text testID='SignUp' onPress={this.onSignUp} style={styles.signUp}>{signUpText1}</Text></Text>
        </View>
      </ImageBackground>
    );
  }
}

export default Login;

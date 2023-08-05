import { Image, ImageBackground, StatusBar, Text, View } from 'react-native'
import React, { Component } from 'react'
import { backImgg ,leftArrow} from '../assects'
import { styles } from './styles'
import { backToLoginText ,recoverPasswordTittle,recoverpara,email,submit, signUpText, signUpText1} from './config'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'
interface Iprops{
  navigation?:any
}
interface Istate{
  recoverEmail:string,
  recoverMailError:string
}
export class RecoveryPassword extends Component<Iprops,Istate> {
  state = {
    recoverEmail:'',
    recoverMailError:""
  }
  validateEmail = () => {
    const { recoverEmail } = this.state;
    let recoverMailError = '';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (recoverEmail.trim() === '') {
      recoverMailError = '*Email is required';
    } else if (!emailRegex.test(recoverEmail)) {
      recoverMailError = '*Invalid email format';
    }
    this.setState({ recoverMailError });
    return recoverMailError=== '';
  }
  onSubmit=()=>{
    const isValid = this.validateEmail()
    if(isValid){
      this.props.navigation.navigate("Verify")
    }
    
  }
  onSignUp=()=>{
    this.props.navigation.navigate("SignUp")
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
        <View style={styles.backTologintitle}>
            <Image style={styles.leftArrow} source={leftArrow} />
            <Text style={styles.backToLoginText}>{backToLoginText}</Text>
        </View>
        <Text style={styles.recoverPasswordTit}>{recoverPasswordTittle}</Text>
        <View style={styles.loginCard}>

            <View style={styles.recoveryText}>
<Text style={styles.reoveryPara}>{recoverpara}</Text>
            </View>
<CustomInput value={this.state.recoverEmail} test='RecoveryFild_id' placeholder={email} bColor={"#EAF4F4"} onChangeTextt={(text:string)=>this.setState({recoverEmail:text})}/>
<Text testID='recoveryError' style={styles.recoverMailError}>{this.state.recoverMailError}</Text>
<CustomButton test='RecoveryBtn' text={submit} bgColor={"#CDE7BE"} onpress={()=>this.onSubmit()} />
<Text style={styles.signUpText}>{signUpText}<Text testID='signUp_id' onPress={this.onSignUp} style={styles.signUp}>{signUpText1}</Text></Text>
        </View>
        </ImageBackground>
    )
  }
}

export default RecoveryPassword
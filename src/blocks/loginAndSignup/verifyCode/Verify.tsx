import { Image, ImageBackground, StatusBar, Text, View } from 'react-native'
import React, { Component } from 'react'
import { backImgg ,leftArrow,reload} from '../assects'
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
export class Verify extends Component <Iprops,Istate>{
  state = {
    recoverEmail:'',
    recoverMailError:""
  }
  onSubmit=()=>{
    this.props.navigation.navigate("SetPassword")
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
            <Image source={leftArrow} />
            <Text style={styles.backToLoginText}>{backToLoginText}</Text>
        </View>
        <Text style={styles.recoverPasswordTit}>{recoverPasswordTittle}</Text>
        <View style={styles.loginCard}>

            <View style={styles.recoveryText}>
<Text style={styles.reoveryPara}>{recoverpara}</Text>
            </View>
<CustomInput placeholder={email} bColor={"#EAF4F4"} onChangeText={(text)=>this.setState({recoverEmail:text})}/>
<Text style={styles.recoverMailError}>{this.state.recoverMailError}</Text>
<CustomButton text={submit} bgColor={"#CDE7BE"} onpress={()=>this.onSubmit()} />
<View style={styles.resend}>
<Text style={styles.signUpText}>{signUpText}<Text style={styles.signUp}>{signUpText1}</Text></Text>
       <Image style={styles.resendIcon} source={reload}/>
</View>

        </View>
        </ImageBackground>
    )
  }
}

export default Verify
import { Image, StatusBar, Text, View } from 'react-native'
import React, { Component } from 'react'
import { styles } from './styles'
import { btn, cardTextt, generText, showMore, sleectText } from './config'
import { generCheck } from '../assects'
import CustomButton from '../components/CustomButton'

export class Geners extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar 
        translucent
        barStyle="light-content"
        backgroundColor="transparent"/>
        <Text style={styles.generText}>{generText}</Text>
        <View style={styles.generCard}>
            <Text style={styles.cardText}>{cardTextt}</Text>
            <View style={styles.card}>

   
        
          <View style={styles.generItem}>
              <Text style={styles.itemsText}>function</Text>
                <Image style={styles.checkIcon} source={generCheck}/> 
            </View>
         
            <View style={styles.generItem}>
              <Text style={styles.itemsText}>func</Text>
                <Image style={styles.checkIcon} source={generCheck}/> 
            </View>

            <View style={styles.generItem}>
              <Text style={styles.itemsText}>functn</Text>
                <Image style={styles.checkIcon}  source={generCheck}/> 
            </View>

            </View>
<Text style={styles.show}>{showMore}</Text>
<CustomButton bgColor={"#CDE7BE"} text={btn}/>
<Text style={styles.selectText}>{sleectText}</Text>
        </View>
      </View>
    )
  }
}

export default Geners
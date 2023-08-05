import { Image, ImageBackground, StatusBar, Text, View } from 'react-native'
import React, { Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './styles'
import { detailBgImg } from '../loginAndSignup/assects'
import { bookMark, bulb, clock, detailRead, detailhEAD, fut } from '../home/assects'
import { PlayNexus, ReadNexus, book, funk, key, min, para, para1, para2 } from './config'

export class Detail extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="light-content"
        />
        <ImageBackground  style={styles.bgStyles} source={detailBgImg}>
            <Image resizeMode="contain" style={styles.bgImage} source={fut}/>
            <View style={styles.playCard}>
              <View style={styles. smallFlex}>
                <Image style={styles.img}source={detailRead}/>
                <Text style={styles.readNexus}>{ReadNexus}</Text>
              </View>
              <View style={styles. smallFlex}>
                <Image style={styles.img} source={detailhEAD}/>
                <Text style={styles.readNexus}>{PlayNexus}</Text>
              </View>
            </View>

        </ImageBackground>


        <View style={styles.container3}>
        <View style={styles.paraFlex}>
          <Text style={styles.para} >{para}</Text>
          <Image style={styles.bookMark} source={bookMark}/>
        </View>
       
  <Text style={styles.para1}>{para1}</Text>
  <Text style={styles.funk}>{funk}</Text>

  <View style={styles.playCard1}>
              <View style={styles. smallFlex}>
                <Image style={styles.img}source={clock}/>
                <Text style={styles.readNexus}>{min}</Text>
              </View>
              <View style={styles. smallFlex}>
                <Image style={styles.img} source={bulb}/>
                <Text style={styles.readNexus}>{key}</Text>
              </View>

             
            </View>
            <Text style={styles.bookText}>{book}</Text>
            <Text style={styles.paraText}>{para2}</Text>
</View>
      </SafeAreaView>
    )
  }
}

export default Detail
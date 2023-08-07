import { FlatList, Image, ImageBackground, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './styles'
import { detailBgImg } from '../loginAndSignup/assects'
import { bookMark, bulb, clock, detailRead, detailhEAD, frame, fut, play } from '../home/assects'
import { PlayNexus, ReadNexus, book, chapter, final, funk, key, min, para, para1, para2 } from './config'
import { ScrollView } from 'react-native-gesture-handler'
const btn = [{id:1,text:"Personal growth"},{id:2,text:"Culture & Society"},{id:3,text:"Fiction"},{id:4,text:"Mind & Philosophy"}]
const musicList = [{id:1,name:"Introducion",para:"Subscribe to unlock all 2 key ideas from book"},{id:2,name:"Introducion",para:"Subscribe to unlock all 2 key ideas from book"},{id:3,name:"Introducion",para:"Subscribe to unlock all 2 key ideas from book"}]
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


        <ScrollView style={styles.container3}>
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

            <FlatList data={btn} numColumns={2}  renderItem={({item}:any)=>
        <View>
           <View style={styles.trendsCard}>
     
              <TouchableOpacity>
            
                <Text style={styles.btnText}>{item.text}</Text>
              </TouchableOpacity>
            </View>
          </View>
        
        } />
        <Text style={styles.paraa}>{chapter}</Text>
        <FlatList data={musicList} renderItem={({item}:any)=>
        <View style={styles.songsList}>
          <Text style={styles.titleStyle}>0{item.id}</Text>
          <View>
          <Text style={styles.titleStyle}>{item.name}</Text>
          <Text style={styles.paraStyle}>{item.para}</Text>
          </View>
        
          <Image style={styles.playimg} source={play} />
        </View>
      
      
      }/>
      <Text>{final}</Text>

      <Image source={frame}/>
        
</ScrollView>
      </SafeAreaView>
    )
  }
}

export default Detail
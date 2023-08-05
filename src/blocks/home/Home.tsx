
import {Image, StatusBar, Text, View, FlatList, ScrollView,TouchableOpacity, Modal, Alert} from 'react-native';
import React, {Component} from 'react';
import {styles} from './styles';
import {
  good,
  cardText,
  dollars,
  terms,
  trendd,
  show,
  fiveMinitus,
  quikRevesion,
} from './config';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  homeLine,
  trend,
  read,
  quick,
  goodGuy,
  creative,
  fut,
  futOff,
  creativeOff,
  hammer,
  homeCard,
  showAll,
  head,
  read1,
  play,
  next,
} from './assects';
import {userIcon} from '../loginAndSignup/assects';
// import { FlatList, ScrollView } from 'react-native-gesture-handler';
import {horizontalScale, verticalScale} from '../../../Matrics';

const songs = [
  {
    title: 'Death Bed',
    artist: 'Powfu',
    artwork: 'https://samplesongs.netlify.app/album-arts/death-bed.jpg',
    url: 'https://samplesongs.netlify.app/Death%20Bed.mp3',
    id: '1',
  },
  {
    title: 'Bad Liar',
    artist: 'Imagine Dragons',
    artwork: 'https://samplesongs.netlify.app/album-arts/bad-liar.jpg',
    url: 'https://samplesongs.netlify.app/Bad%20Liar.mp3',
    id: '2',
  },
  {
    title: 'Faded',
    artist: 'Alan Walker',
    artwork: 'https://samplesongs.netlify.app/album-arts/faded.jpg',
    url: 'https://samplesongs.netlify.app/Faded.mp3',
    id: '3',
  },
  {
    title: 'Hate Me',
    artist: 'Ellie Goulding',
    artwork: 'https://samplesongs.netlify.app/album-arts/hate-me.jpg',
    url: 'https://samplesongs.netlify.app/Hate%20Me.mp3',
    id: '4',
  },
  {
    title: 'Solo',
    artist: 'Clean Bandit',
    artwork: 'https://samplesongs.netlify.app/album-arts/solo.jpg',
    url: 'https://samplesongs.netlify.app/Solo.mp3',
    id: '5',
  },
  {
    title: 'Without Me',
    artist: 'Halsey',
    artwork: 'https://samplesongs.netlify.app/album-arts/without-me.jpg',
    url: 'https://samplesongs.netlify.app/Without%20Me.mp3',
    id: '6',
  },
];
const trendBtn=[
  {id:1,
  name:"Trending"},
  {id:2,
  name:"5-Minutes Read"},
  {id:3,
  name:"Quick Listen"}
]
interface Iprops{
  navigation?:any
}
export class Home extends Component <Iprops>{
  state = {
    activeId : trendBtn[0].id,
    isShow:false,
    filtData:[],
    modalVisible:false
  }
onTrend=(id:number)=>{

 this.setState({activeId:id})

}
onShow=()=>{
this.setState({isShow:!this.state.isShow})
}
onPoP=(id:number)=>{
  
  const filt = songs.filter((item:any) =>
    item.id === id

  )
  this.setState({filtData:filt})
}
onModal=(item:any)=>{
  this.props.navigation.navigate("Detail")
  
}
  render() {
 
   const {isShow}=this.state


    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="light-content"
        />
        <View style={styles.userFlex}>
          <View>
            <Text style={styles.loginText}>{good}</Text>
            <Image style={styles.line} source={homeLine} />
          </View>

          <Image style={styles.user} source={userIcon} />
        </View>
        <View>
          <FlatList
            horizontal={true}
            data={songs}
            renderItem={({item}: any) => (
              <View>
                <View style={styles.status}>
                  <Image
                    style={styles.statusImage}
                    source={{uri: `${item.artwork}`}}
                  />
                </View>

                <Text style={styles.storyText}>{item.title}</Text>
              </View>
            )}
          />
          <FlatList data={trendBtn} horizontal={true} renderItem={({item}:any)=>
        <View>
           <View style={[styles.trendsCard,{backgroundColor:item.id === this.state.activeId ? "#CDE7BE" : "#313333"}]}>
     
              <TouchableOpacity onPress={()=>this.onTrend(item.id)} style={styles.trendFlex}>
                <Image style={[styles.trendIcon,{tintColor:item.id === this.state.activeId ?"#313333" : "#EAF4F4"}]} source={trend} />
                <Text style={[styles.trendingText,{color:item.id === this.state.activeId ? "#313333" : "#EAF4F4"}]}>{item.name}</Text>
              </TouchableOpacity>
            </View>
          </View>
        
        } />
          {/* <ScrollView horizontal>
            <View style={styles.trendsCard}>
              <TouchableOpacity onPress={this.onTrend} style={styles.trendFlex}>
                <Image style={styles.trendIcon} source={trend} />
                <Text style={styles.trendingText}>Trending</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.trendsCard}>
              <View style={styles.trendFlex}>
                <Image style={styles.trendIcon} source={read} />
                <Text style={styles.trendingText}>5-Minutes Read</Text>
              </View>
            </View>
            <View style={styles.trendsCard}>
              <View style={styles.trendFlex}>
                <Image style={styles.trendIcon} source={quick} />
                <Text style={styles.trendingText}>Quick Listen</Text>
              </View>
            </View>
          </ScrollView> */}

          {/* <View style={styles.bookCard}>
    <Image style={{position:"absolute",bottom:0,right:verticalScale(9.5)}} source={hammer} />
    <View style={styles.textCard}>
    <Text style={styles.cardText}>{cardText}</Text>
    <View style={styles.cardFlex1}>
      <Text style={styles.dollar}>{dollars}</Text>
      <View style={styles.cardFlex}>
        <Image style={styles.cardImg} source={goodGuy} />
        <Image style={styles.cardImg1}  source={fut} />
        <Image style={styles.cardImg2}  source={creative} />
      </View>
    </View>
    <View style={styles.cardFlex2}>
      <Text style={styles.terms}>{terms}</Text>

      <View style={styles.cardFlex}>
        <Image style={{marginTop:11}} source={futOff} />
        <Image  source={creativeOff} />
        <Image  source={hammer} />
      </View>

    </View>
    </View>

</View> */}
        </View>
        <ScrollView>
          <Image style={styles.cardStyle} source={homeCard} />
          <View style={styles.trenddFlex}>
            <Text style={styles.trendhEAD}>{trendd}</Text>
            <TouchableOpacity onPress={this.onShow} style={styles.showFlex}>
              <Text style={styles.showAllText}>{show}</Text>
              <Image style={styles.arrow} source={showAll} />
            </TouchableOpacity>
          </View>
          <FlatList
            horizontal={!isShow}
         numColumns={isShow ? 3 : 0}
            data={songs}
            key={`${isShow}`}
            renderItem={({item}: any) => (
              <TouchableOpacity onPress={()=>this.onPoP(item.id)}>
                <View>
                  <Image
                    style={styles.trendImage}
                    source={{uri: `${item.artwork}`}}
                  />
                  <View style={{marginLeft: horizontalScale(8)}}>
                    <Text style={styles.trendCrdText}>{item.title}</Text>
                    <Text style={styles.trendCrdText}>{item.artist}</Text>
                    <View style={styles.headFlex1}>
                      <View style={styles.headFlex}>
                        <Image style={styles.trendCardIcons} source={head} />
                        <Text style={styles.fiveM}>5m</Text>
                      </View>
                      <View style={styles.headFlex}>
                        <Image style={styles.trendCardIcons} source={read1} />
                        <Text style={styles.fiveM}>8m</Text>
                      </View>
                    </View>
                  </View>
              
                </View>
              </TouchableOpacity>
            )}
          />

          <View style={styles.trenddFlex}>
            <Text style={styles.trendhEAD}>{trendd}</Text>
            <View style={styles.showFlex}>
              <Text style={styles.showAllText}>{show}</Text>
              <Image style={styles.arrow} source={showAll} />
            </View>
          </View>
          <FlatList
            horizontal={true}
            data={songs}
            renderItem={({item}: any) => (
              <View>
                <View>
                  <Image
                    style={styles.trendImage}
                    source={{uri: `${item.artwork}`}}
                  />
                  <View style={{marginLeft: horizontalScale(8)}}>
                    <Text style={styles.trendCrdText}>{item.title}</Text>
                    <Text style={styles.trendCrdText}>{item.artist}</Text>
                    <View style={styles.headFlex1}>
                      <View style={styles.headFlex}>
                        <Image style={styles.trendCardIcons} source={head} />
                        <Text style={styles.fiveM}>5m</Text>
                      </View>
                      <View style={styles.headFlex}>
                        <Image style={styles.trendCardIcons} source={read1} />
                        <Text style={styles.fiveM}>8m</Text>
                      </View>
                    </View>
                  </View>
                  <View></View>
                </View>
              </View>
            )}
          />

          <View style={styles.trenddFlex}>
            <Text style={styles.trendhEAD}>{fiveMinitus}</Text>
            <View style={styles.showFlex}>
              <Text style={styles.showAllText}>{show}</Text>
              <Image style={styles.arrow} source={showAll} />
            </View>
          </View>
          <FlatList
            horizontal={true}
            data={songs}
            renderItem={({item}: any) => (
              <View>
                <View>
                  <Image
                    style={styles.trendImage}
                    source={{uri: `${item.artwork}`}}
                  />
                  <View style={{marginLeft: horizontalScale(8)}}>
                    <Text style={styles.trendCrdText}>{item.title}</Text>
                    <Text style={styles.trendCrdText}>{item.artist}</Text>
                    <View style={styles.headFlex1}>
                      <View style={styles.headFlex}>
                        <Image style={styles.trendCardIcons} source={head} />
                        <Text style={styles.fiveM}>5m</Text>
                      </View>
                      <View style={styles.headFlex}>
                        <Image style={styles.trendCardIcons} source={read1} />
                        <Text style={styles.fiveM}>8m</Text>
                      </View>
                    </View>
                  </View>
                  <View></View>
                </View>
              </View>
            )}
          />



<View style={styles.trenddFlex}>
            <Text style={styles.trendhEAD}>{quikRevesion}</Text>
            <View style={styles.showFlex}>
              <Text style={styles.showAllText}>{show}</Text>
              <Image style={styles.arrow} source={showAll} />
            </View>
          </View>
          <FlatList
            horizontal={true}
            data={songs}
            renderItem={({item}: any) => (
              <View>
                <View>
                  <Image
                    style={styles.trendImage}
                    source={{uri: `${item.artwork}`}}
                  />
                  <View style={{marginLeft: horizontalScale(8)}}>
                    <Text style={styles.trendCrdText}>{item.title}</Text>
                    <Text style={styles.trendCrdText}>{item.artist}</Text>
                    <View style={styles.headFlex1}>
                      <View style={styles.headFlex}>
                        <Image style={styles.trendCardIcons} source={head} />
                        <Text style={styles.fiveM}>5m</Text>
                      </View>
                      <View style={styles.headFlex}>
                        <Image style={styles.trendCardIcons} source={read1} />
                        <Text style={styles.fiveM}>8m</Text>
                      </View>
                    </View>
                  </View>
                  <View></View>
                </View>
              </View>
            )}
          />
        </ScrollView>
    <View>

  
      <FlatList
      data={this.state.filtData}
      renderItem={({item}:any)=>
      <TouchableOpacity onPress={()=>this.onModal(item)} style={styles.musicCard}>
      <View style={styles.smallFlex}>
      <Image  style={styles.play1} source={{uri: `${item.artwork}`}}/>
      <View>
        <Text style={styles.textStyle}>{item.title}</Text>
        <Text style={styles.textStyle1}>{item.artist}</Text>
        </View> 
      </View>
      <View  style={styles.smallFlex}>
        <Image style={styles.play} source={play}/>
        <Image style={styles.play} source={next}/>
      </View>

     </TouchableOpacity>
    
    }
      />
       </View>  
      </SafeAreaView>
    );
  }
}

export default Home;

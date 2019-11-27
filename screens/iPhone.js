import React from 'react';
import { Text, View, Image, ImageBackground, StyleSheet} from 'react-native';
import ImageDetail from '../components/ImageDetail';
import { ScrollView } from 'react-native-gesture-handler';


const iPhone= ({navigation}) => {
      return (
      <View>
              <ImageBackground source={require('../assets/blue-gradient.png')} style={{width: '100%', height: '100%'}}>
           <ScrollView>
          <View style = {styles.container}>
                  <View style={styles.center}>
                  <Text style={styles.text}>iPhone 8</Text>
                  <ImageDetail
                      imageSource={require('../assets/iphone8-gold-select-2018.png')}
                      style={{width: '100%', height: '100%'}}
                  />
                  <Text>Layar Retina HD
                  Layar lebar LCD Multi-Touch 4,7 inci (diagonal) dengan teknologi IPS
                  Resolusi 1334 x 750 piksel pada 326 ppi
                  Rasio kontras 1400:1 (umum)</Text>
                  <Text> </Text>
                  <Text> Chip A11 Bionic
                  Neural Engine
                  Kamera
                  Kamera 12 MP Wide
                  Kamera ganda 12 MP Wide dan Telefoto</Text>
                  
                  <Text> </Text>
                  <Text> 
                  Wide: bukaan ƒ/1.8
                  Telefoto: bukaan ƒ/2.8 </Text>
                </View>

                <View style={styles.center}>
                <Text style={styles.text}>iPhone 11</Text>
                  <ImageDetail
                      imageSource={require('../assets/iphone-11-pro-max-gold-select-2019.png')}
                      style={{width: '100%', height: '100%'}}
                  />
                  <Text>Layar Retina HD
                  Layar lebar LCD Multi-Touch 4,7 inci (diagonal) dengan teknologi IPS
                  Resolusi 1334 x 750 piksel pada 326 ppi
                  Rasio kontras 1400:1 (umum)</Text>
                  <Text> </Text>
                  <Text>                   
                  Chip A13 Bionic
                  Neural Engine generasi ketiga
                  Tiga kamera 12 MP Ultra Wide, Wide, dan Telefoto
                  Ultra Wide: bukaan ƒ/2.4 dan bidang pandang 120°
                  </Text>
                  
                  <Text> </Text>
                  <Text> Wide: bukaan ƒ/1.8
                  Telefoto: bukaan ƒ/2.0</Text>
                </View>

                <View style={styles.center}>
                <Text style={styles.text}>iPhone XR</Text>
                  <ImageDetail
                      imageSource={require('../assets/iphone-xr-red-select-201809.png')}
                      style={{width: '100%', height: '100%'}}
                  />
                  <Text>Layar Retina HD
                  Layar lebar LCD Multi-Touch 4,7 inci (diagonal) dengan teknologi IPS
                  Resolusi 1334 x 750 piksel pada 326 ppi
                  Rasio kontras 1400:1 (umum)</Text>
                  <Text> </Text>
                  <Text>                   
                  Chip A12 Bionic
                  Neural Engine generasi kedua
                  Kamera 12 MP Wide
                  Bukaan ƒ/1.8
                  </Text>
                  
                  <Text> </Text>
                  <Text>
                  Bukaan ƒ/2.2</Text>
                </View>

                








          </View>
          </ScrollView>
          </ImageBackground>
      </View>
      )
  };

  const styles = StyleSheet.create({
      container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
      },
  center:{
      width: "55%",
      marginVertical:20
    
  },
   
  text:{
      color:'white',
      textAlign: 'center',
      fontSize : 25,
      

  }
  })

export default iPhone;
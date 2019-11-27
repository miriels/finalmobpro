import React from 'react';
import { Text, View, Image, ImageBackground, StyleSheet} from 'react-native';
import ImageDetail from '../components/ImageDetail';
import { ScrollView } from 'react-native-gesture-handler';


const Mac= ({navigation}) => {
      return (
      <View>
              <ImageBackground source={require('../assets/blue-gradient.png')} style={{width: '100%', height: '100%'}}>
           <ScrollView>
          <View style = {styles.container}>
                  <View style={styles.tengah}>
                  <Text style={styles.text}>Macbook Pro 16 in</Text>
                  <ImageDetail
                      imageSource={require('../assets/macbook-pro-16in-2019.jpg')}
                  />
                  <Text></Text>
                  <Text> </Text>
                  <Text>Warna: Silver dan space gray</Text>
                  <Text>Pengidentifikasi Model: MacBookPro16,1</Text>
                  <Text>Nomor Komponen: MVVJ2xx/A, MVVK2xx/A, MVVL2xx/A, MVVM2xx/A</Text>
                </View>

                <View style = {styles.container}>
                  <View style={styles.tengah}>
                  <Text style={styles.text}>MacBook Pro (13 inci, 2019, Dua Port Thunderbolt 3)</Text>
                  <ImageDetail
                      imageSource={require('../assets/macbook-pro-2018-13in-device.jpg')}
                  />
                  <Text></Text>
                  <Text> </Text>
                  <Text>Warna: Silver dan space gray</Text>
                  <Text>Pengidentifikasi Model: MacBookPro15,4</Text>
                  <Text>Nomor Komponen: MUHN2xx/A, MUHP2xx/a, MUHQ2xx/A, MUHR2xx/A, MUHR2xx/B</Text>
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
  tengah:{
      width: "55%",
      marginVertical:20
  }, 
  text:{
      color:'white',
      textAlign: 'center',
      fontSize : 25,
      

  }
  })

export default Mac;
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
                  <View style={styles.center}>
                  <Text style={styles.text}>MacBook Pro (16 inci, 2019)</Text>
                  <ImageDetail
                      imageSource={require('../assets/macbook-pro-16in-2019.jpg')}
                      style={{width: '100%', height: '100%'}}
                  />
                  <Text>Warna: Silver dan space gray</Text>
                  <Text>Pengidentifikasi Model: MacBookPro16,1</Text>                
                  <Text>Nomor Komponen: MVVJ2xx/A, MVVK2xx/A, MVVL2xx/A, MVVM2xx/A</Text>
                  <Text>Spesifikasi Teknis: MacBook Pro (16 inci, 2019)</Text>
                </View>

                <View style={styles.center}>
                <Text style={styles.text}>MacBook Pro (13 inci, 2019, Dua Port Thunderbolt 3)</Text>
                  <ImageDetail
                      imageSource={require('../assets/macbook-pro-2018-13in-device.jpg')}
                      style={{width: '100%', height: '100%'}}
                  />
                  <Text>Warna: Silver dan space gray</Text>
                  <Text>Pengidentifikasi Model: MacBookPro15,4</Text>
                  <Text>Nomor Komponen: MUHN2xx/A, MUHP2xx/a, MUHQ2xx/A, MUHR2xx/A, MUHR2xx/B</Text>
                  <Text>Spesifikasi Teknis: MacBook Pro (13 inci, 2019, Dua Port Thunderbolt 3)</Text>
                </View>

                <View style={styles.center}>
                <Text style={styles.text}>MacBook Pro (15 inci, 2019)</Text>
                  <ImageDetail
                      imageSource={require('../assets/macbook-pro-2018-15in-device.jpg')}
                      style={{width: '100%', height: '100%'}}
                  />
                  <Text>Warna: Silver dan space gray</Text>
                  <Text>Pengidentifikasi Model: MacBookPro15,1, MacBookPro15,3</Text>
                  <Text>Nomor Komponen: MV902xx/A, MV912xx/A, MV922xx/A, MV932xx/A, MV942xx/A, MV952xx/A</Text>
                  <Text>Spesifikasi Teknis: MacBook Pro (15 inci, 2019)</Text>
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

export default Mac;
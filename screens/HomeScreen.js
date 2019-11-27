import React from 'react';
import { Text, View, Button, ImageBackground, StyleSheet, } from 'react-native';

const HomeScreen = ({ navigation }) => {

     return (
 
        <View style={styles.container}>
             <ImageBackground source={require('../assets/blue-gradient.png')} style={{width: '100%', height: '100%'}}>

         <View style={styles.container} >
            
              <View style={styles.center}>
                  
                  <Button style={styles.Button}
                     text color = '#17202A'
                     title="iPhone"
                     onPress={()=> navigation.navigate('iPhone')}
                    />
                    

                    <Button style={styles.Button}
                     title="MAC"
                     onPress={()=> navigation.navigate('Mac')}
                    />
              </View>
            </View>
         </ImageBackground>  
     </View>
   
     )};
 
     const styles = StyleSheet.create({
         container: {
             flex: 1,
             justifyContent: 'center',
             alignItems: 'center',
             borderRadius:100,
             marginVertical: 10, 
             borderRadius:50
         },
     center:{
         width: "70%",
         marginVertical:5
     }, 

     
     })
 

export default HomeScreen;

import { View, Text, Image } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'

const Header = () => {
  return (
    <View style={styles.topRow}>
       <Image
         source={require('../../../assets/icons/logo.png')}
          style={styles.logo}
        />
        <Image
         source={require('../../../assets/icons/home/menu.png')}
          style={styles.logo}
        />
       
      
      </View>
  )
}

export default Header

const styles = StyleSheet.create({ 
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 50,
    padding: 5,
    backgroundColor: '#fff', 
  },
  logo: {
    width: 50,
    height: 50,
   
  },
})
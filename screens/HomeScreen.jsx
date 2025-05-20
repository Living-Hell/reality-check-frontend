import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, Image } from 'react-native'
import React from 'react'
import Header from '../components/ui/HomeScreen/Header'

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
  
      
<Header/>
   
      <Text style={styles.title}>Experiencing a hallucination?</Text>

     
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.actionButton}>
        <Image
         source={require('../assets/icons/home/mic.png')}
          style={styles.logo}
        />
          <Text style={styles.actionText}>Use the microphone{'\n'}to check if the voices are real</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
         <Image
         source={require('../assets/icons/home/camera.png')}
          style={styles.logo}
        />
          <Text style={styles.actionText}>Use the camera{'\n'}to check if the person is real</Text>
        </TouchableOpacity>
      </View>

    
      <ScrollView contentContainerStyle={styles.thoughtContainer}>
        {[1, 2, 3].map((item) => (
          <View key={item} style={styles.thoughtLog}>
            <Text style={styles.thoughtTitle}>Thought log</Text>
            <Text style={styles.thoughtDesc}>Record and analyze your thoughts</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  actionButton: {
    flex: 1,
    backgroundColor: '#D5EC6B',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  actionText: {
    marginTop: 10,
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
  thoughtContainer: {
    paddingBottom: 40,
  },
  thoughtLog: {
    borderColor: '#aaa',
    borderWidth: 1,
    borderRadius: 15,
    padding: 15,
    marginBottom: 10,
  },
  thoughtTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  thoughtDesc: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
});
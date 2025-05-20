import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const DailyEntry = ( props) => {
    const { entryId } = props.route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{entryId}</Text>
      
    </View>
  )
}

export default DailyEntry

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 40,
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    entryContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    entryDate: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    entryText: {
        fontSize: 14,
        color: '#666',
    },
    list: {
        paddingBottom: 80,
    },
})
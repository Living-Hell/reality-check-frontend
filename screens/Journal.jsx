
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Pressable, Image } from 'react-native';


const dummyEntries = [
  { id: '1', date: 'Tuesday 21st May', text: 'Record and analyze your thoughts' },
  { id: '2', date: 'Tuesday 21st May', text: 'Record and analyze your thoughts' },
  { id: '3', date: 'Tuesday 21st May', text: 'Record and analyze your thoughts' },
];

export default function JournalScreen({ navigation }) {
  const handleEntryPress = (entry) => {
    navigation.navigate('DailyEntry', { entryId: entry.id });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recent Entries</Text>

      <FlatList
        data={dummyEntries}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleEntryPress(item)} style={styles.entryContainer}>
            <View>
              <Text style={styles.entryDate}>{item.date}</Text>
            <Text style={styles.entryText}>{item.text}</Text>
            </View>
              <Image
                     source={require('../assets/icons/journal/next.png')}
                      style={styles.next}
                    />
            
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.list}
      />

      <Pressable style={styles.fab} onPress={() => console.log('Add new entry')}>
        <Text style={styles.fabText}>＋</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  next:{
    width: 40,
    height: 40,
    
   
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
  },
  list: {
    paddingBottom: 100,
  },
  entryContainer: {
    paddingVertical: 15,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  entryDate: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 4,
  },
  entryText: {
    fontSize: 14,
    color: '#444',
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 100,
    backgroundColor: '#8DBF3F',
    width: 60,
    height: 60,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  fabText: {
    fontSize: 34,
    color: 'white',
    fontWeight: '600',
  },
});

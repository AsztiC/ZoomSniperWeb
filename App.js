import {StyleSheet, SafeAreaView, View, ScrollView, Text} from 'react-native';
import  {Main}  from './main';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>  
      <ScrollView>
        <Main/>       
      </ScrollView>   
    </SafeAreaView>      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#15cb61',
  },
});

import {StyleSheet} from 'react-native';
import  {Gradient}  from './elements/gradient';

export default function App() {
  return (
      <Gradient/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

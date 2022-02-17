import { StatusBar, SafeAreaView } from 'react-native';

import Carrinho from './src/Carrinho';

export default function App() {
  return (
    <SafeAreaView>
      <Carrinho/>
      <StatusBar/>
    </SafeAreaView>
  );
}

import { NativeBaseProvider, StatusBar } from 'native-base';
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { THEME } from './src/styles/theme'
import Loading from './src/components/Loading';
import Signin from './src/screens/Signin';
import NewPool from './src/screens/New';
import { AuthContextProvider } from './src/contexts/AuthContext';
import FindPool from './src/screens/FindPool';
import Pools from './src/screens/Pools';

export default function App() {

  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_500Medium, Roboto_700Bold});

  return (
    <NativeBaseProvider theme={THEME}>
      <AuthContextProvider>
      <StatusBar
      barStyle='light-content'
      backgroundColor='transparent'
      translucent
      />
      { fontsLoaded ? <Pools/> : <Loading/> }
      </AuthContextProvider>
    </NativeBaseProvider>
  );
}


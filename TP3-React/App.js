import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React , { useState , useEffect} from 'react';

export default function App() {

  const [cocktail, setCocktail] = useState(null);

  const getCocktail = () => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        .then(response => response.json())
        .then(data => {
          setCocktail(data);
          // alert(JSON.stringify(data))
        })
  }

  useEffect(() => {

    for (let i = 0; i < 10; i++) {
      getCocktail();
    }
    
  }, []);

  let cocktails = [cocktail];

  return (
    
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!{JSON.stringify(cocktails)}</Text>
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

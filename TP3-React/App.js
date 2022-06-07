import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View , FlatList , Image} from 'react-native';
import React , { useState , useEffect} from 'react';
import {detail} from "./page/Detail";

export default function App() {

  

  const [cocktail, setCocktail] = useState([]);
  const [listCocktail, setListCocktail] = useState([]);

  const getCocktail = () => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        .then(response => response.json())
        .then(data => {
          setCocktail(data.drinks[0]);
          // console.log(data);
        })
  }

  useEffect(() => {

    for (let i = 0; i < 10; i++) {
      getCocktail();
      
    }
    
  }, []);

  useEffect(() => {

    setListCocktail([...listCocktail,cocktail]);
    
  }, [cocktail]);

  // renvoie sur la page détail après un click
  const getItem = (name) => {

    // this.setState({FromStr: this.state.From})
    // this.setState({ToStr: this.state.To})
    // detail();
    Alert.alert(name);

  }

  // le contenu de la flatlist
  const ItemRender = ({ name }) => (
    <View style={styles.item}>
      {/* <Text  onPress={()=> getItem(name)}>{name}</Text> */}
      <Text style={styles.item} onPress={()=> getItem(name.strDrink)}> {name.strDrink} {"\n"}{"\n"}
        <Image style={styles.icon}
          source={{uri: name.strDrinkThumb}}
        />
      </Text>
    </View>
  );

  // le style du séparateur
  const ItemDivider = () => {
    return (
      <View
        style={{
          height: 30,
          width: "100%",
          backgroundColor: "#ffff",
        }}
      />
    );
  }

  console.log(cocktail)

  return (
    
    <View style={styles.container}>
      <Text>{"\n"}{"\n"}</Text>
      <FlatList
          onPress={() =>  console.log(cocktail)}
          data={listCocktail}
          renderItem={({item}) => 
            <ItemRender name={item} />
          }
          keyExtractor={item => item.strDrink}
          ItemSeparatorComponent={ItemDivider}
        />
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
  icon: {
    width: 350,
    height: 350,
    // backgroundColor: '#036aa4',
  },
  item: {
    fontSize: '30px',
    fontWeight: 'bold',
    color: '#82f3ef',
  },
});

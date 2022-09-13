import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button, TouchableOpacity, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';
import {useState, useEffect} from 'react'
import { reloadAsync } from 'expo-updates';

export default function App() {

 const [theAppUrl, setTheAppUrl] = useState('');
 const [toggle, setToggle] = useState(false)
 const [howWide, setHowWide] = useState('');
const [howHigh, setHowHigh] = useState('');

//  let width = Dimensions.get('window').width;
//  let height = Dimensions.get('window').height;
//  console.log(width, height)

  const refresh = () => {
    setToggle(prevState=>!prevState);
    setTheAppUrl('http://www.google.com');
  }

useEffect(() => {
  setTheAppUrl('http://54.215.36.230:3006')
console.log(theAppUrl);
}, [theAppUrl, toggle])


  return (
    
    <SafeAreaView style={{ paddingTop: '1%', backgroundColor: 'black', flex: 1 }}>

      <>
      
      <TouchableOpacity onPress={() => refresh()} title={'🔃'} style={{height: "12%", marginBottom: '1%', width: '100%'}}>

 <Text style={{color:'red', textAlign: 'center', marginTop:40, fontSize:32}}>♾️</Text> 
</TouchableOpacity> 
      
      <WebView style={{marginTop: '-4%'}}
      source={{ uri: theAppUrl }} 
    />

    {/* <Button ></Button> */}


    

    
      </>
    
  </SafeAreaView>

  
  
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

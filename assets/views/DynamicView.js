import React from 'react';
import{
  View,
  Navigator,
  Text,
  StyleSheet,
  PixelRatio,
  ScrollView,
  StatusBar
} from 'react-native';
let PI=1/PixelRatio.get();
let statusBarHeight=StatusBar.currentHeight;
import NavBar from '../components/NavBar';
export default class DynamicView extends React.Component{
  constructor(props){
     super(props);
     this.state={
       
     };
  }
  render(){
    return (
      <View>
        <NavBar
          title="动态"
          height={40}
          backgroundColor="#0886BF"
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  
});
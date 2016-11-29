import React from 'react';
import{
  View,
  Navigator,
  Text,
  StyleSheet,
  PixelRatio,
  ScrollView,
  StatusBar,
  TouchableNativeFeedback
} from 'react-native';
let PI=1/PixelRatio.get();
import NavBar from '../components/NavBar';
import Router from 'react-native-simple-router';
export default class MailListView extends React.Component{
  constructor(props){
     super(props);
     this.state={
       
     };
  }
  render(){
    return (
      <View style={[styles.flex]}>
        <NavBar
          title="通讯录"
          height={40}
          backgroundColor="#0886BF"
        />
        
      </View>
    )
  }
}
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
export default class HomeView extends React.Component{
  constructor(props){
     super(props);
     this.state={
       
     };
  }
  render(){
    return (
      <View style={[styles.flex]}>
        <Text>首页</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  flex:{
    flex:1
  }
});
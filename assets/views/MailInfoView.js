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
import NavBar from '../components/NavBar';
export default class MailInfoView extends React.Component{
  constructor(props){
     super(props);
     this.state={
       
     };
  }
  render(){
    return (
      <View style={[styles.flex]}>
        <Text>这是详情页</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  flex:{
    flex:1
  },
  icon:{
    fontFamily:"iconfont"
  }
});
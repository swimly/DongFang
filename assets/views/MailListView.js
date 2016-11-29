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
import MailInfoView from './MailInfoView';
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
        <ScrollView>
          <TouchableNativeFeedback
              onPress={this._onPressButton}
              background={TouchableNativeFeedback.SelectableBackground()}>
            <View style={{width: 150, height: 100, backgroundColor: 'red'}}>
              <Text style={{margin: 30}}>Button</Text>
            </View>
          </TouchableNativeFeedback>
        </ScrollView>
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
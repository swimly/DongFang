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
import ScrollableTabView, { DefaultTabBar, } from 'react-native-scrollable-tab-view';
import NavItem from '../components/NavItem.js';
import HomeView from './HomeView.js';
import MailListView from './MailListView.js';
import DynamicView from './DynamicView.js';
import PersonalView from './PersonalView.js';
let color=null;
export default class MainView extends React.Component{
  constructor(props){
     super(props);
     this.state={
       tabs:['首页','通讯录','动态','个人中心']
     };
  }
  render(){
    let tabs=this.state.tabs;
    let icons=this.state.icons;
    return (
      <ScrollableTabView
        tabBarPosition="bottom"
        renderTabBar={()=><NavItem text={tabs}/>}
      >
        <HomeView></HomeView>
        <MailListView></MailListView>
        <DynamicView></DynamicView>
        <PersonalView></PersonalView>
      </ScrollableTabView>
    )
  }
}
const styles = StyleSheet.create({
  flex:{
    flex:1
  },
  icon:{
    fontFamily:"iconfont",
    fontSize:24
  }
});
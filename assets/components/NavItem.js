import React from 'react';
import{
  View,
  Text,
  StyleSheet,
  PixelRatio,
  TouchableNativeFeedback
} from 'react-native';
import icon from 'react-native-iconic-font/fontawesome';
let PI=1/PixelRatio.get();
var index=0;
export default class NavItem extends React.Component{
  constructor(props){
     super(props);
     this.state={
       text:this.props.text,
       index:0
     };
  }
  setAnimationValue({value}) {
    index=value
    index=String(index).split(".")[1]=="undefined"?"":String(index).split(".")[1];
    //console.log(index);
	}
  componentDidMount(){
    console.log(this.state.data)
    this.props.scrollValue.addListener(this.setAnimationValue);
  }
  _initTab(tab,i){
    let color = this.props.activeTab == i ? "#007ACC" : "#ADADAD";
    let icons=[<Text style={[styles.icon,{color:color}]}>&#xe67b;</Text>,<Text style={[styles.icon,{color:color}]}>&#xe604;</Text>,<Text style={[styles.icon,{color:color}]}>&#xe60c;</Text>,<Text style={[styles.icon,{color:color}]}>&#xe63e;</Text>]
    return (
      <TouchableNativeFeedback
        onPress={()=>{this.props.goToPage(i)}}
        key={i}
        style={[styles.flex,styles.navItem]}
        background={TouchableNativeFeedback.SelectableBackground()}
      >
        <View style={[styles.flex,styles.navItem]}>
          {icons[i]}
          <Text style={[{color:color,fontSize:30*PI}]}>{this.state.text[i]}</Text>
        </View>
      </TouchableNativeFeedback>
    )
  }
  render(){
    return (
      <View style={[styles.navBar]}>
        {this.props.tabs.map((tab, i) => this._initTab(tab, i))}
      </View>
    )
  }
}
const styles = StyleSheet.create({
  flex:{
    flex:1
  },
  icon:{
    fontFamily:"iconfont",
    fontSize:72*PI
  },
  navBar:{
    height:150*PI,
    backgroundColor:"#f9f9f9",
    flexDirection:"row",
    borderColor:"#ddd",
    borderTopWidth:1*PI
  },
  navItem:{
    justifyContent:"center",
    alignItems:"center"
  }
});
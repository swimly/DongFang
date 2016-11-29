import React,{
	Component,
	PropTypes
} from 'react';
import {
  Text,
  View,
  PixelRatio,
  StatusBar,
  TouchableNativeFeedback,
  StyleSheet
} from 'react-native';
var PI=1/PixelRatio.get();
var barHeight=StatusBar.currentHeight;
export default class NarBar extends React.Component{
  static propTypes = {
		title: PropTypes.string.isRequired,
		//not include the height of statusBar on ios platform
		height: PropTypes.number,
		titleColor: PropTypes.string,
		backgroundColor: PropTypes.string,
		leftIcon: PropTypes.string,
		leftText: PropTypes.string,
		leftFun: PropTypes.func,
		rightIcon: PropTypes.string,
		rightText: PropTypes.string,
		rightFun: PropTypes.func
	};
  static defaultProps = {
		height: 44,
		titleColor: '#fff',
		backgroundColor: '#f5f3f4',
    leftText:"",
    rightText:""
	};
  componentWillMount(){
		this.state = this._getStateFromProps(this.props);
	}

	componentWillReceiveProps(newProps){
		let newState = this._getStateFromProps(newProps);
		this.setState(newState);
	}

	shouldComponentUpdate(nextProps, nextState, context) {
		return JSON.stringify([nextState, context]) !== JSON.stringify([this.state, context]);
	}

	_getStateFromProps(props){
		return {
			...props
		};
	}
  _renderLeftIcon() {
		if(this.state.leftIcon){
			return (
				<TouchableNativeFeedback>
          <View style={[{flexDirection:"row",alignItems:"center",paddingLeft:30*PI},styles.flex]}>
            <View>
              <Text style={[styles.icon,{color:this.state.titleColor}]}>{this.state.leftIcon}</Text>
            </View>
            <View>
              <Text style={[{color:this.state.titleColor}]}>{this.state.leftText}</Text>
            </View>
          </View>
        </TouchableNativeFeedback>
			);
		}
		return null;
	}
  _renderRightIcon() {
		if(this.state.leftIcon){
			return (
				<TouchableNativeFeedback>
          <View style={[{flexDirection:"row",alignItems:"center",justifyContent:"flex-end",paddingRight:30*PI},styles.flex]}>
            <View>
              <Text style={[styles.text,{color:this.state.titleColor}]}>{this.state.rightText}</Text>
            </View>
            <View>
              <Text style={[styles.icon,{color:this.state.titleColor}]}>{this.state.rightIcon}</Text>
            </View>
          </View>
        </TouchableNativeFeedback>
			);
		}
		return null;
	}
  render(){
    return(
      <View style={[styles.steep,styles.bar,{height:this.state.height+barHeight,backgroundColor:this.state.backgroundColor}]}>
        <View style={[{flexDirection:"row",width:this.state.leftWidth}]}>
          {this._renderLeftIcon()}
        </View>
        <View style={[styles.center,{flex:3}]}><Text style={[styles.text,{color:this.state.titleColor}]}>{this.state.title}</Text></View>
        <View style={[{flexDirection:"row",width:this.state.rightWidth}]}>
          {this._renderRightIcon()}
        </View>
      </View>
    )
  }
}
const styles=StyleSheet.create({
  flex:{
    flex:1
  },
  center:{
    justifyContent:"center",
    alignItems:"center"
  },
  steep:{
    paddingTop:barHeight
  },
  bar:{
    flexDirection:"row"
  },
  icon:{
    fontFamily:"iconfont",
    fontSize:64*PI,
  }
})
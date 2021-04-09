import React,{Component} from 'react';
import{Button,View,Text,TouchableOpacity,StyleSheet} from 'react-native';
import{Audio} from 'expo-av';
import db from '../config';

class SoundButton extends Component {
  playSound=async()=>{
    await Audio.Sound.createAsync(
      {uri:'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3'},
      {shouldPlay:true}
    )
  }
  isButtonPressed(buttonColor){
    var time=new Date().getTime()
    var query=db.ref('teams/'+buttonColor+'/').update({
      isButtonPressed:true,
      timeStamp:time
    })
  }
  render(){
    return(
   <TouchableOpacity style={[styles.button,{backgroundColor:this.props.color}]
    }
onPress={()=>{
  var buttonColor=this.props.color;
  this.isButtonPressed(buttonColor);
  this.playSound()
}}>

<Text style={styles.buttonText}> hi </Text>
</TouchableOpacity>
    );
  }
}
const styles=StyleSheet.create({
  button:{
     marginLeft:70,
     borderWidth:1,
     borderColor:'red',
     justifyContent:"center",
     alignItems:"center",
     width:150,height:150,
     backgroundColor:'blue',
     borderRadius:100

  },
  buttonText:{
    fontSize:20,
    fontWeight:'bold',
  }
})
export default SoundButton

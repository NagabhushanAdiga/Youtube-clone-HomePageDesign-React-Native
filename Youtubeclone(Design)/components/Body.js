import React, { Component } from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';


export default class Body extends Component{
  render(){
    let video=this.props.video;
  return (
    <View style={styles.container}>
        <Image
        source={{uri:video.snippet.thumbnails.medium.url}} 
        style={{height:200,borderRadius:5}}
        />
        <View style={styles.textcontainer}>
            <Image
             source={{uri:video.snippet.thumbnails.default.url}}
             style={styles.profilepic} 
            />
            <View style={styles.innercontainer}>
            <Text style={styles.videotitle}>{video.snippet.title}</Text>
            <Text style={styles.videostats}>{video.snippet.channelTitle} - 100K Views</Text>

            </View>
        </View>
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
    backgroundColor: '#fff',
    padding:15,
    backgroundColor:"#000",
  },
  textcontainer:{
      marginLeft:10,
      paddingRight:5,
      flexDirection:"row",
      paddingTop:15,

  },
  videotitle:{
      fontSize:14,
      fontWeight:"bold",
      color:"#fff",
      marginRight:4,

  },
  profilepic:{
      width:50,
      height:50,
      borderRadius:25,
      borderColor:"#fff",
      borderWidth:2,
  },
  innercontainer:{
      marginLeft:10,
      padding:5,
  },
  videostats:{
      fontSize:12,
      color:"#fff",
      marginTop:10,
  },
});

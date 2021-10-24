import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {Header} from 'react-native-elements';
import * as Font from "expo-font";
//import db from '../config'
//import firebase from 'firebase'
 
export default class WriteStoryScreen extends React.Component {
    constructor(props){
        super(props); 
        this.state = {
            title: '',
            author: '',
            storyText: '',
            fontLoaded: false
        }
    }

    async loadFonts() {
        await Font.loadAsync({
          Dalgona: require("../assets/Dalgona.ttf"),
          hc : require("../assets/hc.ttf"),
          bm : require("../assets/bm.ttf")
        });
        this.setState({ fontLoaded: true });
      }

      componentDidMount() {
        this.loadFonts();
      }

    render(){
        return(
            <View style={styles.container}>
                <Header 
                    backgroundColor = {'#d23ce0'}
                    centerComponent = {{
                        text : 'Story Hub',
                        style : { color: 'black', fontSize: 30, fontFamily: 'hc'}
                    }}
                />
                <TextInput 
                    placeholder="Story Title"
                    onChangeText= {(text)=>{
                        this.setState({
                            title: text
                        })
                    }}
                    value={this.state.title}
                    style={styles.title}
                    placeholderTextColor='black'
                    placeholderFontFamily = 'bm'/>
                <TextInput
                    placeholder="Author"
                    onChangeText= {(text)=>{
                        this.setState({
                            author: text
                        })
                    }}
                    placeholderTextColor='black'
                    value={this.state.author}
                    style={styles.author} />
                <TextInput 
                    placeholder="Write your story"
                    onChangeText= {(text)=>{
                        this.setState({
                            storyText: text
                        })
                    }}
                    placeholderTextColor='black'
                    value={this.state.storyText}
                    style={styles.storyText}
                  //  multiline={false}
                  //  multiline=true
                  //  multiline="true"
                   multiline={true}
                  />
                
                <TouchableOpacity
                    style={styles.submitButton}
                   // onPress={this.submitStory}
                   >
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebdeed',
  },
  title:{
      height: 40,
      borderWidth: 2,
      marginTop: 40,
      margin: 10,
      color:'black',
      padding: 6,
      borderRadius: 30,
      fontFamily: 'bm',
      backgroundColor: "#f7cfcf",
      textAlign: 'center'

  },
  author: {
      height: 40,
      borderWidth: 2,
      margin: 10,
       padding: 6,
       borderRadius: 30,
       fontFamily: 'bm',
       backgroundColor: "#f7cfcf",
       textAlign: 'center'
  },
  storyText: {
      height: 250,
      borderWidth: 2,
      margin: 10, 
      padding: 6,
      fontFamily: 'Dalgona',
      borderRadius: 30,
       textAlign: 'top',
       backgroundColor: "#eac691",
       textAlign: 'center'    
  },

  submitButton:{
      justifyContent: 'center',
      alignSelf: 'center',
      backgroundColor: 'pink',
      width: 80,
      height: 40,color:'black',
      borderRadius: 30,
      borderColor: 'black',
      borderWidth: 2
  },
  buttonText: {
      textAlign: 'center',
      color: 'white',
      fontWeight: 'bold',
      color:'black',
      fontFamily: 'hc'
  }
});
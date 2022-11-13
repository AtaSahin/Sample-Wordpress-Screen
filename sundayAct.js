import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet,
   Text,
    View,
    Image, 
Button,
Alert,
TextInput,
Linking,

} from 'react-native';


export default function App() {
  const [name,setName]=useState('ata');
  const [age,setAge]=useState('22');
  
  return (
  
     
    <View

    
    style={{
      backgroundColor:"black",
      flex:0.62,
      bottom: 35,
    
    }}>


      <View
      style={{
fontSize:30,
backgroundColor:"white",
borderWidth: 1,
top: 530,
left:80,
margin: 12,
padding: 10,
width:200,

height: 40,
alignContent:'flex-end',
justifyContent:'center',
position:'absolute',

      }}
      >
<Text
style={{
bottom:20,
left:0,
fontStyle:'italic',
fontWeight:"900"
}}
>Enter your Account info: 

</Text>
<TextInput 
placeholder=" Enter Your Username"  >


  
</TextInput>


      </View>

<View
style={{
backgroundColor:"white",
top:250,

top: 590,
left:80,
margin: 12,
padding: 10,
width:200,

height: 40,
alignContent:'flex-end',
justifyContent:'center',
position:'absolute',


}}
>
  <Text
  style={{
    bottom:5,
    left:50,
  }}
  
  >


  </Text>
<TextInput
style={{height: 45,width: "110%",borderColor: "black",borderWidth: 1,

left:-10
}}
// Adding hint in TextInput using Placeholder option.
placeholder=" Enter Your Password"          
// Making the Under line Transparent.
underlineColorAndroid="transparent"
// Making the Text Input Text Hidden.
secureTextEntry={true}
>

</TextInput>

</View>

<View
style={{

  flex:0.1,
  backgroundColor:"black",
  top: 670,
  width:100,
  left:150
}}>
  <Button
  title='LOGIN'
  color={"white"}
  style={{


  }}
  onPress={()=>{Alert.alert("Information","You will be dirrected to the login screen.",[{text:"Accept"},{text:"Sorry man"}])}}

  >


  </Button>
 
</View>


      <Image 
   
style={styles.logo}

      source={require("./assets/lastLogo.png")}
      >

      
      </Image>



      <View
style={{

  flex:0.1,
  backgroundColor:"black",
  top: 350,

  
}}>
  <Button
  title='WordPress...Lets make some mess!'
  
  onPress={()=>{Alert.alert("https://wordpress.com/")}}


  color={"white"}
  style={{
fontWeight:"bold",
  }}

  >


  </Button>
 
</View>














    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{


    position:'absolute',
    justifyContent:'center',
    alignItems:'center',
    bottom:115,
    left:95,

  },
  bannerText:{
fontSize:50,
top:500,
tintColor:"blue",
borderColor:"blue",
fontStyle:'bold',
left:80,
backgroundColor:"white",
position: 'absolute',
justifyContent: 'center',
alignItems: 'center',

},
loginButton:{



}




  
});

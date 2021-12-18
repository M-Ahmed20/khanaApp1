import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView
} from "react-native";
import { color } from "react-native-reanimated";
import { auth,createUserWithEmailAndPassword,sendEmailVerification ,db,setDoc,doc,collection,signInWithCredential,firebaseConfig } from "../config/firebase";
import logo1 from "../image/logo1.png" 


export default function SignUp({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [userrole, setUserole] = useState("needy");

  const handleSignUp = async () => {
  await  createUserWithEmailAndPassword(auth, email, password)
      .then( async (userCredential) => {
        // Signed in 
        const user = userCredential.user;

 alert(user.email)
    //    await setDoc(doc(db, "User", user.uid), {
    //     UserName:username,
    //     email:user.email,
    //     UID:user.uid,
    //   });

    let users = {
        UserName:username,
        email:user.email,
        UID:user.uid,
        Role:userrole
    };
    // const collectionRef  = doc(db, 'Users', user.uid);
    // const collectionRef = doc(collection(db, "Users"));
    await setDoc(doc(collection(db, "Users")),users)
alert("SignUp successful")
navigation.navigate("login")

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
        // ..
      });

      
  }

  return (
    <ScrollView>
     <View style={styles.container}>

 
      <StatusBar style="auto" />
      <Image style={styles.image} source={logo1} />

      <View style={styles.inputView}>

        <TextInput
          style={styles.TextInput}
          placeholder="Username"
          placeholderTextColor="white"
          onChangeText={ text => setUsername(text) }  />
      </View>
      <br />
      <View style={styles.inputView}>

        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="white"
          onChangeText={text => setEmail(text)}  />
      </View>
      <br />

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="white"
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
        />
      </View>
 

      <TouchableOpacity onPress={handleSignUp} style={styles.loginBtn}>
        <Text style={styles.loginText}>Sign Up</Text>
      </TouchableOpacity>

    </View>
    </ScrollView>
  )
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",

  },
 

  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  inputView: {
    backgroundColor: "green",
    borderRadius: 30,
    width: "40%",
    alignItems: "center",
    borderWidth: 3,
    color:"white",
    
},

  TextInput: {
    width: "100%",
    color:"white",
    borderRadius: 30,
    padding: 10,
  },
 
  image: {
    marginBottom: 30,
    width: 300,
    height: 250,
    padding: 50
  },
 
  loginBtn: {
    width: "40%",
    borderRadius: 25,
    height: 50,
    borderWidth: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    backgroundColor:"green",
    

    // backgroundColor: "#00000",
  },
  loginText:{
      color:"white",
  }
});
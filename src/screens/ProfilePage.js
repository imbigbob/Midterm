import * as React from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";
import { COLORS, icons, SIZES, FONT, SHADOWS } from '../../constants';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';  // Import auth from Firebase
import { useState, useEffect } from 'react';

const ProfilePage = () => {
  const [user, setUser] = useState({ name: '', LastName: ''});
  const [newName, setNewName] = useState('');
  const [newLastName, setNewLastName] = useState('');
 
  useEffect(() => {
    const getUser = async () => {
      const userDocument = await firestore()
        .collection('users')
        .doc('ELXF1Rfjl0qFvjmwvyrR')
        .get();
      
      if (userDocument.exists) {
        setUser({
          name: userDocument.data()?.name || '',
          LastName: userDocument.data()?.LastName || '',
        });
        setNewName(userDocument.data()?.name || '');
        setNewLastName(userDocument.data()?.LastName || '');
      } else {
        console.log('No such document!');
      }
    };

    const subscriber = firestore()
      .collection('users')
      .doc('ELXF1Rfjl0qFvjmwvyrR')
      .onSnapshot(doc => {        
        setUser({
          name: doc.data().name,
          LastName : doc.data().LastName,
        });
        setNewName(doc.data().name);
        setNewLastName(doc.data().LastName);
      });

    getUser();

    return () => subscriber(); // Cleanup the subscription on unmount
  }, []);

  const navigation = useNavigation();

  // Logoff function to handle user sign-out
  const logoff = () => {
    auth()
      .signOut()
      .then(() => {
        console.log('User signed out!');
        navigation.navigate('Login'); // Navigate to login screen or any other screen
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{
        minWidth: '100%', height: 34, justifyContent: 'center', alignItems: 'center'
        , marginTop: 30, marginBottom: 10
      }}>
        <Text style={{ fontStyle: 'Poppins', fontWeight: 'SemiBold', fontSize: 26, color: 'black' }}>
          Account
        </Text>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 20 }}>
        <Image source={icons.cat} style={{
          width: 100, height: 100,
          borderRadius: 20
        }} />
      </View>
      <View style={{ marginBottom: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontStyle: 'Poppins', fontWeight: 'SemiBold', fontSize: 20, color: 'black' }}>
         {user.name} {user.LastName}
        </Text>
      </View>
      <View style={{ marginBottom: 10, flexDirection: 'row', marginLeft: 20 }}>
        <TouchableOpacity onPress={() => navigation.navigate('PersonalInformation')}>
          <Image source={icons.PersonAccount} style={{ width: 24, height: 24 }} />
        </TouchableOpacity>
        <Text style={{ fontStyle: 'Poppins', fontWeight: 'SemiBold', fontSize: 20, color: 'black' }}>Personal Information</Text>
      </View>
      <View style={{ marginBottom: 10, flexDirection: 'row', marginLeft: 20 }}>
        <Image source={icons.Purse} style={{ width: 24, height: 24 }} />
        <Text style={{ fontStyle: 'Poppins', fontWeight: 'SemiBold', fontSize: 20, color: 'black' }}>Payment Methods</Text>
      </View>
      <View style={{ marginBottom: 10, flexDirection: 'row', marginLeft: 20 }}>
        <Image source={icons.Heart} style={{ width: 24, height: 24 }} />
        <Text style={{ fontStyle: 'Poppins', fontWeight: 'SemiBold', fontSize: 20, color: 'black' }}>Favorites</Text>
      </View>
      <View style={{ marginBottom: 10, flexDirection: 'row', marginLeft: 20 }}>
        <Image source={icons.Clock} style={{ width: 24, height: 24 }} />
        <Text style={{ fontStyle: 'Poppins', fontWeight: 'SemiBold', fontSize: 20, color: 'black' }}>Favorites</Text>
      </View>
      <View style={{ marginBottom: 10, flexDirection: 'row', marginLeft: 20 }}>
        <Image source={icons.Set} style={{ width: 24, height: 24 }} />
        <Text style={{ fontStyle: 'Poppins', fontWeight: 'SemiBold', fontSize: 20, color: 'black' }}>Settings</Text>
      </View>
      <View style={{ marginBottom: 10,justifyContent:'center',alignItems:'center'}}>
        <TouchableOpacity style={{width:300,height:60,backgroundColor:COLORS.peach,justifyContent:'center',alignItems:'center',borderRadius:20}} onPress={logoff}>
          <Text style={{ fontStyle: 'Poppins', fontWeight: 'SemiBold', fontSize: 20, color: 'white' }}>Logoff</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfilePage;

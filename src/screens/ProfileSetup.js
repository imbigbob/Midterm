import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const ProfileSetup = ({ navigation }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');

  const saveProfile = async () => {
    const { uid } = auth().currentUser;

    await firestore().collection('users').doc(uid).set({
      name,
      age,
      address,
    });

    navigation.navigate('Profile');
  };

  return (
    <View>
      <Text>Set Up Your Profile</Text>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={{ borderWidth: 1, marginBottom: 8 }}
      />
      <TextInput
        placeholder="Age"
        value={age}
        onChangeText={setAge}
        style={{ borderWidth: 1, marginBottom: 8 }}
      />
      <TextInput
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
        style={{ borderWidth: 1, marginBottom: 8 }}
      />
      <Button title="Save" onPress={saveProfile} />
    </View>
  );
};

export default ProfileSetup;

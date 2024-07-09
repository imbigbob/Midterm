import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const Profile = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      const { uid } = auth().currentUser;
      const userDoc = await firestore().collection('users').doc(uid).get();
      setUserInfo(userDoc.data());
    };

    fetchUserInfo();
  }, []);

  if (!userInfo) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <Text>Profile</Text>
      <Text>Name: {userInfo.name}</Text>
      <Text>Age: {userInfo.age}</Text>
      <Text>Address: {userInfo.address}</Text>
    </View>
  );
};

export default Profile;

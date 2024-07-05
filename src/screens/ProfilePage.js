import * as React from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";
import { COLORS, icons, SIZES, FONT, SHADOWS } from '../../constants';
import UserData from '../../assets/UserData';
import { useNavigation } from '@react-navigation/native';

const ProfilePage = () => {
  const [FirstName, setFirstName] = React.useState(UserData.FirstName);
  const [LastName, setLastName] = React.useState(UserData.LastName);

  React.useEffect(() => {
    setFirstName(UserData.FirstName);
    setLastName(UserData.LastName);
  }, []);

  const navigation = useNavigation();

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
          {FirstName} {LastName}
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
    </View>
  );
};

export default ProfilePage;

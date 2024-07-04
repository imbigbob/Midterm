import * as React from "react";
import { Image, View, Text, TouchableOpacity, TextInput } from "react-native";
import { COLORS, icons, SIZES, FONT, SHADOWS } from '../../../constants';
import UserData from '../../../assets/UserData';

const PersonalInformation = () => {

    const [FirstName, setFirstName] = React.useState(UserData.FirstName);
    const [LastName, setLastName] = React.useState(UserData.LastName);
    const [email, setEmail] = React.useState(UserData.email);
    const [Phone, setPhone] = React.useState(UserData.Phone);

    return (
        <View style={{ padding: 20 }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                <Image source={icons.cat} style={{
                    width: 100, height: 100,
                    borderRadius: 20
                }} />
            </View>

            <View style={{ marginBottom: 30, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontFamily: 'Poppins', fontWeight: '600', fontSize: 20, color: 'black' }}>
                    {FirstName} {LastName}
                </Text>
            </View>
            
            <View style={{ marginBottom: 20 }}>
                <TextInput
                    style={styles.input}
                    placeholder="First Name"
                    value={FirstName}
                    onChangeText={setFirstName}
                />
            </View>

            <View style={{ marginBottom: 20 }}>
                <TextInput
                    style={styles.input}
                    placeholder="Last Name"
                    value={LastName}
                    onChangeText={setLastName}
                />
            </View>

            <View style={{ marginBottom: 20 }}>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />
            </View>

            <View style={{ marginBottom: 20 }}>
                <TextInput
                    style={styles.input}
                    placeholder="Phone"
                    value={Phone}
                    onChangeText={setPhone}
                    keyboardType="phone-pad"
                />
            </View>
        </View>
    );
};

const styles = {
    input: {
        height: 40,
     
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
        marginBottom: 10,
    },
};

export default PersonalInformation;

import React, { Component } from 'react';
import { View, Text, TextInput, Image, StyleSheet,TouchableOpacity } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {icons} from '../../../constants';
class PersonalInformation extends Component {
  state = {
    user: {
      name: '',
      email: '',
      phone: '',
      LastName:'',
    },
    newName: '',
    newEmail: '',
    newPhone: '',
    newLastName:'',
    isEditing: false,
  };

  constructor(props) {
    super(props);
    this.getUser();
    this.subscriber = firestore()
      .collection('users')
      .doc('ELXF1Rfjl0qFvjmwvyrR')
      .onSnapshot(doc => {        
          this.setState({
            user: {
              name: doc.data().name,
              email: doc.data().email,
              phone: doc.data().phone,
                LastName:doc.data().LastName,
            },
            newName: doc.data().name,
            newEmail: doc.data().email,
            newPhone: doc.data().phone,
                newLastName:doc.data().LastName,
          });
      });
  }

  getUser = async () => {
    const userDocument = await firestore()
      .collection('users')
      .doc('ELXF1Rfjl0qFvjmwvyrR')
      .get();
    
    if (userDocument.exists) {
      console.log(userDocument.data());
      this.setState({
        user: {
          name: userDocument.data()?.name || '',
          email: userDocument.data()?.email || '',
          phone: userDocument.data()?.phone || '',
            LastName:userDocument.data()?.LastName || '',
        },
        newName: userDocument.data()?.name || '',
        newEmail: userDocument.data()?.email || '',
        newPhone: userDocument.data()?.phone || '',
            newLastName:userDocument.data()?.LastName || '',
      });
    } else {
      console.log('No such document!');
    }
  };

  toggleEditMode = () => {
    this.setState((prevState) => ({ isEditing: !prevState.isEditing }));
  };

  updateUserInfo = async () => {
    const { newName, newEmail, newPhone } = this.state;
    if (newName.trim() && newEmail.trim() && newPhone.trim()) {
      await firestore()
        .collection('users')
        .doc('ELXF1Rfjl0qFvjmwvyrR')
        .update({ 
          name: newName,
          email: newEmail,
          phone: newPhone,
          LastName:newLastName,
        });
      this.setState({ isEditing: false }); // Exit edit mode after saving
    }
  };

  render() {
    const { user, newName, newEmail, newPhone,newLastName, isEditing } = this.state;

    return (
      <View style={styles.container}>
                        <Image source={icons.cat} style={{
                    width: 100, height: 100,
                    borderRadius: 20,marginTop:20
                }} />
        {!isEditing ? (
          <View style={{padding:10}}>
            <View style={styles.box} >
                <Text style={styles.title}>First Name</Text>
            <Text styke={styles.text}> {user.name}</Text>
            </View>
            <View style={styles.box} >
                <Text style={styles.title}>Last Name</Text>
            <Text> {user.LastName}</Text>
            </View>
            <View style={styles.box} >
            <Text style={styles.title}>Email</Text>
            <Text> {user.email}</Text>
            </View>
            <View style={styles.box} >
            <Text style={styles.title}>Phone</Text>
            <Text>{user.phone}</Text>
            </View>
            <TouchableOpacity style={styles.button}  onPress={this.toggleEditMode} >
                <Text style={styles.textButton}>Edit</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View >
            <Text style={styles.textEdit}>First Name</Text>
            <TextInput
              placeholder="Enter new name"
              value={newName}
              onChangeText={(text) => this.setState({ newName: text })}
              style={styles.input}
            />
            <Text style={styles.textEdit}>Last Name</Text>
            <TextInput
                placeholder="Enter new Last Name"
                value={newLastName}
                onChangeText={(text) => this.setState({ newLastName: text })}
                style={styles.input}
            />
            <Text style={styles.textEdit}>Email</Text>
            <TextInput
              placeholder="Enter new email"
              value={newEmail}
              onChangeText={(text) => this.setState({ newEmail: text })}
              style={styles.input}
            />
            <Text style={styles.textEdit}>Phone</Text>
            <TextInput
              placeholder="Enter new phone"
              value={newPhone}
              onChangeText={(text) => this.setState({ newPhone: text })}
              style={styles.input}
            />
            <TouchableOpacity onPress={this.updateUserInfo} style={styles.button} >
                <Text style={styles.textButton}>Save</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems:'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
    marginVertical: 5,
    backgroundColor:'white',
    borderRadius:10,
    marginLeft:10,
  },
  button:{
    width:343,
    height:60,
    backgroundColor:'#FEA36B',
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
  },
  textButton : {
    color:'white',
    fontSize:20,
    fontWeight:'700',
    alignItems:'center',
  },
  title:{
    fontSize:10,
    fontWeight:'400',
    color:'#727272',
    marginLeft:10,
  },
  box : {
    width:343,
    height:60,
    backgroundColor:'white',
    justifyContent:'center',
    marginBottom:10,
    borderRadius:10,
  },
  textEdit:{
    color:'#727272',
    fontSize:10,
    fontWeight:'400',
    alignItems:'center',
    marginBottom:5,
    marginLeft:10,
  },
  text:{
marginLeft:10,
  }

});

export default PersonalInformation;

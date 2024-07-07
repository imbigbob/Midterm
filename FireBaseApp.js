import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import firestore from '@react-native-firebase/firestore';

class FireBaseApp extends Component {
  state = {
    user: {
      name: '',
      email: '',
      phone: '',
    },
    newName: '',
    newEmail: '',
    newPhone: '',
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
            },
            newName: doc.data().name,
            newEmail: doc.data().email,
            newPhone: doc.data().phone,
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
        },
        newName: userDocument.data()?.name || '',
        newEmail: userDocument.data()?.email || '',
        newPhone: userDocument.data()?.phone || '',
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
        });
      this.setState({ isEditing: false }); // Exit edit mode after saving
    }
  };

  render() {
    const { user, newName, newEmail, newPhone, isEditing } = this.state;

    return (
      <View style={styles.container}>
        {!isEditing ? (
          <View>
            <Text>Name: {user.name}</Text>
            <Text>Email: {user.email}</Text>
            <Text>Phone: {user.phone}</Text>
            <Button title="Edit" onPress={this.toggleEditMode} />
          </View>
        ) : (
          <View>
            <TextInput
              placeholder="Enter new name"
              value={newName}
              onChangeText={(text) => this.setState({ newName: text })}
              style={styles.input}
            />
            <TextInput
              placeholder="Enter new email"
              value={newEmail}
              onChangeText={(text) => this.setState({ newEmail: text })}
              style={styles.input}
            />
            <TextInput
              placeholder="Enter new phone"
              value={newPhone}
              onChangeText={(text) => this.setState({ newPhone: text })}
              style={styles.input}
            />
            <Button title="Save" onPress={this.updateUserInfo} />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 5,
  },
});

export default FireBaseApp;

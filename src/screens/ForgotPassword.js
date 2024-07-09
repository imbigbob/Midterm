import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput,StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const resetPassword = () => {
    auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        console.log('Password reset email sent!');
        setMessage('Password reset email sent!');
        setError('');
      })
      .catch(error => {
        console.error(error);
        setError(error.message);
      });
  };

  return (
    <View>
            <View style={{ justifyContent:'center',alignItems:'center'}}>
        <Text style={{ fontStyle: 'Poppins', fontWeight: 'SemiBold', fontSize: 20,marginTop:20 }}>Reset Password</Text>
        </View>
        <Text style={styles.textEdit}>Email</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <View style={{ justifyContent:'center',alignItems:'center'}}>
      <TouchableOpacity style={styles.button} onPress={resetPassword} >
        <Text style={styles.textButton}>Send request</Text>
      </TouchableOpacity>
      </View>
      {message ? <Text style={{ color: 'green' }}>{message}</Text> : null}
      {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
    marginVertical: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    marginLeft: 10,
  },
  button: {
    width: 343,
    height: 60,
    backgroundColor: '#FEA36B',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:10
  },
  textButton: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
    alignItems: 'center',
  },
  title: {
    fontSize: 10,
    fontWeight: '400',
    color: '#727272',
    marginLeft: 10,
  },
  box: {
    width: 343,
    height: 60,
    backgroundColor: 'white',
    justifyContent: 'center',
    marginBottom: 10,
    borderRadius: 10,
  },
  textEdit: {
    color: '#727272',
    fontSize: 10,
    fontWeight: '400',
    alignItems: 'center',
    marginBottom: 5,
    marginLeft: 10,
  },
  text: {
    marginLeft: 10,
  },
});
export default ForgotPassword;

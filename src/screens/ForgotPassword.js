import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
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
      <Text>Reset Password</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1, marginBottom: 8 }}
      />
      <Button title="Send Reset Email" onPress={resetPassword} />
      {message ? <Text style={{ color: 'green' }}>{message}</Text> : null}
      {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}
    </View>
  );
};

export default ForgotPassword;

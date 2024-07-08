import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

function Auth() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const navigation = useNavigation();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const login = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User signed in!');
        setError('');
      })
      .catch(error => {
        console.error(error);
        setError(error.message);
      });
  };

  const createUser = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
        setError('');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
        setError(error.message);
      });
  };

  const logoff = () => {
    auth()
      .signOut()
      .then(() => {
        console.log('User signed out!');
        setError('');
      })
      .catch(error => {
        console.error(error);
        setError(error.message);
      });
  };

  if (initializing) return null;

  if (!user) {
    return (
      <View>
        <Text>Login</Text>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={{ borderWidth: 1, marginBottom: 8 }}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={{ borderWidth: 1, marginBottom: 8 }}
        />
        <Button title="Login" onPress={login} />
        <Button title="Create User" onPress={createUser} />
        {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={{ color: 'blue', marginTop: 10 }}>Forgot Password?</Text>
        </TouchableOpacity>
        {message ? <Text style={{ color: 'green' }}>{message}</Text> : null}
      </View>
    );
  }

  return (
    <View>
      <Text>Welcome {user.email}</Text>
      <Button title="Logoff" onPress={logoff} />
      {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}
    </View>
  );
}

export default Auth;

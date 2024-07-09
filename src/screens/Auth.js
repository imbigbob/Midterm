import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, TouchableOpacity,StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

function Auth() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [resetEmail, setResetEmail] = useState('');
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

  const resetPassword = () => {
    auth()
      .sendPasswordResetEmail(resetEmail)
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

  if (initializing) return null;

  if (!user) {
    return (
      <View >
      <View style={{ justifyContent:'center',alignItems:'center'}}>
        <Text style={{ fontStyle: 'Poppins', fontWeight: 'SemiBold', fontSize: 20,marginTop:20 }}>Login</Text>
        </View>
        <Text style={styles.textEdit}>Email</Text>
        <TextInput
          placeholder="abc@gmail.com"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
        <Text style={styles.textEdit}>Password</Text>
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />
        <View style={{ justifyContent:'center',alignItems:'center',padding:10}}>
        <TouchableOpacity style={styles.button} 
         onPress={login} >
          <Text style={styles.textButton}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}  onPress={createUser} >
          <Text style={styles.textButton}>Create Account</Text>
          </TouchableOpacity>
          </View>
        {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={{ color: 'grey', marginTop: 10, }}>Forgot Password?</Text>
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
export default Auth;

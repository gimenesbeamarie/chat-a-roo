import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Link } from 'expo-router';

const Signin = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={require('../../assets/images/chatlogo.png')} style={styles.logo} />

      {/* App Name */}
      <Text style={styles.appName}>chat a roo</Text>

      {/* Username Input */}
      <View style={styles.inputContainer}>
        <Image source={require('../../assets/images/user.png')} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#6D6D6D"
        />
      </View>

      <View style={styles.inputContainer}>
        <Image source={require('../../assets/images/pass.png')} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#6D6D6D"
          secureTextEntry={!passwordVisible}
        />
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <Image
            source={
              passwordVisible
                ? require('../../assets/icons/hiddeneye.png')
                : require('../../assets/icons/eye.png')
            }
            style={styles.eyeIcon}
          />
        </TouchableOpacity>
      </View>

      <Link href="/chat" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
      </Link>

      <Text style={styles.registerText}>
        Don't have an account? <Link href="/auth/signup" style={{color:'skyblue'}}>Register here</Link>
      </Text>
    </View>
  );
};

export default Signin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFDDCF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 16,
    resizeMode:'contain'
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4A4A4A',
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 20,
    width: '80%',
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    color: '#4A4A4A',
  },
  eyeIcon: {
    width: 20,
    height: 20,
  },
  button: {
    backgroundColor: '#F6CA56',
    paddingVertical: 12,
    borderRadius: 20,
    width: '80%',
    alignItems: 'center',
    marginVertical: 20,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  registerText: {
    color: '#4A4A4A',
    marginTop: 10,
  },
});

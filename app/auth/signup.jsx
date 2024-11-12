import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Link } from 'expo-router';

const Signup = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/chatlogo.png')} style={styles.logo} />
      
      <Text style={styles.appName}>chat a roo</Text>

      <View style={styles.inputContainer}>
        <Image source={require('../../assets/images/user.png')} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#6D6D6D"
        />
      </View>

      <View style={styles.inputContainer}>
        <Image source={require('../../assets/images/email.png')} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#6D6D6D"
          keyboardType="email-address"
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

<TouchableOpacity style={styles.registerButton}>
  <Link href="/auth/signin" asChild>
    <Text style={styles.buttonText}>Register</Text>
  </Link>
</TouchableOpacity>


      <Text style={styles.dividerText}>or sign up with</Text>

      <View style={styles.socialContainer}>
        <TouchableOpacity>
          <Image source={require('../../assets/images/google.png')} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../../assets/images/apple.png')} style={styles.socialIcon} />
        </TouchableOpacity>
      </View>

      <Text style={styles.loginText}>
        You have an account already? 
        <Link href="/auth/signin" style={styles.loginLink}> Log in here</Link>
      </Text>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFDDCF',
    paddingHorizontal: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 16,
    resizeMode:'contain'
  },
  appName: {
    fontSize: 24,
    fontWeight: '600',
    color: '#4A4A4A',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    paddingHorizontal: 10,
    paddingVertical: 12,
    width: '100%',
    marginBottom: 16,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  input: {
    flex: 1,
    color: '#4A4A4A',
  },
  eyeIcon: {
    width: 20,
    height: 20,
    tintColor: '#6D6D6D', // Adjust icon color if needed
  },
  registerButton: {
    backgroundColor: '#78CBED', // Light blue background
    width: '100%',
    paddingVertical: 14,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 16,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '500',
  },
  dividerText: {
    color: '#6D6D6D',
    marginBottom: 16,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '40%',
    marginBottom: 16,
  },
  socialIcon: {
    width: 40,
    height: 40,
  },
  loginText: {
    color: '#6D6D6D',
    marginTop: 16,
  },
  loginLink: {
    color: '#60A5FA',
    fontWeight: '600',
  },
});
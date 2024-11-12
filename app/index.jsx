import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import React from 'react';

const Index = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/chatlogo.png')} style={styles.logo} />

      <Text style={styles.appName}>chat a roo</Text>

      <Text style={styles.description}>
        A unique messaging experience where users chat anonymously. Share thoughts and connect without revealing your identity.
      </Text>

      <Link href="/auth/signin" asChild>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/auth/signup" asChild>
        <TouchableOpacity style={styles.signupButton}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFDDCF', 
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
    marginBottom: 8,
  },
  description: {
    color: '#6D6D6D',
    textAlign: 'center',
    paddingHorizontal: 32,
    marginBottom: 32,
  },
  loginButton: {
    backgroundColor: '#F6CA56', 
    width: 192,
    paddingVertical: 12,
    borderRadius: 50,
    marginBottom: 16,
    alignItems: 'center',
  },
  signupButton: {
    backgroundColor: '#78CBED', 
    width: 192,
    paddingVertical: 12,
    borderRadius: 50,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '500',
  },
});

export default Index;

import { View, Text, TextInput, Image, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Signup = () => {
  return (
    <View className="flex-1 justify-center items-center bg-[#FFDDCF]">
      <Image source={require('../assets/chatlogo.png')} style={{resizeMode:'contain', height:150, width:150, marginBottom: 20 }} />

      {/* Name Input */}
      <View className="flex-row items-center w-80 bg-gray-100 px-4 py-3 rounded-full mb-3">
        <Image source={require('../assets/user.png')} style={{width: 20, height: 20, marginRight: 10}} />
        <TextInput
          placeholder="Username"
          className="flex-1 text-base"
        />
      </View>

      {/* Email Input */}
      <View className="flex-row items-center w-80 bg-gray-100 px-4 py-3 rounded-full mb-3">
        <Image source={require('../assets/email.png')} style={{width: 20, height: 20, marginRight: 10}} />
        <TextInput
          placeholder="Email"
          className="flex-1 text-base"
        />
      </View>

      {/* Password Input */}
      <View className="flex-row items-center w-80 bg-gray-100 px-4 py-3 rounded-full mb-3">
        <Image source={require('../assets/pass.png')} style={{width: 20, height: 20, marginRight: 10}} />
        <TextInput
          placeholder="Password"
          secureTextEntry
          className="flex-1 text-base"
        />
      </View>

      {/* Register Button */}
      <View className="flex-row w-80 justify-center shadow-md">
        <Link href="login" asChild>
          <TouchableOpacity className="bg-[#78CBED] items-center justify-center py-3 w-72 px-6 rounded-full shadow-xl flex-row">
            <Text className="text-xl text-white font- mr-2">Register</Text>
          </TouchableOpacity>
        </Link>
      </View>

      {/* Sign in with Google/Apple */}
      <Text className="text-gray-500 mt-5">or sign up with</Text>
      <View className="flex-row mt-3">
        <TouchableOpacity className="mr-4">
          <Image source={require('../assets/google.png')} style={{width: 40, height: 40}} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/apple.png')} style={{width: 40, height: 40}} />
        </TouchableOpacity>
      </View>

      {/* Log In Link */}
      <Link href="login" asChild>
        <Text className="text-gray-500 mt-5">You have an account already? <Text className="text-blue-500">Log in here</Text></Text>
      </Link>

      <StatusBar style="auto" />
    </View>
  )
}

export default Signup

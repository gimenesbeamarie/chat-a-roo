import { View, Text, Image, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Index = () => {
  return (
    <View className="flex-1 justify-center items-center bg-[#FFDDCF]">
         {/* Logo at the top */}
      <Image source={require('../assets/chatlogo.png')} style={{resizeMode:'contain', height:200,width:200, marginBottom: 20 }} />

{/* Button for Login */}
<View className="flex-row w-80 justify-center shadow-md ">
  <Link href="login" asChild>
    <TouchableOpacity className="bg-[#F6CA56] items-center justify-center py-3 w-72 px-6 rounded-full shadow-xl flex-row">
      <Text className="text-xl text-white font- mr-2">Log In</Text>
    </TouchableOpacity>
  </Link>
</View>
{/* Button for Signup */}
<View className="flex-row w-80 justify-center shadow-md ">
  <Link href="signup" asChild>
    <TouchableOpacity className="bg-[#78CBED] items-center justify-center mt-3 py-3 w-72 px-6 rounded-full shadow-xl flex-row">
      <Text className="text-xl text-white font- mr-2">Sign Up</Text>
    </TouchableOpacity>
  </Link>
</View>

<StatusBar style="auto" />
    </View>
  )
}

export default Index
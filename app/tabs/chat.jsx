import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';

const Chat = () => {
  return (
    <View className="flex-1 bg-[#FFDDCF] justify-center items-center p-2 pt-14">
      {/* Header */}
      <Text className="text-xl font-kanitbold p-4">Anonymous Messages</Text>
      <ScrollView className="p-2">
        {/* Horizontal ScrollView for Profile Pictures */}
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className="flex-row p-2">
          <View className="items-center mr-4">
            <Image source={require('../../assets/images/cool.png')} className="w-16 h-16 rounded-full" />
            <Text className="font-msemibold">Anonymous</Text>
          </View>
          <View className="items-center mr-4">
            <Image source={require('../../assets/images/nerd.png')} className="w-16 h-16 rounded-full" />
            <Text className="font-msemibold">Anonymous</Text>
          </View>
          <View className="items-center mr-4">
            <Image source={require('../../assets/images/drooling.png')} className="w-16 h-16 rounded-full" />
            <Text className="font-msemibold">Anonymous</Text>
          </View>
          <View className="items-center mr-4">
            <Image source={require('../../assets/images/grin.png')} className="w-16 h-16 rounded-full" />
            <Text className="font-msemibold">Anonymous</Text>
          </View>
          <View className="items-center mr-4">
            <Image source={require('../../assets/images/excited.png')} className="w-16 h-16 rounded-full" />
            <Text className="font-msemibold">Anonymous</Text>
          </View>
          <View className="items-center mr-4">
            <Image source={require('../../assets/images/shy.png')} className="w-16 h-16 rounded-full" />
            <Text className="font-msemibold">Anonymous</Text>
          </View>
          <View className="items-center mr-4">
            <Image source={require('../../assets/images/poker-face.png')} className="w-16 h-16 rounded-full" />
            <Text className="font-msemibold">Anonymous</Text>
          </View>
          <View className="items-center mr-4">
            <Image source={require('../../assets/images/sad.png')} className="w-16 h-16 rounded-full" />
            <Text className="font-msemibold">Anonymous</Text>
          </View>
          <View className="items-center mr-4">
            <Image source={require('../../assets/images/thinking.png')} className="w-16 h-16 rounded-full" />
            <Text className="font-msemibold">Anonymous</Text>
          </View>
          <View className="items-center mr-4">
            <Image source={require('../../assets/images/blushing.png')} className="w-16 h-16 rounded-full" />
            <Text className="font-msemibold">Anonymous</Text>
          </View>
        </ScrollView>      
        
        {/* Message List */}
        <View className="flex-row items-center bg-gray-100 rounded-lg p-3 mb-1 shadow-sm">
          <Image source={require('../../assets/images/blushing.png')} className="w-12 h-12 mr-3 rounded-full" />
          <View className="flex-1">
            <Text className="text-m font-montserrat text-gray-800">Anonymous</Text>
            <Text className="text-sm text-gray-500 font-sourgummy">The truth will set you free.</Text>
          </View>
          <View className="w-3 h-3 bg-green-500 rounded-full"></View>
        </View>

        <View className="flex-row items-center bg-gray-100 rounded-lg p-3 mb-1 shadow-sm">
          <Image source={require('../../assets/images/cool.png')} className="w-12 h-12 mr-3 rounded-full" />
          <View className="flex-1">
          <Text className="text-m font-montserrat text-gray-800">Anonymous</Text>
            <Text className="text-sm text-gray-500 font-sourgummy">They're watching you.</Text>
          </View>
          <View className="w-3 h-3 bg-green-500 rounded-full"></View>
        </View>

        <View className="flex-row items-center bg-gray-100 rounded-lg p-3 mb-1 shadow-sm">
          <Image source={require('../../assets/images/thinking.png')} className="w-12 h-12 mr-3 rounded-full" />
          <View className="flex-1">
          <Text className="text-m font-montserrat text-gray-800">Anonymous</Text>
            <Text className="text-sm text-gray-500 font-sourgummy">Don't trust anyone.</Text>
          </View>
          <View className="w-3 h-3 bg-green-500 rounded-full"></View>
        </View>

        <View className="flex-row items-center bg-gray-100 rounded-lg p-3 mb-1 shadow-sm">
          <Image source={require('../../assets/images/nerd.png')} className="w-12 h-12 mr-3 rounded-full" />
          <View className="flex-1">
          <Text className="text-m font-montserrat text-gray-800">Anonymous</Text>
            <Text className="text-sm text-gray-500 font-sourgummy">The game is rigged.</Text>
          </View>
          <View className="w-3 h-3 bg-green-500 rounded-full"></View>
        </View>

        <View className="flex-row items-center bg-gray-100 rounded-lg p-3 mb-1 shadow-sm">
          <Image source={require('../../assets/images/sad.png')} className="w-12 h-12 mr-3 rounded-full" />
          <View className="flex-1">
          <Text className="text-m font-montserrat text-gray-800">Anonymous</Text>
            <Text className="text-sm text-gray-500 font-sourgummy">Follow the white rabbit.</Text>
          </View>
          <View className="w-3 h-3 bg-green-500 rounded-full"></View>
        </View>

        <View className="flex-row items-center bg-gray-100 rounded-lg p-3 mb-1 shadow-sm">
          <Image source={require('../../assets/images/drooling.png')} className="w-12 h-12 mr-3 rounded-full" />
          <View className="flex-1">
          <Text className="text-m font-montserrat text-gray-800">Anonymous</Text>
            <Text className="text-sm text-gray-500 font-sourgummy">Beware the shadows.</Text>
          </View>
          <View className="w-3 h-3 bg-green-500 rounded-full"></View>
        </View>

        <View className="flex-row items-center bg-gray-100 rounded-lg p-3 mb-1 shadow-sm">
          <Image source={require('../../assets/images/poker-face.png')} className="w-12 h-12 mr-3 rounded-full" />
          <View className="flex-1">
          <Text className="text-m font-montserrat text-gray-800">Anonymous</Text>
            <Text className="text-sm text-gray-500 font-sourgummy">The clock is ticking.</Text>
          </View>
          <View className="w-3 h-3 bg-green-500 rounded-full"></View>
        </View>

        <View className="flex-row items-center bg-gray-100 rounded-lg p-3 mb-1 shadow-sm">
          <Image source={require('../../assets/images/grin.png')} className="w-12 h-12 mr-3 rounded-full" />
          <View className="flex-1">
          <Text className="text-m font-montserrat text-gray-800">Anonymous</Text>
            <Text className="text-sm text-gray-500 font-sourgummy">They're coming for you.</Text>
          </View>
          <View className="w-3 h-3 bg-green-500 rounded-full"></View>
        </View>

        <View className="flex-row items-center bg-gray-100 rounded-lg p-3 mb-1 shadow-sm">
          <Image source={require('../../assets/images/shy.png')} className="w-12 h-12 mr-3 rounded-full" />
          <View className="flex-1">
          <Text className="text-m font-montserrat text-gray-800">Anonymous</Text>
            <Text className="text-sm text-gray-500 font-sourgummy">There's more to the story.</Text>
          </View>
          <View className="w-3 h-3 bg-green-500 rounded-full"></View>
        </View>

        <View className="flex-row items-center bg-gray-100 rounded-lg p-3 mb-1 shadow-sm">
          <Image source={require('../../assets/images/excited.png')} className="w-12 h-12 mr-3 rounded-full" />
          <View className="flex-1">
          <Text className="text-m font-montserrat text-gray-800">Anonymous</Text>
            <Text className="text-sm text-gray-500 font-sourgummy">Remember who you are.</Text>
          </View>
          <View className="w-3 h-3 bg-green-500 rounded-full"></View>
        </View>
      </ScrollView>
    </View>
  );
}

export default Chat;
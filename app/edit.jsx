import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const Edit = () => {
  return (
    <View className="flex-1 bg-[#FFDDCF] p-4 justify-center items-center mt-8 pt-10">
      <Text className="text-xl font-bold mb-4">Edit Profile</Text>
      <ScrollView className="flex-1 w-full">
        <View className="flex-row items-center mb-4">
          <Image source={require('../assets/wink.png')} className="w-20 h-20 rounded-full mr-4" />
          <View>
            <Text className="text-xl font-bold">gimenesbm</Text>
            <Text className="text-sm text-gray-500">Success is the sum of all the</Text>
            <Text className="text-sm text-gray-500">little efforts day by day</Text>
          </View>
        </View>

        <Text className="text-xl font-semibold mb-1 p-1">Customize Profile</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className="flex-row p-4">
          <View className="items-center mr-4">
            <Image source={require('../assets/blushing.png')} className="w-20 h-20 rounded-full" />
          </View>
          <View className="items-center mr-4">
            <Image source={require('../assets/thinking.png')} className="w-20 h-20 rounded-full" />
          </View>
          <View className="items-center mr-4">
            <Image source={require('../assets/sad.png')} className="w-20 h-20 rounded-full" />
          </View>
          <View className="items-center mr-4">
            <Image source={require('../assets/poker-face.png')} className="w-20 h-20 rounded-full" />
          </View>
          <View className="items-center mr-4">
            <Image source={require('../assets/shy.png')} className="w-20 h-20 rounded-full" />
          </View>
          <View className="items-center mr-4">
            <Image source={require('../assets/excited.png')} className="w-20 h-20 rounded-full" />
          </View>
          <View className="items-center mr-4">
            <Image source={require('../assets/grin.png')} className="w-20 h-20 rounded-full" />
          </View>
          <View className="items-center mr-4">
            <Image source={require('../assets/drooling.png')} className="w-20 h-20 rounded-full" />
          </View>
          <View className="items-center mr-4">
            <Image source={require('../assets/nerd.png')} className="w-20 h-20 rounded-full" />
          </View>
          <View className="items-center mr-4">
            <Image source={require('../assets/cool.png')} className="w-20 h-20 rounded-full" />
          </View>
        </ScrollView>

        <Text className="text-xl font-bold mb-5 pt-2 p-2">My Gallery</Text>

        {/* Gallery */}
        <View className="flex-wrap flex-row justify-between mb-4">
          <Image source={require('../assets/cool.png')} className="w-1/3 h-32 mb-4" />
          <Image source={require('../assets/nerd.png')} className="w-1/3 h-32 mb-4" />
          <Image source={require('../assets/drooling.png')} className="w-1/3 h-32 mb-4" />
          <Image source={require('../assets/grin.png')} className="w-1/3 h-32 mb-4" />
          <Image source={require('../assets/excited.png')} className="w-1/3 h-32 mb-4" />
          <Image source={require('../assets/shy.png')} className="w-1/3 h-32 mb-4" />
          <Image source={require('../assets/poker-face.png')} className="w-1/3 h-32 mb-4" />
          <Image source={require('../assets/sad.png')} className="w-1/3 h-32 mb-4" />
          <Image source={require('../assets/thinking.png')} className="w-1/3 h-32 mb-4" />
          <Image source={require('../assets/blushing.png')} className="w-1/3 h-32 mb-4" />
        </View>
      </ScrollView>
    </View>
  );
};

export default Edit;
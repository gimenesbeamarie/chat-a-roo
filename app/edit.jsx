import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const Edit = () => {
  return (
    <View className="flex-1 bg-[#FFDDCF] p-4 justify-center items-center mt-8 pt-10">
      <Text className="text-xl font-kanitbold mb-4">Edit Profile</Text>
      <ScrollView className="flex-1 w-full">
        <View className="flex-row items-center mb-4">
          <Image source={require('../assets/images/wink.png')} className="w-20 h-20 rounded-full mr-4" />
          <View>
            <Text className="text-xl font-kanitbold">gimenesbm</Text>
            <Text className="text-sm text-gray-500 font-sourgummy">Success is the sum of all the</Text>
            <Text className="text-sm text-gray-500 font-sourgummy">little efforts day by day</Text>
          </View>
        </View>

        <Text className="text-xl font-msemibold mb-1 p-1">Customize Profile</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className="flex-row p-4">
          <View className="items-center mr-4">
            <Image source={require('../assets/images/blushing.png')} className="w-20 h-20 rounded-full" />
          </View>
          <View className="items-center mr-4">
            <Image source={require('../assets/images/thinking.png')} className="w-20 h-20 rounded-full" />
          </View>
          <View className="items-center mr-4">
            <Image source={require('../assets/images/sad.png')} className="w-20 h-20 rounded-full" />
          </View>
          <View className="items-center mr-4">
            <Image source={require('../assets/images/poker-face.png')} className="w-20 h-20 rounded-full" />
          </View>
          <View className="items-center mr-4">
            <Image source={require('../assets/images/shy.png')} className="w-20 h-20 rounded-full" />
          </View>
          <View className="items-center mr-4">
            <Image source={require('../assets/images/excited.png')} className="w-20 h-20 rounded-full" />
          </View>
          <View className="items-center mr-4">
            <Image source={require('../assets/images/grin.png')} className="w-20 h-20 rounded-full" />
          </View>
          <View className="items-center mr-4">
            <Image source={require('../assets/images/drooling.png')} className="w-20 h-20 rounded-full" />
          </View>
          <View className="items-center mr-4">
            <Image source={require('../assets/images/nerd.png')} className="w-20 h-20 rounded-full" />
          </View>
          <View className="items-center mr-4">
            <Image source={require('../assets/images/cool.png')} className="w-20 h-20 rounded-full" />
          </View>
        </ScrollView>

        <Text className="text-xl font-msemibold mb-5 pt-2 p-2">My Gallery</Text>

        {/* Gallery */}
        <View className="flex-wrap flex-row justify-between mb-4">
          <Image source={require('../assets/images/cool.png')} className="w-1/3 h-32 mb-4" />
          <Image source={require('../assets/images/nerd.png')} className="w-1/3 h-32 mb-4" />
          <Image source={require('../assets/images/drooling.png')} className="w-1/3 h-32 mb-4" />
          <Image source={require('../assets/images/grin.png')} className="w-1/3 h-32 mb-4" />
          <Image source={require('../assets/images/excited.png')} className="w-1/3 h-32 mb-4" />
          <Image source={require('../assets/images/shy.png')} className="w-1/3 h-32 mb-4" />
          <Image source={require('../assets/images/poker-face.png')} className="w-1/3 h-32 mb-4" />
          <Image source={require('../assets/images/sad.png')} className="w-1/3 h-32 mb-4" />
          <Image source={require('../assets/images/thinking.png')} className="w-1/3 h-32 mb-4" />
          <Image source={require('../assets/images/blushing.png')} className="w-1/3 h-32 mb-4" />
        </View>
      </ScrollView>
    </View>
  );
};

export default Edit;
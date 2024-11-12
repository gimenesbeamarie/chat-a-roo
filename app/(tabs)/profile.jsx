import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const Profile = () => {
  const handleCopyLink = () => {
    Alert.alert('Copied', 'https://chat.a.roo/gimenesbm');
  };

  const handleShare = (platform) => {
    Alert.alert('Successfully shared', `to your ${platform} (Bea Marie Gimenes)`);
  };

  return (
    <View className="flex-1 bg-[#FFDDCF] p-4 pt-20">
      {/* User Info */}
      <View className="items-center mb-4">
        <Image source={require('../../assets/images/wink.png')} className="w-20 h-20 rounded-full mb-4" />
        <View className="items-center">
          <Text className="text-xl font-bold">gimenesbm</Text>
          <Text className="text-sm text-gray-500">Success is the sum of all the</Text>
          <Text className="text-sm text-gray-500">little efforts day by day</Text>
        </View>
      </View>
      
      {/* Edit Button and chat button */}
      <View className="items-center mb-4">
        <Link href="edit" asChild>
          <TouchableOpacity className="bg-[#78CBED] py-2 px-4 rounded-full w-40 mb-3">
            <Text className="text-white text-center">Edit Profile</Text>
          </TouchableOpacity>
        </Link>
        <Link href="chat" asChild>
          <TouchableOpacity className="bg-[#F6CA56] py-2 px-4 rounded-full w-40 mb-9">
            <Text className="text-white text-center">Check Messages</Text>
          </TouchableOpacity>
        </Link>
      </View>

      {/* New Link and Share Buttons */}
      <View className="items-center mb-4">
        <Text className="text-center text-black mb-3">Copy / Share</Text>
        <TouchableOpacity onPress={handleCopyLink} className="bg-gray-200 py-2 px-4 rounded-full mb-4">
          <Text className="text-center text-blue-500">https://chat.a.roo/gimenesbm</Text>
        </TouchableOpacity>
        <View className="flex-row justify-around w-full px-3">
          <TouchableOpacity onPress={() => handleShare('Facebook')} className="bg-blue-600 py-2 px-4 rounded-full">
            <Text className="text-white text-center">Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleShare('Instagram')} className="bg-pink-500 py-2 px-4 rounded-full">
            <Text className="text-white text-center">Instagram</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleShare('TikTok')} className="bg-black py-2 px-4 rounded-full">
            <Text className="text-white text-center">TikTok</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Profile;
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import React from 'react';

const Settings = () => {
  return (
    <View className="flex-1 bg-[#FFDDCF] p-5 justify-start pt-14">
      {/* Header */}
      <Text className="text-lg text-center font-kanitbold mb-5 pt-6">Chat Settings</Text>

      {/* Notification Settings */}
      <View className="bg-gray-100 rounded-lg p-4 shadow-md mb-6">
        <Text className="text-lg font-msemibold mb-4">Notification Settings</Text>
        
        {/* Push Notification */}
        <View className="flex-row justify-between items-center mb-4">
          <View className="flex-row items-center">
            <Image source={require('../../assets/images/notif.png')} className="w-8 h-8 mr-4" />
            <Text className="text-lg font-montserrat">Push Notification</Text>
          </View>
          <Image source={require('../../assets/images/button.png')} className="w-8 h-8" />
        </View>

        {/* Email Notification */}
        <View className="flex-row justify-between items-center mb-4">
          <View className="flex-row items-center">
            <Image source={require('../../assets/images/email.png')} className="w-8 h-8 mr-4" />
            <Text className="text-lg font-montserrat">Email Notification</Text>
          </View>
          <Image source={require('../../assets/images/button.png')} className="w-8 h-8" />
        </View>

        {/* SMS Notification */}
        <View className="flex-row justify-between items-center mb-4">
          <View className="flex-row items-center">
            <Image source={require('../../assets/images/message.png')} className="w-8 h-8 mr-4" />
            <Text className="text-lg font-montserrat">SMS Notification</Text>
          </View>
          <Image source={require('../../assets/images/button.png')} className="w-8 h-8" />
        </View>

        {/* Weekly Reminder */}
        <View className="flex-row justify-between items-center mb-4">
          <View className="flex-row items-center">
            <Image source={require('../../assets/images/text.png')} className="w-8 h-8 mr-4" />
            <Text className="text-lg font-montserrat">Weekly Reminder</Text>
          </View>
          <Image source={require('../../assets/images/button.png')} className="w-8 h-8" />
        </View>
      </View>

      {/* Other Settings */}
      <Text className="text-lg font-msemibold mb-2">Other Settings</Text>
      <View className="bg-gray-100 rounded-lg p-4 shadow-md mb-6">
        {/* Chat History */}
        <View className="flex-row justify-between items-center mb-4">
          <View className="flex-row items-center">
            <Image source={require('../../assets/images/history.png')} className="w-8 h-8 mr-4" />
            <Text className="text-lg font-montserrat">Chat History</Text>
          </View>
        </View>

        {/* Delete Account */}
        <View className="flex-row justify-between items-center mb-4">
          <View className="flex-row items-center">
            <Image source={require('../../assets/images/delete.png')} className="w-8 h-8 mr-4" />
            <Text className="text-lg font-montserrat">Delete Account</Text>
          </View>
        </View>
      </View>

      {/* Save Changes Button */}
      <TouchableOpacity
        className="bg-[#FB8CE9] items-center justify-center py-3 rounded-full shadow-x1"
        onPress={() => Alert.alert('Changes saved')}
      >
        <Text className="text-xl text-white font-kanitbold">Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Settings;
import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, Image } from 'react-native';
import { Link, Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import CustomButton from '../components/CustomButton';

export default function App() {
  return (
    <SafeAreaView className="bg-[#FFDDCF] h-full">
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
        <View className="px-9 flex-1 justify-center items-center">
        <Text className="text-5xl text-gray-500 text-center mb-6 font-caveatbold"> Chat-a-Roo </Text>
          <Image
            source={images.logo}
            className="w-[150] h-[120] mb-8"
            resizeMode="contain"
          />
          <Text className="text-1xl  text-yellow-500 text-center mb-4 font-sourgummy">
            A unique messaging experience where users chat anonymously. Share thoughts and connect anonymously.
          </Text>

          <Text className="text-m text-blue-300 text-center font-montserrat mb-6">
          Chat anonymously freely.
          </Text>

          <CustomButton
            title="GET STARTED"
            handlePress={() => router.push('/auth/signup')}
            containerStyles="w-full px-6 py-3 rounded-full shadow-md"
            className="text-white mt-2"
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}

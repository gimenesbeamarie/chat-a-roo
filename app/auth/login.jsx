import { View, Text, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link, Redirect, router } from 'expo-router';

const Login = () => {
  const [form, setForm]=useState({
    email: '',
    password:''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const submit = () =>{}

  return (
    <SafeAreaView className="bg-[#FFDDCF] h-full">
      <ScrollView>
          <View className="w-full justify-center items-center h-full px-8 my-9">
              <Image source={images.logo}
                resizemode='contain'
                className="w-[170px] h-[159px] "
              />
            <Text className = "text-2xl text-gray-400 mt-7 font-sourgummy">
            Sign In to {' '}
            <Text className = "text-pink-400 font-caveatbold">Chat-a-Roo</Text>
          </Text>

              <FormField
                  title="Email"
                  value={form.email}
                  handleChangeText={(e) => setForm({ ...form, email: e })}
                  otherStyles="mt-7"
                  keyboardType="email-address"
              />
              <FormField

                  title="Password"
                  value={form.password}
                  handleChangeText={(e) => setForm({ ...form, password: e })}
                  otherStyles="mt-7"
              />
              <CustomButton
                  title="SIGN IN"
                  handlePress={() => router.push('/tabs/chat')}
                  containerStyles="w-full mt-7 bg-[#F6CA56] rounded-full"
                  isLoading={isSubmitting}
              />

        <View className="flex justify-center pt-5 flex-row      gap-2">
            <Text className="text-m font-sourgummy">
              Don't have an account?
            </Text>
            <Link
              href="/auth/signup"
              className="text-m font-kanitbold text-blue-400 underline"
            >
              Signup
            </Link>
          </View>
          </View>
        </ScrollView>
    </SafeAreaView>
  )
}
export default Login
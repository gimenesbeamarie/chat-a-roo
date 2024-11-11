import React from "react";
import { Stack} from 'expo-router'

import {useFonts} from 'expo-font'
import { useEffect } from 'react'
import { SplashScreen } from 'expo-router'


SplashScreen.preventAutoHideAsync();

const MainLayout = () =>{

    const [fontsLoaded, error] = useFonts({
      });
      
      useEffect(() => {
        if (error) throw error;
      
        if (fontsLoaded) {
          SplashScreen.hideAsync();
        }
      }, [fontsLoaded, error]);
      
      if (!fontsLoaded && !error) {
        return null;
      }
      

    return(
        <>
        <Stack>
            <Stack.Screen name="index" options={{
                headerShown: false
            }}/>
            <Stack.Screen name="login" options={{
                headerShown: false
            }}/>
            <Stack.Screen name="signup" options={{
                headerShown: false
            }}/>
            <Stack.Screen name="edit" options={{
                headerShown: false
            }}/>
            <Stack.Screen name="(tabs)" options={{
                headerShown: false
            }}/>
        </Stack>
        </>
    )
}

export default MainLayout
import React from "react";
import { Stack} from 'expo-router'

import {useFonts} from 'expo-font'
import { useEffect } from 'react'
import { SplashScreen } from 'expo-router'


SplashScreen.preventAutoHideAsync();

const MainLayout = () =>{

    const [fontsLoaded, error] = useFonts({
      "Caveat-Bold": require("../assets/fonts/Caveat-Bold.ttf"),
      "Kanit-Bold": require("../assets/fonts/Kanit-Bold.ttf"),
      "SourGummy-Light": require("../assets/fonts/SourGummy-Light.ttf"),
      "Montserrat-Regular": require("../assets/fonts/Montserrat-Regular.ttf"),
      "Montserrat-SemiBold": require("../assets/fonts/Montserrat-SemiBold.ttf"),
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
            <Stack.Screen name="edit" options={{
                headerShown: false
            }}/>
             <Stack.Screen name="auth" options={{
                headerShown: false
            }}/>
             <Stack.Screen name="tabs" options={{
                headerShown: false
            }}/>
        </Stack>
        </>
    )
}

export default MainLayout
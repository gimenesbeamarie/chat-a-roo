import { View, Text, Image } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { icons } from '../../constants';

const TabIcon = ({ icon, color }) => {
    return (
        <View>
            <Image
                source={icon}
                resizeMode="contain"
                style={{ width: 24, height: 24, tintColor: color }} 
            />
        </View>
    );
};

const TabLayout = () => {
    return (
        <Tabs 
            screenOptions={{
                tabBarStyle: { backgroundColor: 'white' },
            }}
        >
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.profile}
                            color={color}
                        />
                    )
                }}
            />
            
            <Tabs.Screen
                name="chat"
                options={{
                    title: 'Message',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.chat}
                            color={color}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="settings"
                options={{
                    title: 'Settings',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.settings}
                            color={color}
                        />
                    )
                }}
            />
        </Tabs>
    );
};

export default TabLayout;

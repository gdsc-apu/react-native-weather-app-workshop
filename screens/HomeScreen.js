import { View, Text, StatusBar, Image, SafeAreaView, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { CalendarDaysIcon } from 'react-native-heroicons/outline'
import { fetchWeatherForecast } from '../api/weather'
import * as Progress from 'react-native-progress';

const HomeScreen = () => {
    const [weather, setWeather] = useState({})
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        fetchMyWeatherData();
    },[]);

    const fetchMyWeatherData = async () => {
        fetchWeatherForecast({
            country: 'Malaysia',
            days: '7',
        }).then(data => {
            setWeather(data);
            setLoading(false);
        })
    }

    const { current, location, forecast } = weather;

    const theme = {
        bgWhite: opacity => `rgba(255, 255, 255, ${opacity})`
    }

    return (
        <View className="flex-1 bg-black">
            {
                loading ? (
                    <View className="flex-1 justify-center items-center">
                        <Progress.CircleSnail thicknes={5} size={60} color="#0bb3b2" />
                    </View>
                ) : (
                    <SafeAreaView className="flex-1 mt-12">
                        <View className="justify-around flex-1 my-12">

                            {/* location */}
                            <Text className="text-white text-center text-2xl font-bold mt-12">
                                {location?.name}
                                <Text className="text-lg font-semibold text-gray-300">
                                    {", " + location?.country}
                                </Text>
                            </Text>

                            {/* weather image */}
                            <View>
                                <Image source={{ uri: "https:" + current?.condition.icon }} 
                                    className="w-40 h-40" 
                                />
                            </View>

                            {/* degree Celsius */}
                            <View>
                                <Text className="text-center text-white font-bold text-6xl ml-5">
                                    {current?.temp_c}&#176;
                                </Text>
                                <Text className ="flex-row items-center mx-5">
                                    {current?.condition?.text}
                                </Text>
                            </View>
                        </View>

                        <ScrollView
                            horizontal
                            contentContainerStyle={{ paddingHorizontal: 15 }}
                            showsHorizontalScrollIndicator={false}
                        >
                            {
                                forecast?.forecastday?.map((item, index) => {
                                    let date = new Date(item.date);
                                    let options = { weekday: 'long' };
                                    let dayName = date.toLocaleDateString('en-US', options);
                                    return (
                                        <View
                                            key={index}
                                            className="flex-1 justify-center items-center w-24 rounded-3xl py-3 mr-4"
                                            style={{ backgroundColor: theme.bgWhite(0.15) }}
                                        >
                                            <Image source={{ uri: "https:" + item?.day?.condition?.icon }}
                                                className="h-11 w-11"
                                            ></Image>
                                            <Text className="text-white">{dayName}</Text>
                                            <Text className="text-white text-xl font-semibold">
                                                {item?.day?.avgtemp_c}&#176;
                                            </Text>

                                        </View>
                                    )
                                })
                            }
                        </ScrollView>
                    </SafeAreaView>
                )
            }
        </View>
    )
}

export default HomeScreen
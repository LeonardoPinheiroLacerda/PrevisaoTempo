import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Weather from '../../api/Weather';

import styles from "./style";

export default function WeatherForecast({ navigation, route }: any) {

    const UF = route.params.UF;
    const city = route.params.city;
    
    const [temp, setTemp] = useState('');
    const [dayOfTheWeek, setDayOfTheWeek] = useState(['']);
    const [weatherData, setWeatherData] = useState({
        "by": "",
        "valid_key": true,
        "results": {
            "temp": 0,
            "date": "",
            "time": "",
            "condition_code": "",
            "description": "",
            "currently": "",
            "cid": "",
            "city": "",
            "img_id": "",
            "humidity": 0,
            "wind_speedy": "",
            "sunrise": "",
            "sunset": "",
            "condition_slug": "",
            "city_name": "",
            "forecast": [
                {
                    "date": "",
                    "weekday": "",
                    "max": 0,
                    "min": 0,
                    "description": "",
                    "condition": "0",
                }
            ]
        },
        "execution_time": 0.0,
        "from_cache": true
    });

    const [day, setDay] = useState(0);

    const [simpleWeatherData, setSimpleWeatherData] = useState(
        {
            "date": "",
            "weekday": "",
            "max": 0,
            "min": 0,
            "description": "",
            "condition": "0",
        }
    );


    const [max, setMax] = useState(0);
    const [min, setMin] = useState(0);
    const [windSpeed, setWindSpeed] = useState('');
    const [airHumidity, setAirHumidity] = useState('');
    const [weather, setWeather] = useState('');

    useEffect(() => {
        const dt = new Date();
        let tempDay = [];
        let cont = dt.getDay();

        let i;
        for (i = 0; i <= 7; i++) {
            switch (cont) {
                case 0:
                    tempDay.push("Dom");
                    break;

                case 1:
                    tempDay.push("Seg");
                    break;

                case 2:
                    tempDay.push("Ter");
                    break;

                case 3:
                    tempDay.push("Qua");
                    break;

                case 4:
                    tempDay.push("Qui");
                    break;

                case 5:
                    tempDay.push("Sex");
                    break;

                case 6:
                    tempDay.push("Sab");
                    break;
            }
            cont = (cont < 7) ? cont += 1 : 0;
        }
        setDayOfTheWeek(tempDay);

        const weatherAPI = new Weather();

        weatherAPI.getWeather(city, UF).then(response => {
            setWeatherData(response.data);
        });

    }, []);

    useEffect(() => {
        setDay(0);
        setSimpleWeatherData(weatherData.results.forecast[0]);
    }, [weatherData]);

    useEffect(() => {
        setMax(simpleWeatherData.max);
        setMin(simpleWeatherData.min);

        if(day != 0){
            setAirHumidity(" Somente dia atual.");
            setWindSpeed(" Somente dia atual.");
            setTemp('');
        }else{
            setAirHumidity(weatherData.results.humidity.toString() + "%");
            setWindSpeed(weatherData.results.wind_speedy);
            setTemp('(' + weatherData.results.temp + '°)');
        }
        
        setWeather(simpleWeatherData.description);

        console.log(simpleWeatherData);
 
        switch(simpleWeatherData.condition){
            case "storm":
                setIcon(require('../../../assets/nuvemNuvemChuva.png'));
                break;
            case "snow":
                setIcon(require('../../../assets/nuvemNeve.png'));
                break;
            case "hail":
                setIcon(require('../../../assets/nuvem.png'));
                break;
            case "fog":
                setIcon(require('../../../assets/nevoa.png'));
                break;
            case "clear_day":
                setIcon(require('../../../assets/sol.png'));
                break;
            case "clear_night":
                setIcon(require('../../../assets/lua.png'));
                break;
            case "cloud":
                setIcon(require('../../../assets/nuvemNuvem.png'));
                break;
            case "cloudly_day":
                setIcon(require('../../../assets/solNuvemChuva.png'));
                break;
            case "cloudly_night":
                setIcon(require('../../../assets/luaNuvem.png'));
                break;
            case "rain":
                setIcon(require('../../../assets/nuvemChuvaForte.png'));
                break;
            case "none_day":
                setIcon(require('../../../assets/sol.png'));
                break;
            case "none_night":
                setIcon(require('../../../assets/lua.png'));
                break;
        }

    },[simpleWeatherData, day]);

    const [icon, setIcon] = useState(require('../../../assets/sol.png'));

    return (
        <View style={styles.container}>
            <Text
                style={styles.headerText}
            > {city} - {UF} {temp} </Text>

            <View style={styles.weekDays}>
                <TouchableOpacity
                    style={day == 0 ? styles.dayFocused : styles.day}
                    onPress={() => {
                        setDay(0);
                        setSimpleWeatherData(weatherData.results.forecast[0]);
                    }}
                >
                    <Text
                        style={styles.dayText}
                    >{dayOfTheWeek[0]}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={day == 1 ? styles.dayFocused : styles.day}
                    onPress={() => {
                        setDay(1);
                        setSimpleWeatherData(weatherData.results.forecast[1]);
                    }}
                >
                    <Text
                        style={styles.dayText}
                    >{dayOfTheWeek[1]}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={day == 2 ? styles.dayFocused : styles.day}
                    onPress={() => {
                        setDay(2);
                        setSimpleWeatherData(weatherData.results.forecast[2]);
                    }}
                >
                    <Text
                        style={styles.dayText}
                    >{dayOfTheWeek[2]}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={day == 3 ? styles.dayFocused : styles.day}
                    onPress={() => {
                        setDay(3);
                        setSimpleWeatherData(weatherData.results.forecast[3]);
                    }}
                >
                    <Text
                        style={styles.dayText}
                    >{dayOfTheWeek[3]}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={day == 4 ? styles.dayFocused : styles.day}
                    onPress={() => {
                        setDay(4);
                        setSimpleWeatherData(weatherData.results.forecast[4]);
                    }}
                >
                    <Text
                        style={styles.dayText}
                    >{dayOfTheWeek[4]}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={day == 5 ? styles.dayFocused : styles.day}
                    onPress={() => {
                        setDay(5);
                        setSimpleWeatherData(weatherData.results.forecast[5]);
                    }}
                >
                    <Text
                        style={styles.dayText}
                    >{dayOfTheWeek[5]}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={day == 6 ? styles.dayFocused : styles.day}
                    onPress={() => {
                        setDay(6);
                        setSimpleWeatherData(weatherData.results.forecast[6]);
                    }}
                >
                    <Text
                        style={styles.dayText}
                    >{dayOfTheWeek[6]}</Text>
                </TouchableOpacity>

            </View>
            <View style={styles.weatherView}>
                
                <Image
                    source={icon}
                    style={styles.icon}
                ></Image>

                <Text
                    style={styles.weatherDesc}
                >{weather}</Text>
            </View>

            <View>
                <Text style={styles.bold}>
                    Temperatura minima: {' '}
                    <Text style={styles.nonBold}>
                        {min+'°'}
                    </Text>
                </Text>
                <Text style={styles.bold}>
                    Temperatura maxima: {' '}
                    <Text style={styles.nonBold}>
                        {max+'°'}
                    </Text>
                </Text>

                <Text style={styles.bold}>
                    Humidade do ar: {' '}
                    <Text style={styles.nonBold}>
                        {airHumidity}
                    </Text>
                </Text>

                <Text style={styles.bold}>
                    Velocidade do vento: {' '}
                    <Text style={styles.nonBold}>
                        {windSpeed}
                    </Text>
                </Text>
            </View>

        </View>
    );
}
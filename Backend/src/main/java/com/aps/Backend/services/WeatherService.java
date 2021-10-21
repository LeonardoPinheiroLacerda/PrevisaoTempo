package com.aps.Backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aps.Backend.requests.ApiRequest;

@Service
public class WeatherService {

	@Autowired
	private ApiRequest apiService;
	
	public String getWeather(String city, String UF) {
		return apiService.climaPlace(city, UF);
	}
	
}

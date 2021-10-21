package com.aps.Backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aps.Backend.requests.ApiRequest;

@Service
public class CityService {

	@Autowired
	private ApiRequest apiService;
	
	public String getCities(Integer id) {
		return apiService.findCities(id);
	}
	
}

package com.aps.Backend.resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.aps.Backend.services.WeatherService;

@RestController
@RequestMapping("/weathers")
public class WeatherResource {

	@Autowired
	private WeatherService service;
	
	@GetMapping()
	public String findCity(@RequestParam String city, @RequestParam String UF) {
		return service.getWeather(city, UF);
	}
	
}

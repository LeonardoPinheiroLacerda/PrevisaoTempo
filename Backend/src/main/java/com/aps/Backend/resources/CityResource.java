package com.aps.Backend.resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aps.Backend.services.CityService;

@RestController
@RequestMapping("/cities")
public class CityResource {

	@Autowired
	private CityService service;
	
	@GetMapping(path = "{id}")
	public String findCity(@PathVariable Integer id) {
		return service.getCities(id);
	}
	
}

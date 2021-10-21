package com.aps.Backend.resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aps.Backend.services.StateService;

@RestController
@RequestMapping("/states")
public class StateResource {
	
	@Autowired
	private StateService service;
	
	@GetMapping
	public String findAll() {
		return service.getStates();
	}
	
	@GetMapping(path = "/{id}")
	public String findSiglaById(@PathVariable Integer id) {
		return service.getSiglaById(id);
	}
	
}

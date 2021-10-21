package com.aps.Backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aps.Backend.requests.ApiRequest;

@Service
public class StateService {

	@Autowired
	private ApiRequest apiService;
	
	public String getStates() {
		return apiService.findAllStates();
	}
	
	public String getSiglaById(Integer id) {
		return apiService.findSiglaById(id);
	}
}

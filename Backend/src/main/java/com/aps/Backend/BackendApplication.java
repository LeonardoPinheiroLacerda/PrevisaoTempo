package com.aps.Backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.aps.Backend.services.LogService;

@SpringBootApplication
public class BackendApplication {

	public static void main(String[] args) {			
		LogService logService = new LogService();
		logService.checkAndCreateFile();
		
		SpringApplication.run(BackendApplication.class, args);
	}

}

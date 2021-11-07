package com.aps.Backend.services;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.time.LocalDateTime;

import org.springframework.stereotype.Service;

@Service
public class LogService {

	public void checkAndCreateFile() {
		File log = new File("./src/main/resources/log.log");
		
		try {
			if(!log.exists())
				log.createNewFile();
			
			
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	public void log(String message) {
		File log = new File("./src/main/resources/log.log");
		
		LocalDateTime dateTime = LocalDateTime.now();
		
		FileWriter writer;

        try {
            writer = new FileWriter(log, true);
        } catch (IOException e) {
            e.printStackTrace();
            return;
        }

        PrintWriter saida = new PrintWriter(writer, true);
        saida.println("[" + dateTime.toString() + "]  " + message);
        
        saida.close();
        
        try {
            writer.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
	}
	
}

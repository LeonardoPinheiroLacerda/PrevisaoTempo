package com.aps.Backend.requests;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aps.Backend.services.LogService;
import com.squareup.okhttp.OkHttpClient;
import com.squareup.okhttp.Request;
import com.squareup.okhttp.Response;

@Service
public class ApiRequest {

	@Autowired
	private LogService logService;
	
	private final static String IBGE_BASE_URL = "https://servicodados.ibge.gov.br/api/v1/";
	private final static String HG_BASE_URL = "https://api.hgbrasil.com/weather?key=ffa6c99b&city_name=";

	// private final static MediaType MEDIA_TYPE =
	// MediaType.parse("application/json; charset=utf-8");
	private final static OkHttpClient CLIENT = new OkHttpClient();

	public String findAllStates() {

		String url = IBGE_BASE_URL + "localidades/estados?orderBy=nome";

		try {

			Request request = new Request.Builder().url(url).header("Content-Type", "application/json").build();

			Response response = CLIENT.newCall(request).execute();

			String resp = response.body().string();
			
			logService.log("Procurando pelos estados - " + resp);
			
			return resp;

		} catch (IOException e) {
			e.printStackTrace();
		}

		return null;
	}
	
	public String findSiglaById(Integer id) {
		
		String url = IBGE_BASE_URL + "/localidades/estados/" + id;
		
		try {

			Request request = new Request.Builder().url(url).header("Content-Type", "application/json").build();

			Response response = CLIENT.newCall(request).execute();

			
			String resp = response.body().string();
			
			logService.log("Procurando sigla de estado de id:" + id + " - " + resp);
			
			return resp;
			

		} catch (IOException e) {
			e.printStackTrace();
		}

		return null;
		
	}
	

	public String findCities(Integer id) {

		String url = IBGE_BASE_URL + "localidades/estados/" + id + "/municipios";

		try {

			Request request = new Request.Builder().url(url).header("Content-Type", "application/json").build();

			Response response = CLIENT.newCall(request).execute();

			String resp = response.body().string();
			
			logService.log("Procurando cidades de estado de id:" + id + " - " + resp);
			
			return resp;
			

		} catch (IOException e) {
			e.printStackTrace();
		}

		return null;
	}

	public String climaPlace(String city, String UF) {

		String url = HG_BASE_URL + city + "," + UF;

		try {

			Request request = new Request.Builder().url(url).header("Content-Type", "application/json").build();

			Response response = CLIENT.newCall(request).execute();

			String resp = response.body().string();
			
			logService.log("Recebendo previsão do tempo de " + city + "-" + UF +" - "+ resp);
			
			return resp;

		} catch (IOException e) {
			e.printStackTrace();
		}

		return null;
	}

}

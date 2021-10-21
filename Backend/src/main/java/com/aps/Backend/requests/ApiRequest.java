package com.aps.Backend.requests;

import java.io.IOException;

import org.springframework.stereotype.Service;

import com.squareup.okhttp.OkHttpClient;
import com.squareup.okhttp.Request;
import com.squareup.okhttp.Response;

@Service
public class ApiRequest {

	private final static String IBGE_BASE_URL = "https://servicodados.ibge.gov.br/api/v1/";
	private final static String HG_BASE_URL = "https://api.hgbrasil.com/weather?key=c9093d6b&city_name=";

	// private final static MediaType MEDIA_TYPE =
	// MediaType.parse("application/json; charset=utf-8");
	private final static OkHttpClient CLIENT = new OkHttpClient();

	public String findAllStates() {

		String url = IBGE_BASE_URL + "localidades/estados?orderBy=nome";

		try {

			Request request = new Request.Builder().url(url).header("Content-Type", "application/json").build();

			Response response = CLIENT.newCall(request).execute();

			return response.body().string();

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

			return response.body().string();

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

			return response.body().string();

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

			return response.body().string();

		} catch (IOException e) {
			e.printStackTrace();
		}

		return null;
	}

}

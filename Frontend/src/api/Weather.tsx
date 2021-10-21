import axios from 'axios';

export default class Weather {

  BASEURL = 'http://192.168.10.2:8080/';

  getWeather = (city : string, uf : string) => {
    return axios.get(this.BASEURL + 'weathers?city=' + city + '&UF=' + uf);
  }

}

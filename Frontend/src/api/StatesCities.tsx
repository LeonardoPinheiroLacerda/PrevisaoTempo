import axios from 'axios';

export default class StatesCities {

  BASEURL = 'http://192.168.10.2:8080/';

  getEstados = () => {
    return axios.get(this.BASEURL + 'states');
  }

  getEstadoUF = (id : string) => {
    return axios.get(this.BASEURL + "states/" + id);
  }

  getCidades = (id : string) => {
    return axios.get(this.BASEURL + 'cities/' + id);
  }

}

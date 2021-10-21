import React, { useEffect, useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { Picker } from "@react-native-picker/picker";
import styles from "./style";
import StatesCities from '../../api/StatesCities';
import { TouchableOpacity } from 'react-native-gesture-handler';
import NavigationUtils from '../../utils/NavigationUtils';

export default function Home({ navigation }: any) {

    const [stateSigla, setStateSigla] = useState(
        {
            "id": 0,
            "nome": "",
            "regiao": {
                "id": 0,
                "nome": "",
                "sigla": "",
            },
            "sigla": "",
        }
    )

    const [state, setState] = useState('');
    const [states, setStates] = useState([
        {
            "id": 0,
            "nome": '',
            "regiao": {
                "id": 0,
                "nome": '',
                "sigla": '',
            },
            "sigla": 0
        }
    ]);

    const [city, setCity] = useState("");
    const [cities, setCities] = useState([
        {
            "id": 0,
            "nome": "",
            "microrregiao": {
                "id": 0,
                "mesorregiao": {
                    "UF": {
                        "id": 0,
                        "nome": "",
                        "regiao": {
                            "id": 0,
                            "nome": "",
                            "sigla": "",
                        },
                        "sigla": "",
                    },
                    "id": 0,
                    "nome": "",
                },
                "nome": "",
            },
        }
    ])

    const sc = new StatesCities();

    useEffect(() => {
        sc.getEstados().then(response => {
            setStates(response.data);
        })
        .catch(err => console.log("Não foi possivel encontrar os estados."));
    }, []);

    useEffect(() => {
        sc.getCidades(state).then(response => {
            setCities(response.data);
        })

        .then(() => {
            console.log("Mudou o estado, estado: " + state);
            sc.getEstadoUF(state)
            .then(response => {
                setStateSigla(response.data)
            })
            .catch(err => console.log("Sigla nao encontrada."));
        })
        .catch(err => {
            console.log("Estado ainda não foi selecionado.");

            setStateSigla(
                {
                    "id": 0,
                    "nome": "",
                    "regiao": {
                        "id": 0,
                        "nome": "",
                        "sigla": "",
                    },
                    "sigla": "",
                }
            );
            setCities([]);
        });
    }, [state]);

    useEffect(() => {
        console.log(city);
    }, [city]);

    return (

        <View style={styles.container}>
            <Text style={styles.textHeader}>Pesquisar</Text>
            <Text style={styles.text}>Abaixo, selecione as opções referentes a sua localização,ou a localização a ser pesquisado o clima:</Text>

            <Picker
                selectedValue={state}
                onValueChange={(value) => setState(value)}
                //mode="dropdown" // Android only
                style={styles.picker}
            >
                <Picker.Item label="-Selecione seu estado-" value="" />
                {
                    states.map(obj => {
                        return <Picker.Item label={obj.nome} value={obj.id} key={obj.id} />
                    })
                }
            </Picker>

            <Picker
                selectedValue={city}
                onValueChange={(value) => setCity(value)}
                //mode="dropdown" // Android only
                style={styles.picker} 
            >
                <Picker.Item label="-Selecione sua cidade-" value="" />
                {
                    cities.map(obj => {
                        return <Picker.Item label={obj.nome} value={obj.nome} key={obj.id} />
                    })
                }
            </Picker>

            <TouchableOpacity onPress={() => {                    
                    const navUtils = new NavigationUtils();

                    if(city != "" && stateSigla.id != 0){
                        navUtils.routeWithData(navigation, "previsao",
                        {
                            "UF": stateSigla.sigla,
                            "city" : city
                        });
                    }else{
                        Alert.alert("Erro!", "Selecione uma cidade e estado para continuar.");
                    }

                }}
                style={styles.button}
            >
                <Text
                    style={styles.textButton}
                >
                    Consultar
                </Text>
            </TouchableOpacity>

        </View>
    );
}
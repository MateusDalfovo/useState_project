import { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

export default function Home() {

    // useState
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    function handleUserAdd(){
        console.log(
            "Nome Completo:" + name
            +"\nEmail: " + email
        )

        Alert.alert(
            "Nome completo: " + name
            +"\nEmail: " + email
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Preencha os Dados</Text>

            <TextInput
                style={styles.input}
                placeholder="Nome completo"

                value={ name }
                onChangeText= { setName } 
            />

            <TextInput
                style={styles.input}
                placeholder="E-mail"

                value={ email }
                onChangeText= { setEmail } 
            />

            <TouchableOpacity style={styles.btn} onPress={ handleUserAdd }>
                <Text style={styles.btnTxt}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    )
}

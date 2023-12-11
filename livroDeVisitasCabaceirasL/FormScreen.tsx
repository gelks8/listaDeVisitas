import React from 'react';
import { Text, View, TextInput, Image } from 'react-native';
import styles from './Styles';
import { Button } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';


const FormScreen = () => {

    return (
        <View  style={styles.container}>
            <Image style={styles.partners} source={require('./assets/partners.png')} />
            <Text style={styles.textForms}>Fomulário de Visitas</Text>
            <TextInput style={styles.textInput} placeholder="Nome" placeholderTextColor="#9EA1A4"/>
            <TextInput style={styles.textInput} placeholder="País" placeholderTextColor="#9EA1A4"/>
            <TextInput style={styles.textInput} placeholder="Estado/Província" placeholderTextColor="#9EA1A4"/>
            <TextInput style={styles.textInput} placeholder="Cidade de Origem" placeholderTextColor="#9EA1A4"/>
            <TextInput style={styles.textInput} placeholder="Email" placeholderTextColor="#9EA1A4"/>
            <TextInput style={styles.textInput} placeholder="Motivo da Visita" placeholderTextColor="#9EA1A4"/>
            <Button title="Enviar" size="lg" buttonStyle={styles.sendButton}/>
        </View >
    );
};

export default FormScreen;
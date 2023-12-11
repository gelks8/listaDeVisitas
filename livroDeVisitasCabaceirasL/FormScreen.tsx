import React, { useState } from 'react';
import { View, TextInput, Image } from 'react-native';
import styles from './Styles';
import { Button } from '@rneui/themed';
import firebaseService from './src/services/firebaseService';
import Toast from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/native';

const FormScreen = () => {
    const navigation = useNavigation();

    const [formName, setFormName] = useState('')
    const [formCountry, setFormCountry] = useState('')
    const [formState, setFormState] = useState('')
    const [formCity, setFormCity] = useState('')
    const [formEmail, setFormEmail] = useState('')
    const [formReasonForVisit, setFormReasonForVisit] = useState('')
    const onSubmit = async () => {
        const data = {formName, formCountry, formState, formCity, formEmail, formReasonForVisit}
        firebaseService.save(data, 'VisitorsCabacity').then((docRef) => {
            if (docRef && docRef.id) {
                Toast.show({type: 'success', text1: 'Formulário salvo com sucesso!'})
                setTimeout(() => navigation.navigate('Home' as never), 5000)
            } else {
                Toast.show({type: 'warning', text1: 'Não foi possivel salvar o formulário no momento!'})
            }
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.partnersFormsView}>
                <Image style={styles.bodeReiFormsViewImg} source={require('./assets/bode_rei.png')} />
                <Image source={require('./assets/partners.png')} />
            </View>
            <View style={styles.form}>
                <TextInput value={formName} onChangeText={(text) => (setFormName(text))} style={styles.input} placeholder="Nome" placeholderTextColor="#9EA1A4"/>
                <TextInput value={formCountry} onChangeText={(text) => (setFormCountry(text))} style={styles.input} placeholder="País" placeholderTextColor="#9EA1A4"/>
                <TextInput value={formState} onChangeText={(text) => (setFormState(text))} style={styles.input} placeholder="Estado/Província" placeholderTextColor="#9EA1A4"/>
                <TextInput value={formCity} onChangeText={(text) => (setFormCity(text))} style={styles.input} placeholder="Cidade de Origem" placeholderTextColor="#9EA1A4"/>
                <TextInput value={formEmail} onChangeText={(text) => (setFormEmail(text))} style={styles.input} placeholder="Email" placeholderTextColor="#9EA1A4"/>
                <TextInput value={formReasonForVisit} onChangeText={(text) => (setFormReasonForVisit(text))} style={styles.input} placeholder="Motivo da Visita" placeholderTextColor="#9EA1A4"/>
                <Button onPress={onSubmit} title="Enviar" size="lg" buttonStyle={styles.sendButton}/>
            </View>
            <Toast/>
        </View>
    );
};

export default FormScreen;
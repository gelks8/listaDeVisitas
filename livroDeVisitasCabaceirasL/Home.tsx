import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './Styles';
import { Button } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

const Home = (): JSX.Element => {
    const navigation = useNavigation();
  
    const navigateToFormScreen = () => {
        navigation.navigate('FormScreen' as never);
    };

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('./assets/bode_rei.png')}></Image>
            <Text style={styles.text}>Bem-vindo ao formulário de visitas de Cabaceiras!</Text>
            <Button title="Entrar" size="lg" buttonStyle={styles.enterButton} onPress={navigateToFormScreen}></Button>
            <Image style={styles.sponsers} source={require('./assets/sponsers.jpeg')}></Image>
        </View>
    );
  };

  export default Home;
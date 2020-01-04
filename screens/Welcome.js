import * as React from 'react';
import { useState } from 'react';

import {StyleSheet, Platform, Dimensions, Image, View, Text, ActivityIndicator} from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Keyboard, KeyboardAvoidingView } from 'react-native';
import {Input} from 'react-native-elements';

import { Ionicons } from '@expo/vector-icons';

import { theme } from '../constants';
import { ViewBlock, TextBlock, Button} from '../components';

const {width, height} = Dimensions.get('window');



export function Welcome(props) {
  const renderHeader = () => (
    <ViewBlock flex={1} justify='space-between'> 
      <TouchableOpacity>
        <Ionicons name="md-menu" size={40} color="#BFAC5C" 
          style={{marginTop: 70, marginLeft: 35}}
        />
      </TouchableOpacity>
      <TextBlock style={styles.headerGreeting}>
        Good morning,{'\n'}Anastasia
      </TextBlock>
      <Image
        style={styles.headerImage}
        source={require('../assets/images/leaf_original.png')}
      />
    </ViewBlock>
  );


  const renderIcons = () => {
    const icons = [
      {iconName: 'ios-leaf',  name: 'Natural'},
      {iconName: 'ios-heart', name: 'Healthy'},
      {iconName: 'ios-happy', name: 'Nutritious'}
    ];
    return (
      <ViewBlock flex={0.5} row >
        {icons.map((icon, idx) => (
          <ViewBlock key={idx} 
            style={styles.iconBlock}
          >
            <Ionicons name={icon.iconName} size={32} color="#546a46cc"
              style={styles.iconIcon}
            />
            <View style={styles.iconBackground} />
            <TextBlock style={{color: '#b0b099'}} >
              {icon.name}
            </TextBlock>
          </ViewBlock>
        ))}
      </ViewBlock>
    );
  };


  // ==== Login section ====
  const {navigation}   = props;

  const VALID_EMAIL    = "contact@react-ui-kit.com";
  const VALID_PASSWORD = "subscribe";
  const [email, setEmail]         = useState(VALID_EMAIL);
  const [password, setPassword]   = useState(VALID_PASSWORD);
  const [error, setError]         = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsLoading(true);

    try {
      if (email !== VALID_EMAIL) 
        throw "Wrong email or password!";
      if (password !== VALID_PASSWORD) 
        throw "Wrong email or password!";

      navigation.navigate('Products');
      setIsLoading(false);
    } catch (err) {
      setError(err);
      setIsLoading(false);
    }
  };
  const handleRegister = () => {
    navigation.navigate('Register');
  };
  const handleForgot = () => {
    navigation.navigate('Forgot');
  };
  const hasError = () => {
    if (error !== '') {
      return styles.hasErrors;
    } else {
      return null;
    }
  };

  const renderLogin = () => (
    <ViewBlock flex={1} style={{marginLeft: 35}}>
      <Input
        leftIcon={<Ionicons name="ios-mail" size={20} color="#ccc" />}
        inputStyle={styles.loginInput}
        errorMessage={error}
        defaultValue={email}
        onChangeText={(text) => {setEmail(text)}}
      />
      <Input
        secureTextEntry={true}
        leftIcon={<Ionicons name="md-key" size={20} color="#ccc" />}
        inputStyle={[styles.loginInput, hasError()]}
        defaultValue={password}
        onChangeText={(text) => {setPassword(text)}}
      />

      {/* === Forget & Register === */}
      <ViewBlock row justify='flex-end'>
        <TouchableOpacity onPress={() => handleForgot()}>
          <Text style={[styles.loginTextBtn, styles.loginForgot]}>
            Forgot ?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleRegister()}>
          <Text style={[styles.loginTextBtn, styles.loginRegister]}>
            Register
          </Text>
        </TouchableOpacity>
      </ViewBlock>

      {/* === Sign in Button === */}
      <TouchableOpacity 
        style={styles.loginButton}
        onPress={() => handleLogin()}
      >
        {isLoading ?
          <ActivityIndicator size='small' color='white' /> :
          <TextBlock style={styles.loginLoginText}>
            Sign in
          </TextBlock>
        }
      </TouchableOpacity>
    </ViewBlock>
  );


  return (
    // keyboardVerticalOffset={Header.HEIGHT + 20}
    // behavior={Platform.OS === 'ios' ? 'padding' : null}
    <KeyboardAvoidingView
      style={styles.wrapper}
      behavior='padding'
    >
      {renderHeader()}
      {renderIcons()}
      {renderLogin()}
    </KeyboardAvoidingView>
  );
}

Welcome.navigationOptions = {
  header: null
};


const styles = StyleSheet.create({
  // Wrapper ---------------------
  wrapper: {
    flex: 1
  },

  // Header ----------------------
  headerGreeting: {
    fontFamily: 'inria-serif-regular',
    color: '#546a46',
    fontSize: 32,
    marginLeft: 35
  },
  headerImage: {
    width: 300, height: 300,
    position: 'absolute',
    top: 0,
    right: 0,
  },

  // Icons -----------------------
  iconBlock: {
    marginTop: 35,
    marginLeft: 35,
    marginRight: 15,
  },
  iconIcon: {
    zIndex: 1,
    position: 'absolute',
    top: -10,
    left: 15
  },
  iconBackground: {
    borderRadius: 1,
    width: 32,
    height: 32,
    backgroundColor: '#f1f1e4',
    borderRadius: 50
  },


  // Login ------------------------
  loginInput: {
    fontFamily: 'inria-serif-regular',
    color: '#546a46',
    fontSize: 16,
    marginLeft: 16,
    borderBottomWidth: 0,
  },
  loginButton: {
    backgroundColor: '#BFAC5C',
    padding: 20,
    width: 225,
    justifyContent: 'center',
    alignItems: 'center',
    position: "absolute",
    right: 0,
    bottom: 0,
    borderTopLeftRadius: 45,
    borderBottomLeftRadius: 45,
    borderBottomRightRadius: 25,
  },
  loginLoginText: {
    fontFamily: 'lato-regular',
    fontSize: 20,
    color: '#ffffff'
  },
  loginTextBtn: {
    fontFamily: 'inria-serif-regular',
    fontSize: 13,
  },
  loginForgot: {
    color: '#aaa',
  },
  loginRegister: {
    color: '#ff9999',
    marginLeft: 15,
    marginRight: 15,
  },
  hasErrors: {
      borderBottomColor: theme.colors.accent,
  }
});

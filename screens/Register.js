import React, {useState} from 'react';
import {StyleSheet,View,Text,KeyboardAvoidingView,TouchableOpacity,ActivityIndicator} from 'react-native';
import {Input} from 'react-native-elements';
import {Ionicons} from '@expo/vector-icons';

import {ViewBlock, TextBlock} from '../components/index';



export const Register = (props) => {
  const renderHeader = () => (
    <Text style={styles.headerHeading}>Register</Text>
  );


  // Register block ---------------------------------------------------------
  const {navigation}   = props;

  const VALID_EMAIL               = "contact@react-ui-kit.com";
  const VALID_PASSWORD            = "subscribe";
  const [email, setEmail]         = useState(VALID_EMAIL);
  const [password, setPassword]   = useState(VALID_PASSWORD);
  const [cpassword, setCpassword] = useState(VALID_PASSWORD);
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = () => {
    setIsLoading(true);
    navigation.navigate('Products');
    setIsLoading(false);
  };

  const renderRegister = () => (
    <ViewBlock flex={1} justify='center' align='center'
      style={{marginLeft: 35}}
    >
      <Input
        label={'Email'}
        labelStyle={styles.registerLabel}
        inputContainerStyle={styles.registerInputContainer}
        inputStyle={styles.registerInput}
        defaultValue={email}
        onChangeText={(text) => {setEmail(text)}}
      />
      <Input
        label={'Password'}
        labelStyle={styles.registerLabel}
        secureTextEntry={true}
        inputContainerStyle={styles.registerInputContainer}
        inputStyle={[styles.registerInput]}
        defaultValue={password}
        onChangeText={(text) => {setPassword(text)}}
      />
      <Input
        label={'Confirm password'}
        labelStyle={styles.registerLabel}
        secureTextEntry={true}
        inputContainerStyle={styles.registerInputContainer}
        inputStyle={[styles.registerInput]}
        defaultValue={cpassword}
        onChangeText={(text) => {setCpassword(text)}}
      />

      {/* === Sign up Button === */}
      <TouchableOpacity 
        style={styles.registerButton}
        onPress={() => handleRegister()}
      >
        {isLoading ?
          <ActivityIndicator size='small' color='white' /> :
          <TextBlock style={styles.registerTextButton}>
            Sign up
          </TextBlock>
        }
      </TouchableOpacity>

      {/* === Separator === */}
      <Text style={styles.registerOrText}> ──────── Or  ──────── </Text>

      {/* === Facebook button === */}
      <TouchableOpacity style={styles.registerFb}>
        <Ionicons name='logo-facebook' size={18} color="#fff" />
        <Text style={styles.registerTextFb}>Register with facebook</Text>
      </TouchableOpacity>
    </ViewBlock>
  );


  return (
    <KeyboardAvoidingView behavior='padding'
      style={styles.wrapper}
    >
      {renderHeader()}
      {renderRegister()}
    </KeyboardAvoidingView>
  );
};


const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  // Header block ----------------------------
  headerHeading: {
    fontFamily: 'inria-serif-regular',
    color: '#546a46',
    paddingLeft: 35,
    fontSize: 18,
  },

  // Register block --------------------------
  registerInputContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  registerLabel: {
    fontSize: 14, 
    color: '#ddd',
    marginTop: 16,
  },
  registerInput: {
    fontFamily: 'inria-serif-regular',
    color: '#546a46',
    fontSize: 16,
    borderBottomWidth: 0,
  },
  // ---- Register button ----
  registerButton: {
    backgroundColor: '#BFAC5C',
    padding: 15,
    width: 260,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    marginTop: 30,
    marginBottom: 25,
  },
  registerTextButton: {
    fontFamily: 'lato-regular',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  registerOrText: {
    color: '#ccc',
    fontFamily: 'inria-serif-regular',
    fontSize: 16,
  },
  // ---- Fb ----
  registerFb: {
    backgroundColor: '#108CB2',
    padding: 15,
    width: 260,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 40,
    marginTop: 20,
    marginBottom: 20,
  },
  registerTextFb: {
    fontWeight: 'bold',
    color: '#ffffff',
  }
});

import React, {useCallback, useState} from 'react';
import {BackHandler, StyleSheet, TouchableOpacity, View} from 'react-native';
import ResponsiveText from '../../common/ResponsiveText';
import InputField from '../../common/InputField';
import Button from '../../common/Button';
import Colors from '../../config/color';
import Icons from '../../config/icons';
import BaseComponent from './Component/BaseComponent';
import validators from '../../utils/validators';
import {useFocusEffect} from '@react-navigation/native';

type Props = {
  navigation: any;
};

interface iUser {
  email: string;
  password: string;
}

const Login: React.FC<Props> = ({navigation}) => {
  const [userInfo, setUserInfo] = useState<iUser>({
    email: 'asdasd@asd.com',
    password: 'asd@',
  });

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => true; // Return true to prevent default back behavior
      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, []),
  );

  const onSignupPress = () => {
    navigation.navigate('Signup');
  };

  const onForgot = () => {
    navigation.navigate('ForgetPassword');
  };

  const onLoginPress = () => {
    if (userInfo.email === '' || userInfo.password === '') {
      validators.errorPop('error', 'Error', 'Please fill all the fields');
    } else if (!validators.validateEmail(userInfo.email)) {
      validators.errorPop('error', 'Error', 'Please enter a valid email');
    } else {
      navigation.navigate('HomeStack');
    }
  };

  return (
    <BaseComponent title="Login">
      <InputField
        value={userInfo.email}
        onChangeText={text => setUserInfo({...userInfo, email: text})}
        placeholder="Email"
      />
      <InputField
        value={userInfo.password}
        onChangeText={text => setUserInfo({...userInfo, password: text})}
        placeholder="Password"
        secureTextEntry
      />
      <Button loading={false} onPress={onLoginPress} text="Continue" />
      <ResponsiveText bold style={styles.orText}>
        or
      </ResponsiveText>
      <Button
        leftIcon={Icons.Google({})}
        containerStyle={styles.socialBtn}
        text="Continue with Google"
      />
      <View style={styles.forgotContainer}>
        <ResponsiveText>Don't have an account?</ResponsiveText>
        <TouchableOpacity onPress={onSignupPress}>
          <ResponsiveText bold> Sign up</ResponsiveText>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={onForgot}>
        <ResponsiveText bold>Forgot your Password?</ResponsiveText>
      </TouchableOpacity>
    </BaseComponent>
  );
};

const styles = StyleSheet.create({
  forgotContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 10,
  },
  socialBtn: {
    backgroundColor: Colors.PrimaryText,
    borderWidth: 0,
  },
  orText: {
    textAlign: 'center',
    color: Colors.SecondaryText,
  },
});
export default Login;

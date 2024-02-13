/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {ImageBackground, Keyboard, StyleSheet, View} from 'react-native';
import Container from '../../../common/Container';
import Content from '../../../common/Content';
import ResponsiveText from '../../../common/ResponsiveText';
import Fonts from '../../../config/fonts';
import mainBack from '../../../assets/icons/covid2.jpg';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

type Props = {
  children: any;
  title: string;
  listner?: boolean;
};

const BaseComponent: React.FC<Props> = ({children, title}) => {
  const [isKeyboardVisible, setKeyboardVisible] = useState<boolean>(false);
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      },
    );
    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <Container statusBarColor="transparent" barStyle="light-content">
      <ImageBackground source={mainBack} style={styles.backImage}>
        <Content keyboardAvoidingView>
          {isKeyboardVisible ? null : (
            <View style={[styles.topContainer]}>
              <ResponsiveText style={styles.overlayMain}>
                Statistics and Information about
              </ResponsiveText>
              <ResponsiveText font={10} style={styles.overlayText}>
                Covid-19
              </ResponsiveText>
            </View>
          )}

          <View
            style={[
              styles.bottomContainer,
              {
                justifyContent: isKeyboardVisible ? undefined : 'flex-end',
                marginTop: isKeyboardVisible ? wp('10%') : 0,
              },
            ]}>
            <ResponsiveText font={7} style={styles.loginText}>
              {title}
            </ResponsiveText>
            <View style={styles.opacityView}>{children}</View>
          </View>
        </Content>
      </ImageBackground>
    </Container>
  );
};

const styles = StyleSheet.create({
  loginText: {
    fontFamily: Fonts.PlayfairDisplayBold,
    marginVertical: 15,
  },
  topContainer: {
    position: 'relative',
    flex: 1.5,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  opacityView: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: 10,
    borderColor: 'rgba(255, 255, 255, 0.9)',
    borderWidth: 1,
    padding: 20,
  },
  bottomContainer: {
    flex: 2,
    paddingHorizontal: 20,
    paddingBottom: wp('10%'),
  },
  backImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlayText: {
    fontFamily: Fonts.PlayfairDisplayBold,
    color: '#000000',
  },
  overlayMain: {
    color: '#000000',
  },
});
export default BaseComponent;

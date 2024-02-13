import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import google from '../assets/icons/google.png';
import back from '../assets/icons/back.png';
import cross from '../assets/icons/cross.png';
import skull from '../assets/icons/skull.png';
import recover from '../assets/icons/recover.png';
import patient from '../assets/icons/patient.png';
import cases from '../assets/icons/cases.png';
import refresh from '../assets/icons/refresh.png';
import ranking from '../assets/icons/ranking.png';

const Icons: any = {
  Google: (style: any) => (
    <Image source={google} style={{...styles.smallStyle, ...style}} />
  ),
  Back: (style: any) => (
    <Image source={back} style={{...styles.defaultStyle, ...style}} />
  ),
  Cross: (style: any) => (
    <Image source={cross} style={{...styles.defaultStyle, ...style}} />
  ),
  Skull: (style: any) => (
    <Image source={skull} style={{...styles.defaultStyle, ...style}} />
  ),
  Recover: (style: any) => (
    <Image source={recover} style={{...styles.defaultStyle, ...style}} />
  ),
  Patient: (style: any) => (
    <Image source={patient} style={{...styles.defaultStyle, ...style}} />
  ),
  Cases: (style: any) => (
    <Image source={cases} style={{...styles.defaultStyle, ...style}} />
  ),
  Refresh: (style: any) => (
    <Image source={refresh} style={{...styles.rightStyle, ...style}} />
  ),
  Ranking: (style: any) => (
    <Image source={ranking} style={{...styles.defaultStyle, ...style}} />
  ),
};

const styles = StyleSheet.create({
  defaultStyle: {
    height: wp('5%'),
    width: wp('5%'),
    resizeMode: 'contain',
  },
  rightStyle: {
    height: wp('4%'),
    width: wp('4%'),
    resizeMode: 'contain',
  },
  smallStyle: {
    height: wp('4%'),
    width: wp('4%'),
    resizeMode: 'contain',
  },
});

export default Icons;

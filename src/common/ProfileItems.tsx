import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {themeContext} from '../config/themeContext';
import ResponsiveText from './ResponsiveText';
import Fonts from '../config/fonts';
import Icons from '../config/icons';

type Props = {
  bodyText: string;
  email?: string;
  profile?: string;
  leftIcon?: any;
  rightIcon?: any;
  onPress?: () => void;
};

const ProfileItems: React.FC<Props> = ({
  bodyText,
  email,
  profile,
  leftIcon,
  rightIcon,
  onPress,
}) => {
  const theme = useContext(themeContext);
  return (
    <TouchableOpacity onPress={onPress} style={styles.profile}>
      <View style={styles.detail}>
        {profile ? (
          <Image source={{uri: profile}} style={styles.avatar} />
        ) : (
          leftIcon
        )}

        <View>
          <ResponsiveText
            font={profile ? 4 : 5}
            style={{
              color: theme.text,
              fontFamily: profile ? Fonts.VisbyHeavy : Fonts.VisbyBold,
            }}>
            {bodyText}
          </ResponsiveText>
          {profile ? (
            <ResponsiveText style={{color: theme.text}}>{email}</ResponsiveText>
          ) : null}
        </View>
      </View>

      {profile
        ? Icons.Right({tintColor: theme.text})
        : rightIcon
        ? rightIcon
        : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: wp('16%'),
    height: wp('16%'),
    borderRadius: wp('9%'),
    marginRight: 20,
  },
  detail: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default ProfileItems;

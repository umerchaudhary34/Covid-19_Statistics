import React, { useContext, useEffect } from 'react';
import Container from '../../common/Container';
import ResponsiveText from '../../common/ResponsiveText';
import Fonts from '../../config/fonts';
import { themeContext } from '../../config/themeContext';
import { getItem } from '../../helpers/storage';

type Props = {
  navigation: any;
};

const Splash: React.FC<Props> = ({ navigation }) => {
  const theme = useContext(themeContext);

  useEffect(() => {
    setTimeout(async () => {
      // const getToken = await getItem('token');
      // console.log('token', getToken);

      // getToken
      //   ? navigation.navigate('HomeStack')
      //   : navigation.navigate('GetStarted');
      navigation.navigate('Authentication');
    }, 5000);
  }, [navigation]);

  return (
    <Container style={[styles.container, { backgroundColor: theme.background }]}>
      <ResponsiveText
        font={8}
        style={{ color: theme.text, fontFamily: Fonts.PlayfairDisplayBold }}>
        Covid-19
      </ResponsiveText>
    </Container>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  splashText: {},
};

export default Splash;

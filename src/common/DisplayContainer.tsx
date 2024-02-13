import React, {useContext} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import ResponsiveText from './ResponsiveText';
import {themeContext} from '../config/themeContext';

type Props = {
  Icon: any;
  HeaderText: string;
  TotalCount: number | string;
  onItemPress?: Function;
};

const DisplayContainer: React.FC<Props> = ({
  Icon,
  HeaderText,
  TotalCount,
  onItemPress,
}) => {
  const theme = useContext(themeContext);
  return (
    <TouchableOpacity
      onPress={onItemPress}
      style={{...styles.container, backgroundColor: theme.displayBackground}}>
      <View style={styles.headView}>
        {Icon}
        <ResponsiveText style={{color: theme.text, ...styles.textStyle}}>
          {HeaderText}
        </ResponsiveText>
      </View>
      <ResponsiveText
        font={(TotalCount?.toString().length ?? 0) > 11 ? 5 : 6}
        bold
        style={{color: theme.text}}>
        {TotalCount}
      </ResponsiveText>
    </TouchableOpacity>
  );
};

export default DisplayContainer;

const styles = StyleSheet.create({
  textStyle: {
    marginLeft: 5,
  },
  headView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 5,
  },
  container: {
    // justifyContent: 'center',
    borderRadius: 10,
    padding: 20,
    flex: 1,
    maxHeight: 100,
  },
});

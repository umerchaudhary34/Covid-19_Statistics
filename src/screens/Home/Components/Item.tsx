import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import ResponsiveText from '../../../common/ResponsiveText';
import {themeContext} from '../../../config/themeContext';

interface ItemProps {
  title: string;
  cases: string;
}

const Item: React.FC<ItemProps> = ({title, cases}) => {
  const theme = useContext(themeContext);
  return (
    <View style={{...styles.item, backgroundColor: theme.displayBackground}}>
      <ResponsiveText style={{color: theme.text}}>{title}</ResponsiveText>
      <ResponsiveText style={{color: theme.text}}>{cases}</ResponsiveText>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default Item;

import React, {useCallback, useContext} from 'react';
import {useState} from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import Colors from '../config/color';
import ResponsiveText from './ResponsiveText';
import InputField from './InputField';
import {themeContext} from '../config/themeContext';
import Icons from '../config/icons';
import {iGlobalStat} from '../utils/constants';

type Props = {
  placeholder: string;
  items: Array<any>;
  zIndex: number;
  selectedCountry: Function;
  onCloseSearch: Function;
};

const Dropdown: React.FC<Props> = props => {
  const theme = useContext(themeContext);
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');
  const [items, setItems] = useState<Array<iGlobalStat>>(props?.items || []);

  const debouncedSearch = useCallback(
    (text: string) => {
      const filtered = props.items.filter((item: any) => {
        return item.name.toLowerCase().includes(text.toLowerCase());
      });
      setItems(filtered);
    },
    [props.items],
  );

  const handleChange = (text: string) => {
    setOpen(true);
    setValue(text);
    debouncedSearch(text);
  };

  return (
    <View style={{...styles.container, ...{zIndex: props.zIndex}}}>
      <InputField
        value={value}
        onChangeText={handleChange}
        placeholder="Search Country"
        rightIcon={value?.length ? Icons.Cross({}) : null}
        onRightPress={() => {
          setOpen(false);
          setValue('');
          props.onCloseSearch();
        }}
      />
      {open ? (
        <View
          style={{
            ...styles.listContainer,
            backgroundColor: theme.inputBackground,
          }}>
          <FlatList
            data={items}
            keyExtractor={(item: any) => item.Country_text}
            renderItem={({item}: any) => (
              <TouchableOpacity
                style={styles.containerSt}
                onPress={() => {
                  setValue(item.name);
                  setOpen(false);
                  props.selectedCountry(item.name);
                }}>
                <ResponsiveText style={{...styles.leftText, color: theme.text}}>
                  {item.name}
                </ResponsiveText>
              </TouchableOpacity>
            )}
          />
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    position: 'relative',
  },
  listContainer: {
    height: 200,
    position: 'absolute',
    width: '100%',
    top: 52,
    zIndex: 100,
    borderBottomEndRadius: 10,
  },
  containerSt: {
    paddingVertical: 5,
    borderBottomWidth: 1,
  },
  dropdown: {
    backgroundColor: Colors.InputBackground,
    borderWidth: 0,
    borderRadius: 5,
  },
  leftText: {
    paddingHorizontal: 5,
  },
  leftTextStyle: {
    marginVertical: 5,
  },
});

export default Dropdown;

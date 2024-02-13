/* eslint-disable react-native/no-inline-styles */
import React, {memo, useContext, useState} from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import ResponsiveText from './ResponsiveText';
import {themeContext} from '../config/themeContext';
import {iGlobalStat} from '../utils/constants';

interface Props {
  dataList: Array<Omit<iGlobalStat, 'Active Cases_text' | 'Last Update'>>;
}

const TabSection: React.FC<Props> = memo(({dataList}) => {
  const theme = useContext(themeContext);
  const [activeTab, setActiveTab] = useState('cases');

  const onTabPress = (tab: string) => {
    setActiveTab(tab);
  };
  const getCaseString = () => {
    if (activeTab === 'cases') {
      return 'Total Cases_text';
    } else if (activeTab === 'deaths') {
      return 'Total Deaths_text';
    }
    return 'Total Recovered_text';
  };
  return (
    <View style={styles.container}>
      <View style={styles.tabTop}>
        <TouchableOpacity
          onPress={() => onTabPress('cases')}
          style={{
            borderBottomWidth: activeTab === 'cases' ? 2 : 0,
            ...styles.tabItem,
            borderBottomColor: theme.text,
          }}>
          <ResponsiveText
            font={5}
            style={{
              color: theme.text,
            }}>
            Cases
          </ResponsiveText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onTabPress('deaths')}
          style={{
            borderBottomWidth: activeTab === 'deaths' ? 2 : 0,
            ...styles.tabItem,
            borderBottomColor: theme.text,
          }}>
          <ResponsiveText font={5} style={{color: theme.text}}>
            Deaths
          </ResponsiveText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onTabPress('recovered')}
          style={{
            borderBottomWidth: activeTab === 'recovered' ? 2 : 0,
            ...styles.tabItem,
            borderBottomColor: theme.text,
          }}>
          <ResponsiveText font={5} style={{color: theme.text}}>
            Recovered
          </ResponsiveText>
        </TouchableOpacity>
      </View>
      <View style={styles.listStyle}>
        <FlatList
          data={dataList}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  ...styles.itemList,
                  borderBottomColor: theme.text,
                }}>
                <ResponsiveText
                  font={4}
                  style={{
                    color: theme.text,
                  }}>
                  {item.Country_text}
                </ResponsiveText>
                <ResponsiveText
                  font={4}
                  style={{
                    color: theme.text,
                  }}>
                  {item[getCaseString()]}
                </ResponsiveText>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  itemList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
  },
  listStyle: {
    flex: 1,
  },
  tabItem: {
    paddingVertical: 10,
  },
  tabTop: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    borderBottomColor: '#533C3D',
    borderBottomWidth: 1,
  },
});

export default TabSection;

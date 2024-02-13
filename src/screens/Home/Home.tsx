import React, {useContext, useEffect, useState} from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import AppHeader from '../../common/AppHeader';
import Container from '../../common/Container';
import Icons from '../../config/icons';
import {themeContext} from '../../config/themeContext';
import ResponsiveText from '../../common/ResponsiveText';
import {useQuery} from '@tanstack/react-query';
import {getAllCases} from '../../services/api';
import DisplayContainer from '../../common/DisplayContainer';
import useCasesStore from './store/useCasesStore';
import Loading from '../../common/Loading';
import Item from './Components/Item';
import {iGlobalStat} from '../../utils/constants';

type Props = {
  navigation: any;
};

const Home: React.FC<Props> = ({navigation}) => {
  const theme = useContext(themeContext);
  const storeCases = useCasesStore((state: any) => state.globalCases);

  const [worldStat, setWorldStat] = useState<iGlobalStat>({});
  const [globalStat, setGlobalStat] = useState<Array<iGlobalStat>>([]);

  const {data, isLoading, refetch} = useQuery({
    queryKey: ['user'],
    queryFn: getAllCases,
  });

  useEffect(() => {
    if (data) {
      setWorldStat(data[0]);
      data.shift();
      setGlobalStat(data);
      storeCases(data);
    }
  }, [data]);

  const onItemPress = () => {
    navigation.navigate('Search');
  };

  const refreshCases = () => {
    refetch();
  };

  return (
    <Container>
      {isLoading ? <Loading /> : null}
      <AppHeader
        title="COVID-19"
        right={Icons.Ranking({tintColor: theme.text})}
        rightPress={onItemPress}
      />
      <View style={styles.displayView}>
        <View style={styles.topView}>
          <DisplayContainer
            Icon={Icons.Cases({tintColor: theme.text})}
            HeaderText="Cases"
            TotalCount={worldStat['Total Cases_text'] || 'N/A'}
            onItemPress={onItemPress}
          />
          <DisplayContainer
            Icon={Icons.Skull({tintColor: theme.text})}
            HeaderText="Deaths"
            TotalCount={worldStat['Total Deaths_text'] || 'N/A'}
            onItemPress={onItemPress}
          />
        </View>
        <DisplayContainer
          Icon={Icons.Recover({tintColor: theme.text})}
          HeaderText="Recovered"
          TotalCount={worldStat['Total Recovered_text'] || 'N/A'}
          onItemPress={onItemPress}
        />
        <View style={styles.refreshView}>
          <ResponsiveText font={4} bold style={{color: theme.text}}>
            Last Updated : {worldStat['Last Update'] || 'N/A'}
          </ResponsiveText>
          <TouchableOpacity onPress={refreshCases}>
            {Icons.Refresh({tintColor: theme.text, marginLeft: 10})}
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <ResponsiveText font={6} bold style={{color: theme.text}}>
          Ranked Global Cases
        </ResponsiveText>
        <FlatList
          data={globalStat}
          renderItem={({item}) => (
            <Item title={item.Country_text} cases={item['Total Cases_text']} />
          )}
          removeClippedSubviews={true}
          keyExtractor={item => item.id}
        />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  topView: {
    gap: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  refreshView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bottomContainer: {
    flex: 1,
  },
  displayView: {
    flex: 0.5,
    gap: 15,
  },
});

export default Home;

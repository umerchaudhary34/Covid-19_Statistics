import React, {useContext, useEffect, useState} from 'react';
import TabSection from '../../common/TabSection';
import Container from '../../common/Container';
import AppHeader from '../../common/AppHeader';
import {iError, iGlobalStat} from '../../utils/constants';
import {casesByCountry, getAllCountries} from '../../services/api';
import {useMutation, useQuery} from '@tanstack/react-query';
import Dropdown from '../../common/Dropdown';
import useCasesStore from './store/useCasesStore';
import Icons from '../../config/icons';
import {themeContext} from '../../config/themeContext';
import Loading from '../../common/Loading';
import validators from '../../utils/validators';

type Props = {
  navigation: any;
  dataList: Array<Omit<iGlobalStat, 'Active Cases_text' | 'Last Update'>>;
};

const Search: React.FC<Props> = ({navigation}) => {
  const theme = useContext(themeContext);
  const storedCases = useCasesStore((state: any) => state.allCases);

  useEffect(() => {
    if (storedCases) {
      setDataList(storedCases);
    }
  }, [storedCases]);

  const [dataList, setDataList] = useState<
    Array<Omit<iGlobalStat, 'Active Cases_text' | 'Last Update'>>
  >([]);
  const {data, isLoading: cloading} = useQuery({
    queryKey: ['countries'],
    queryFn: getAllCountries,
  });

  const {mutate, isLoading} = useMutation({
    mutationFn: casesByCountry,
    onSuccess: async e => {
      setDataList([e]);
    },
    onError: (error: iError) => {
      const {response} = error;
      validators.errorPop('error', 'Error', response);
    },
  });

  const SelectedCountry = (country: string) => {
    mutate(country);
  };

  return (
    <Container>
      {isLoading || cloading ? <Loading /> : null}
      <AppHeader
        title="Search"
        left={Icons.Back({
          tintColor: theme.text,
        })}
        leftPress={() => navigation.goBack()}
      />
      <Dropdown
        placeholder="Select Country"
        items={data}
        zIndex={100}
        selectedCountry={SelectedCountry}
        onCloseSearch={() => setDataList(storedCases)}
      />
      <TabSection dataList={dataList} />
    </Container>
  );
};

export default Search;

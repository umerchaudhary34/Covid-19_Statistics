import AsyncStorage from '@react-native-async-storage/async-storage';

export const getItem = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
    return value;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const setItem = async (key: string, value: any): Promise<void> => {
  try {
    const jsonValue = key === 'token' ? value : JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (error) {
    console.log(error);
  }
};

export const clearItem = async (): Promise<void> => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.log(error);
  }
};

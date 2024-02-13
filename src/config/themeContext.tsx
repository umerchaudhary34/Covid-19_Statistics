import {createContext} from 'react';
export type GlobalContent = {
  background: string;
  text: string;
  theme: string;
  permissionBackground: string;
  modalBackground: string;
  inputBackground: string;
  displayBackground: string;
  inputText: string;
};

export const themeContext = createContext<GlobalContent>({
  background: '',
  text: '',
  theme: '',
  permissionBackground: '',
  modalBackground: '',
  inputBackground: '',
  displayBackground: '',
  inputText: '',
});

import React from 'react';
import {ActivityIndicator, Modal, StyleSheet, View} from 'react-native';

const Loading = () => {
  return (
    <Modal animationType="slide" transparent={true} visible={true}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'rgba(255,255,255,0.7)',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    elevation: 5,
  },
});

export default Loading;

import React from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {useCamera} from 'react-native-camera-hooks';
import RNFS from 'react-native-fs';
import {request, PERMISSIONS} from 'react-native-permissions';

interface CameraItemProps {}

const CameraItem: React.FC<CameraItemProps> = () => {
  const [{cameraRef}, {takePicture}] = useCamera();

  const requestPermission = async () => {
    const result = await request(PERMISSIONS.ANDROID.CAMERA);
    const storagePermission = await request(
      PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
    );

    if (result === 'granted' && storagePermission === 'granted') {
      handleImage();
    } else {
      console.warn('permission denied');
    }
  };
  const handleImage = async () => {
    try {
      const data = await takePicture();
      const filePath = data.uri;

      const isStorageAvailable = await RNFS.isExternalStorageAvailable();
      if (!isStorageAvailable) {
        console.error('External storage is not available');
        return;
      }
      const externalStoragePath = RNFS.ExternalStorageDirectoryPath;
      const newFilePath = `${externalStoragePath}/NewFile.jpg`;

      const isDirectoryExists = await RNFS.exists(externalStoragePath);
      if (!isDirectoryExists) {
        console.error('External storage directory does not exist');
        return;
      }

      await RNFS.moveFile(filePath, newFilePath);
      console.log('File moved successfully:', newFilePath);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.content}>
      <RNCamera
        ref={cameraRef}
        style={styles.camera}
        type={RNCamera.Constants.Type.back}
      />
      <Pressable onPress={requestPermission} style={styles.button} />
    </View>
  );
};

CameraItem.propTypes = {};

export default CameraItem;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    position: 'relative',
  },
  camera: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 100,
    elevation: 3,
    backgroundColor: 'red',
    position: 'absolute',
    top: 700,
    left: '38%',
    width: 100,
    height: 100,
    borderWidth: 3,
    borderColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

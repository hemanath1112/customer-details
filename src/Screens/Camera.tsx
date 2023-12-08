/* eslint-disable prettier/prettier */
import React, { useRef } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  Camera,
  useCameraDevice,
  useCameraFormat,
} from 'react-native-vision-camera';
import RNFS from 'react-native-fs';
import { request, PERMISSIONS } from 'react-native-permissions';

interface CameraPageProps {}

const CameraPage: React.FC<CameraPageProps> = () => {
  const device = useCameraDevice('back');
  const formate = useCameraFormat(device, [
    { photoHdr: true },
    { videoHdr: true },
  ]);
  const camera = useRef<Camera>(null);

  const requestPermission = async () => {
    const result = await request(PERMISSIONS.ANDROID.CAMERA);
    const storagePermission = await request(
      PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE
    );
    console.log('Camera permission:', result);
    console.log('Storage permission:', storagePermission);

    if (result === 'granted' && storagePermission === 'granted') {
      takePicture();
    } else {
      console.warn('Permission denied');
    }
  };

  if (device == null) {
    return <ActivityIndicator />;
  }

  const takePicture = async () => {
    if (camera.current) {
      const photo = await camera.current.takePhoto();
      console.log('Photo path:', photo.path);
      saveImage(photo.path);
    }
  };

  const saveImage = async (imageData: string) => {
    const downloadDirectory = RNFS.DownloadDirectoryPath;
    const newFolder = `${downloadDirectory}/TestProject`;
    try {
      if (!(await RNFS.exists(newFolder))) {
        await RNFS.mkdir(newFolder);
      }
      const imagePath = `${newFolder}/Download_${new Date().getTime()}.jpeg`;
      await RNFS.moveFile(imageData, imagePath);
      console.log('Image saved at:', imagePath);
    } catch (error) {
      console.error('Error saving image:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        ref={camera}
        photo={true}
        format={formate}
      />
      <TouchableOpacity style={styles.box} onPress={requestPermission} />
    </View>
  );
};

export default CameraPage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    width: 70,
    height: 70,
    backgroundColor: 'red',
    borderRadius: 50,
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
    borderWidth: 3,
    borderColor: 'white',
  },
});

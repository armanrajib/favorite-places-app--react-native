import { useState } from "react";
import { Alert, Image, StyleSheet, Text, View } from "react-native";
import {
  launchCameraAsync,
  PermissionStatus,
  useCameraPermissions,
} from "expo-image-picker";

import { colors } from "../../constants/colors";
import OutlinedButton from "../ui/OutlinedButton";

function ImagePicker() {
  const [pickedImage, setPickedImage] = useState();

  const [cameraPermissionInformation, requestPermission] =
    useCameraPermissions();

  async function verifyPermission() {
    if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }

    if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Permission Denied",
        "You need to enable camera permissions to use this feature.",
        [{ text: "Okay" }]
      );
    }

    return cameraPermissionInformation.status === PermissionStatus.GRANTED;
  }

  async function handleTakeImage() {
    const hasPermission = await verifyPermission();

    if (!hasPermission) return;

    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });

    console.log(image);
    setPickedImage(image.assets[0].uri);
  }

  return (
    <View>
      <View style={styles.imagePreview}>
        {pickedImage ? (
          <Image source={{ uri: pickedImage }} style={styles.image} />
        ) : (
          <Text>No image taken yet!</Text>
        )}
      </View>
      <OutlinedButton icon="camera" onPress={handleTakeImage}>
        Take Image
      </OutlinedButton>
    </View>
  );
}

const styles = StyleSheet.create({
  imagePreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary100,
    borderRadius: 4,
  },
  image: {
    width: "100%",
    height: 200,
  },
});

export default ImagePicker;

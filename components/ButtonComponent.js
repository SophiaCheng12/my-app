import { React, useState, useEffect } from "react";
import { Button, VStack, Center, NativeBaseProvider } from "native-base";
import { DeviceEventEmitter } from "react-native";

const ButtonComponent = () => {
  const [drama, setDrama] = useState("");
  useEffect(() => {
    DeviceEventEmitter.addListener("sendService", (events) => {
      console.log("events", events);
      setDrama(events);
    });
  }, []);

  return (
    <VStack space={4} alignItems="center">
      {["sm"].map((size) => (
        <Button key={size} size={size} width="200px">
          CLICK
        </Button>
      ))}
    </VStack>
  );
};

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <ButtonComponent />
      </Center>
    </NativeBaseProvider>
  );
};

import React from "react";
import {
  Select,
  Box,
  CheckIcon,
  Center,
  NativeBaseProvider,
} from "native-base";
import Card from "./Card";
import ButtonComponent from "./ButtonComponent";
import { DeviceEventEmitter } from "react-native";

const SelectComponent = () => {
  const [service, setService] = React.useState("");

  DeviceEventEmitter.emit("sendService", service);
  return (
    <>
      <Center>
        <Box maxW="300">
          <Select
            color="#f8f9fa"
            selectedValue={service}
            minWidth="200"
            width="300px"
            height="50px"
            accessibilityLabel="Choose Service"
            placeholder="Choose Service"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="5" />,
            }}
            mt={1}
            onValueChange={(itemValue) => setService(itemValue)}
          >
            <Select.Item label="日劇" value="Japan" />
            <Select.Item label="陸劇" value="China" />
            <Select.Item label="美劇" value="America" />
          </Select>
        </Box>
      </Center>
    </>
  );
};

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <SelectComponent />
      </Center>
    </NativeBaseProvider>
  );
};

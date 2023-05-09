import { React, useEffect, useState } from "react";
import axios from "axios";

import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Text,
  Center,
  HStack,
  Stack,
  NativeBaseProvider,
} from "native-base";

const Card = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getInfo();
  }, []);
  const getInfo = async () => {
    try {
      const response = await axios.get(
        "https://mocki.io/v1/c0f2d2da-b612-439a-8280-35329fa18469"
      );
      // console.log("response", response.data);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return data.map((item) => {
    return (
      <Box
        marginTop="5px"
        marginBottom="5px"
        alignItems="center"
        key={item.name}
      >
        <Box
          maxW="80"
          rounded="lg"
          overflow="hidden"
          borderColor="coolGray.200"
          borderWidth="1"
          width="300px"
          _dark={{
            borderColor: "coolGray.600",
            backgroundColor: "gray.700",
          }}
          _web={{
            shadow: 2,
            borderWidth: 0,
          }}
          _light={{
            backgroundColor: "gray.50",
          }}
        >
          <Box>
            <AspectRatio w="100%" ratio={16 / 9}>
              <Image
                source={{
                  uri: `${item.image}`,
                }}
                alt="image"
              />
            </AspectRatio>
          </Box>
          <Stack p="4" space={3}>
            <Stack space={2}>
              <Heading size="md" ml="-1">
                {item.name}
              </Heading>
            </Stack>
            <Text fontWeight="400">{item.description}</Text>
          </Stack>
        </Box>
      </Box>
    );
  });
};

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Card />
      </Center>
    </NativeBaseProvider>
  );
};

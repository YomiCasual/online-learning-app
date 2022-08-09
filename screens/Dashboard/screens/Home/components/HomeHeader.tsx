import { images } from "../../../../../constants";
import { Box, Button, Image, Text, VStack } from "native-base";
import React from "react";
import { ImageBackground, TouchableOpacity } from "react-native";
import { CustomButton } from "../../../../../reusables";

const HomeHeader = () => {
  return (
    <Box px={4} my={2}>
      <ImageBackground
        source={images.featured_bg_image}
        resizeMode="cover"
        style={{
          paddingHorizontal: 15,
          paddingVertical: 20,
        }}
        imageStyle={{
          borderRadius: 10,
        }}
      >
        <VStack space={1} mb={4}>
          <Text color="app.white" textTransform={"uppercase"} fontSize={20}>
            How To
          </Text>
          <Text color={"white"} fontWeight="bold" fontSize={18}>
            Make your brand more visible with our checklist
          </Text>
          <Text color={"app.gray10"} fontSize={12}>
            By Scott Harris
          </Text>
        </VStack>
        <VStack>
          <Image
            source={images.start_learning}
            width="full"
            height="120px"
            resizeMode="contain"
            alt="start learning"
          />
          <CustomButton text="Start Learning" />
        </VStack>
      </ImageBackground>
    </Box>
  );
};

export default HomeHeader;

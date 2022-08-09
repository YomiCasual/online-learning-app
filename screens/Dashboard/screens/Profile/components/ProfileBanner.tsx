import React from "react";
import { Box, HStack, Image, Text, VStack } from "native-base";
import { COLORS, icons } from "../../../../../constants";
import { TouchableOpacity } from "react-native";
import { CustomButton } from "../../../../../reusables";

const ProfileBanner = () => {
  return (
    <HStack
      //   alignItems={"center"}
      rounded="xl"
      shadow={"6"}
      px={4}
      py={4}
      bgColor="app.primary3"
      space={3}
    >
      <TouchableOpacity>
        <Box display="flex" alignItems={"center"}>
          <Box
            width="90px"
            height="90px"
            rounded="full"
            borderWidth={2}
            borderColor="white"
            bgColor="app.gray30"
          />
          <Box
            width="35px"
            height="35px"
            display="flex"
            ml="2"
            rounded={"full"}
            mt="-20px"
            justifyContent="center"
            alignItems="center"
            bgColor="app.primary"
          >
            <Image
              source={icons.camera}
              width="15px"
              height="15px"
              alt="camera"
              resizeMode="contain"
              tintColor="white"
            />
          </Box>
        </Box>
      </TouchableOpacity>
      <VStack flex="1" space={5}>
        <VStack space={-1}>
          <Text color="white" fontSize="lg" fontWeight="bold">
            Onisade Abiodun
          </Text>
          <Text color="white">Full Stack Developer</Text>
        </VStack>
        <VStack>
          <Box
            bgColor="white"
            width="full"
            height={"9px"}
            rounded="xl"
            position="relative"
          >
            <Box
              bgColor="app.primary"
              width="58%"
              height={"9px"}
              rounded="xl"
            ></Box>
          </Box>
          <HStack>
            <Text flex="1" color="white">
              Overall Progress
            </Text>
            <Text color="white">58%</Text>
          </HStack>
        </VStack>
        <CustomButton
          containerStyle={{
            paddingVertical: 8,
            paddingHorizontal: 18,
          }}
          textStyle={{
            color: COLORS.primary,
          }}
          text="+ Become Member"
        />
      </VStack>
    </HStack>
  );
};

export default ProfileBanner;

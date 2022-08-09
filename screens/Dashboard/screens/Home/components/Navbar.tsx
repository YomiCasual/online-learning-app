import { icons } from "../../../../../constants";
import { Box, HStack, Image, Text, VStack } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";

const Navbar = () => {
  return (
    <HStack px={4} py={4} justifyContent="space-between" alignItems={"center"}>
      <VStack>
        <Text fontWeight="bold" fontSize={"lg"}>
          Hello, Yomi Onisade
        </Text>
        <Text color={"app.gray40"} fontSize="xs">
          Thursday, 9th Sept 2021
        </Text>
      </VStack>
      <TouchableOpacity>
        <Box justifyContent="center" height="40px" alignItems={"center"}>
          <Image
            source={icons.notification}
            width="20px"
            height="20px"
            resizeMode="contain"
            alt="notification"
          />
        </Box>
      </TouchableOpacity>
    </HStack>
  );
};

export default Navbar;

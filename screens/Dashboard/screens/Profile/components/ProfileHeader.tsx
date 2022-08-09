import React from "react";
import { HStack, Image, Text } from "native-base";
import { icons, images } from "../../../../../constants";
import { TouchableOpacity } from "react-native";

const ProfileHeader = () => {
  return (
    <HStack alignItems={"center"}>
      <Text flex="1" fontSize={"xl"} fontWeight="bold">
        Profile
      </Text>
      <TouchableOpacity>
        <Image
          width={"25px"}
          height={"25px"}
          source={icons.sun}
          resizeMode="contain"
          alt="sun"
        />
      </TouchableOpacity>
    </HStack>
  );
};

export default ProfileHeader;

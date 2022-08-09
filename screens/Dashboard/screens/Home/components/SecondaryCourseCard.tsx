import { ImageBackground, TouchableOpacity } from "react-native";
import React from "react";
import { Box, HStack, Image, Text, VStack } from "native-base";
import { IconLabel } from "../../../../../reusables";
import { icons } from "../../../../../constants";

const SecondaryCourseCard = ({ item }: { item: Record<string, any> }) => {
  return (
    <HStack space={3}>
      <ImageBackground
        source={item.thumbnail}
        style={{
          width: 150,
          height: 150,
        }}
        imageStyle={{
          borderRadius: 10,
        }}
      >
        <Box
          height="30px"
          rounded="lg"
          width={"30px"}
          position={"absolute"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          right="2"
          top="2"
          backgroundColor={"app.gray10"}
          shadow={2}
        >
          <Image
            source={icons.heart_off}
            width={"15px"}
            height="15px"
            alt="heart"
            resizeMode="contain"
            //   tintColor={item.is_favourite ? "red" : "app.gray30"}
          />
        </Box>
      </ImageBackground>
      <TouchableOpacity>
        <VStack space={2} flexShrink={1}>
          <Text fontSize={"lg"} fontWeight={"bold"}>
            {item.title}
          </Text>
          <HStack alignItems={"center"} space={2}>
            <Text color={"app.gray40"} fontSize={"sm"}>
              By {item.instructor}
            </Text>
            <IconLabel
              icon={icons.time}
              label={item.duration}
              imageStyle={{
                width: 10,
                height: 10,
              }}
              textStyle={{
                fontSize: 12,
              }}
            />
          </HStack>
          <HStack alignItems={"center"} space={2}>
            <Text color={"app.primary"} fontSize={"lg"} fontWeight="medium">
              ${item.price}.00
            </Text>
            <IconLabel
              icon={icons.star}
              label={item.ratings.toString()}
              imageStyle={{
                width: 16,
                height: 16,
                tintColor: "orange",
              }}
              textStyle={{
                fontSize: 16,
                fontWeight: "bold",
                color: "black",
              }}
            />
          </HStack>
        </VStack>
      </TouchableOpacity>
    </HStack>
  );
};

export default SecondaryCourseCard;

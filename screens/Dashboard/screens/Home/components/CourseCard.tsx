import { Box, HStack, Image, ScrollView, Text, VStack } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";
import { dummyData, icons } from "../../../../../constants";

type CourseCardProps = {
  isLastItem: boolean;
  item: typeof dummyData.courses_list_1[0];
};

const CourseCard = ({ isLastItem, item }: CourseCardProps) => {
  return (
    <TouchableOpacity>
      <VStack
        ml={4}
        mr={isLastItem ? 4 : 0}
        space={3}
        width="270px"
        // borderWidth="1"
        alignItems={"center"}
      >
        <Image
          source={item.thumbnail}
          height="140px"
          width="full"
          resizeMode="cover"
          alt={item.title}
          rounded="xl"
        />
        <Box justifyContent="center">
          <HStack space={3} maxWidth={"240px"}>
            <Box
              height={"40px"}
              width={"40px"}
              backgroundColor="app.primary"
              borderRadius={"full"}
              justifyContent="center"
              alignItems="center"
            >
              <Image
                alt="play-button"
                source={icons.play}
                width="18px"
                height="18px"
                ml={1}
                resizeMode="contain"
              />
            </Box>
            <VStack flexShrink={1}>
              <Text fontWeight={"bold"} fontSize="md" lineHeight={"sm"}>
                {item.title}
              </Text>
              <HStack alignItems={"center"} space={1}>
                <Image
                  alt="time-button"
                  source={icons.time}
                  width="14px"
                  height="14px"
                  resizeMode="contain"
                  tintColor="app.gray30"
                />
                <Text fontSize="sm" color={"app.gray30"}>
                  {item.duration}
                </Text>
              </HStack>
            </VStack>
          </HStack>
        </Box>
      </VStack>
    </TouchableOpacity>
  );
};

export default CourseCard;

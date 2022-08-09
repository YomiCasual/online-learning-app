import React, { useEffect, useRef, useState } from "react";
import { Box, FlatList, HStack, Image, Text, VStack } from "native-base";
import { COLORS, icons } from "../../../../../constants";
import { Animated, ImageSourcePropType, TouchableOpacity } from "react-native";
import { PROFILE_DETAILS, USER_DETAILS } from "../constants";

export const SectionContainer = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <VStack
      //   alignItems={"center"}
      rounded="2xl"
      px={4}
      py={5}
      borderWidth={1}
      bgColor="white"
      borderColor={"app.gray10"}
      space={3}
    >
      {children}
    </VStack>
  );
};

const SectionCard = ({
  icon,
  title,
  value,
  isRadio = false,
  isBorderd = true,
}: {
  icon: ImageSourcePropType;
  title?: string;
  value: string;
  isRadio?: boolean;
  isBorderd?: boolean;
}) => {
  const [isActive, setIsActive] = useState(false);
  const radioAnimated = useRef(new Animated.Value(0)).current;

  const lineColor = radioAnimated.interpolate({
    inputRange: [0, 17],
    outputRange: [COLORS.gray20, COLORS.primary],
  });

  useEffect(() => {
    if (isActive) {
      Animated.timing(radioAnimated, {
        toValue: 17,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(radioAnimated, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  }, [isActive]);

  return (
    <TouchableOpacity>
      <HStack
        space={5}
        alignItems="center"
        pb={isBorderd ? 4 : 0}
        borderBottomWidth={isBorderd ? "1" : 0}
        borderBottomColor="app.gray10"
      >
        <Image
          source={icon}
          alt="user-icon"
          tintColor={"app.primary"}
          width="20px"
          height="20px"
          resizeMode="contain"
        />
        <VStack flex="1" space={-1}>
          {title && <Text color="app.gray40">{title}</Text>}
          <Text fontSize="lg" fontWeight="bold">
            {value}
          </Text>
        </VStack>
        {!isRadio && (
          <Image
            source={icons.right_arrow}
            tintColor={"app.gray30"}
            alt="user-icon"
            width="15px"
            height="15px"
            resizeMode="contain"
          />
        )}
        {isRadio && (
          <TouchableOpacity onPress={() => setIsActive(!isActive)}>
            <Box
              width="35px"
              position={"relative"}
              display="flex"
              justifyContent={"center"}
            >
              <Animated.View
                style={{
                  height: 5,
                  width: "100%",
                  borderRadius: 8,
                  backgroundColor: lineColor,
                }}
              ></Animated.View>
              <Animated.View
                style={[
                  {
                    position: "absolute",
                    height: 18,
                    width: 18,
                    left: radioAnimated,
                    borderRadius: 999,
                    backgroundColor: "white",
                    borderColor: lineColor,
                    borderWidth: 2,
                  },
                ]}
              ></Animated.View>
            </Box>
          </TouchableOpacity>
        )}
      </HStack>
    </TouchableOpacity>
  );
};

const ProfileSection = () => {
  return (
    <VStack space={4}>
      <SectionContainer>
        <FlatList
          data={USER_DETAILS}
          keyExtractor={(item) => item.value}
          renderItem={({ item, index }) => {
            const isFirstItem = index === 0;
            const isLastItem = index === USER_DETAILS.length - 1;

            return (
              <Box pt={!isFirstItem ? 4 : 0}>
                <SectionCard {...item} isBorderd={!isLastItem} />
              </Box>
            );
          }}
        />
      </SectionContainer>
      <SectionContainer>
        <FlatList
          data={PROFILE_DETAILS}
          keyExtractor={(item) => item.value}
          renderItem={({ item, index }) => {
            const isFirstItem = index === 0;
            const isLastItem = index === USER_DETAILS.length - 1;

            return (
              <Box pt={!isFirstItem ? 4 : 0}>
                <SectionCard {...item} isBorderd={!isLastItem} />
              </Box>
            );
          }}
        />
      </SectionContainer>
    </VStack>
  );
};

export default ProfileSection;

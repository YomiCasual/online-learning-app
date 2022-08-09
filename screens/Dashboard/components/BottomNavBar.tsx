import { TouchableOpacity, Animated } from "react-native";
import React from "react";
import { HStack, Image, VStack, Text } from "native-base";
import TabIndicator from "./TabIndicator";
import { MAPPED_COMPONENTS_TO_ARRAY } from "../../../utils";

const BottomNavBar = ({
  containerRef,
  measureLayout,
  onBottomTabPress,
  scrollX,
}: {
  containerRef: React.MutableRefObject<undefined>;
  measureLayout: any;
  onBottomTabPress: (bottomTabIndex: any) => void;
  scrollX: Animated.Value;
}) => {
  return (
    <HStack
      ref={containerRef}
      mb={2}
      mx={4}
      rounded="xl"
      shadow={"6"}
      justifyContent="space-between"
      bgColor="app.primary3"
      position={"relative"}
    >
      {measureLayout.length > 0 && (
        <TabIndicator measureLayout={measureLayout} scrollX={scrollX} />
      )}

      {MAPPED_COMPONENTS_TO_ARRAY.map((comp, index) => (
        <TouchableOpacity
          key={comp.name}
          ref={comp.ref}
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            paddingVertical: 15,
            paddingHorizontal: 15,
          }}
          onPress={() => onBottomTabPress(index)}
        >
          <VStack justifyContent={"center"} alignItems="center" space="1">
            <Image
              source={comp.icon}
              width={"25px"}
              height={"25px"}
              resizeMode="contain"
              alt="bottom-icon"
              tintColor="white"
            />
            <Text color={"white"}>{comp.name}</Text>
          </VStack>
        </TouchableOpacity>
      ))}
    </HStack>
  );
};

export default BottomNavBar;

import React from "react";
import { HStack, Image, Text } from "native-base";
import { TouchableOpacity } from "react-native";
import { CustomButton } from "./CustomButton";
import { COLORS } from "../constants";

export const TitleHeader = ({
  title,
  iconText = "See All",
  titleStyle = "xl",
}: {
  title: string;
  iconText?: string | null;
  titleStyle?: "xl" | "lg" | "md" | "sm" | "xs" | "2xl";
}) => {
  return (
    <HStack alignItems={"center"}>
      <Text flex="1" fontSize={titleStyle} fontWeight="bold">
        {title}
      </Text>
      {iconText && (
        <CustomButton
          text={iconText}
          containerStyle={{
            backgroundColor: COLORS.primary,
            paddingVertical: 5,
            paddingHorizontal: 15,
          }}
          textStyle={{
            color: "white",
          }}
        />
      )}
    </HStack>
  );
};

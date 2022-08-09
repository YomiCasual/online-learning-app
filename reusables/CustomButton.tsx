import { TouchableOpacity } from "react-native";
import React from "react";
import { HStack, Image, Text } from "native-base";
import { InterfaceTextProps } from "native-base/lib/typescript/components/primitives/Text/types";

type CustomButtonProps = {
  containerStyle?: Record<string, any>;
  textStyle?: InterfaceTextProps & React.RefAttributes<unknown>;
  onPress?: () => void;
  text: string;
};

export const CustomButton = ({
  containerStyle,
  textStyle,
  onPress,
  text,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: "white",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        width: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "flex-start",
        ...containerStyle,
      }}
    >
      <Text
        color={"app.black"}
        variant={"unstyled"}
        fontWeight="bold"
        {...textStyle}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export const IconLabel = ({
  icon,
  label,
  imageStyle,
  textStyle,
}: {
  icon: any;
  label: string;
  imageStyle?: Record<string, any>;
  textStyle?: Record<string, any>;
}) => {
  return (
    <HStack alignItems={"center"} space={1}>
      <Image
        alt="time-button"
        source={icon}
        width="14px"
        height="14px"
        resizeMode="contain"
        tintColor="app.gray30"
        style={{
          ...imageStyle,
        }}
      />
      <Text
        fontSize="sm"
        color={"app.gray30"}
        style={{
          ...textStyle,
        }}
      >
        {label}
      </Text>
    </HStack>
  );
};

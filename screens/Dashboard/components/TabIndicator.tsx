import { Animated } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../../constants";
import { MAPPED_COMPONENTS_TO_ARRAY } from "../../../utils";

const TabIndicator = ({
  measureLayout,
  scrollX,
}: {
  measureLayout: any;
  scrollX: Animated.Value;
}) => {
  const inputRange = MAPPED_COMPONENTS_TO_ARRAY.map((_, i) => i * SIZES.width);

  const tabIndicatorWidth = scrollX.interpolate({
    inputRange,
    outputRange: measureLayout.map((item: any) => item.width),
  });
  const translateX = scrollX.interpolate({
    inputRange,
    outputRange: measureLayout.map((item: any) => item.x),
  });

  return (
    <Animated.View
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: tabIndicatorWidth,
        height: "100%",
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.primary,
        transform: [{ translateX }],
      }}
    />
  );
};

export default TabIndicator;

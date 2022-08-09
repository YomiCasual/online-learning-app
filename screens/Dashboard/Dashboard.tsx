import React from "react";
import { Box, ScrollView } from "native-base";
import { AnimatedContainer, BottomNavBar } from "./components";
import { MAPPED_COMPONENTS_TO_ARRAY } from "../../utils";
import { useAnimatedBottomBar } from "../../hooks";
import { Home } from "./screens";

const Dashboard = () => {
  const { containerRef, flatLisRef, scrollX, onBottomTabPress, measureLayout } =
    useAnimatedBottomBar(MAPPED_COMPONENTS_TO_ARRAY);

  return (
    <Box safeArea flex={1} bgColor="white">
      {/* <Home /> */}
      <AnimatedContainer flatListRef={flatLisRef} scrollX={scrollX} />
      <BottomNavBar
        containerRef={containerRef}
        measureLayout={measureLayout}
        onBottomTabPress={onBottomTabPress}
        scrollX={scrollX}
      />
    </Box>
  );
};

export default Dashboard;

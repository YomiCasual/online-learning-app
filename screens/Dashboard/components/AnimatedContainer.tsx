import { Animated, FlatList, View } from "react-native";
import React from "react";
import { SIZES } from "../../../constants";
import { MAPPED_COMPONENTS } from "../../../utils";
import { APP_SCREENS } from "../../../navigation/utils";
import { Box, ScrollView } from "native-base";

const AnimatedContainer = ({
  flatListRef,
  scrollX,
}: {
  flatListRef: React.RefObject<FlatList<any>>;
  scrollX: Animated.Value;
}) => {
  return (
    <Animated.FlatList
      ref={flatListRef}
      horizontal
      pagingEnabled
      scrollEnabled={false}
      snapToAlignment={"center"}
      snapToInterval={SIZES.width}
      decelerationRate="normal"
      showsHorizontalScrollIndicator={false}
      data={APP_SCREENS}
      keyExtractor={(item) => `Main-${item.name}`}
      onScroll={Animated.event(
        [
          {
            nativeEvent: { contentOffset: { x: scrollX } },
          },
        ],
        {
          useNativeDriver: false,
        }
      )}
      renderItem={({ item, index }) => {
        const Component = MAPPED_COMPONENTS[item.name].component;

        return (
          <ScrollView
            style={{
              width: SIZES.width,
              height: SIZES.height,
              flex: 1,
            }}
          >
            <Box flex="1" py={2} pb="200px">
              <Component />
            </Box>
          </ScrollView>
        );
      }}
    />
  );
};

export default AnimatedContainer;

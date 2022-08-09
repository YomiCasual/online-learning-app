import { MAPPED_COMPONENTS_TO_ARRAY } from "./../utils/index";
import React, { useCallback, useEffect } from "react";
import { Animated, FlatList } from "react-native";
import { SIZES } from "../constants";

const useAnimatedBottomBar = (
  listItems: { ref: React.RefObject<unknown>; [key: string]: any }[]
) => {
  const flatLisRef = React.useRef<FlatList<any>>(null);
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const containerRef = React.useRef();
  const [measureLayout, setMeasureLayout] = React.useState<any>([]);

  const onBottomTabPress = useCallback((bottomTabIndex) => {
    flatLisRef?.current?.scrollToOffset({
      offset: bottomTabIndex * SIZES.width,
    });
  }, []);

  useEffect(() => {
    let ml: any[] = [];
    listItems.forEach((curr: any) => {
      curr?.ref?.current?.measureLayout(
        containerRef.current,
        (x: any, y: any, width: any, height: any) => {
          ml.push({ x, y, width, height });

          if (listItems.length === ml.length) {
            setMeasureLayout(ml);
          }
        }
      );
    });
  }, [containerRef.current]);

  return {
    onBottomTabPress,
    scrollX,
    flatLisRef,
    containerRef,
    measureLayout,
    setMeasureLayout,
  };
};

export default useAnimatedBottomBar;

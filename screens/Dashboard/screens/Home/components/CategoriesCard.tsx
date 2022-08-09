import React from "react";
import { ImageBackground, TouchableOpacity } from "react-native";
import { Text } from "native-base";

const CategoriesCard = ({
  item,
  containerStyle,
}: {
  item: Record<string, any>;
  containerStyle?: Record<string, any>;
}) => {
  return (
    <TouchableOpacity key={`Categories-${item.id}`}>
      <ImageBackground
        source={item.thumbnail}
        style={{
          width: 200,
          height: 150,
          marginRight: 20,
          ...containerStyle,
        }}
        imageStyle={{
          borderRadius: 10,
        }}
      >
        <Text
          color={"white"}
          fontSize={"xl"}
          fontWeight={"bold"}
          width="100px"
          position="absolute"
          left="15px"
          bottom="15px"
          lineHeight={"20"}
        >
          {item.title}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default CategoriesCard;

import { View, Text, FlatList } from "react-native";
import React from "react";
import { CustomButton, TitleHeader } from "../../../../reusables";
import { Box, HStack, Image, Input, ScrollView, VStack } from "native-base";
import { COLORS, dummyData, icons, SIZES } from "../../../../constants";
import { CategoriesCard } from "../Home/components";

const Search = () => {
  return (
    <View>
      <VStack space={4}>
        <Box px={4} py={2}>
          <HStack
            bg={"white"}
            shadow="3"
            height="50px"
            alignItems={"center"}
            px={4}
            rounded="lg"
          >
            <Image
              width="20px"
              height="20px"
              source={icons.search}
              resizeMode="contain"
              tintColor="app.gray30"
            />
            <Input
              flex={1}
              variant={"unstyled"}
              placeholder="Search for Topics, Courses, & Educators"
            />
          </HStack>
        </Box>
        <VStack space={4}>
          <Box mx={4}>
            <TitleHeader
              title="Top Searches"
              iconText={null}
              titleStyle="2xl"
            />
          </Box>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {dummyData.top_searches.map((search, index) => {
              const isFirstItem = index === 0;
              const isLastItem = index === dummyData.top_searches.length - 1;
              return (
                <CustomButton
                  key={`Top-Search-${search.id}`}
                  text={search.label}
                  containerStyle={{
                    backgroundColor: isFirstItem
                      ? COLORS.primary
                      : COLORS.gray10,
                    borderRadius: 5,
                    paddingVertical: 5,
                    paddingHorizontal: 15,
                    marginLeft: isFirstItem ? 20 : 6,
                    marginRight: isLastItem ? 20 : 0,
                  }}
                  textStyle={{
                    fontWeight: 400,
                    color: isFirstItem ? "white" : COLORS.gray50,
                    fontSize: 12,
                  }}
                />
              );
            })}
          </ScrollView>
        </VStack>
        <VStack space={4} mx={4}>
          <TitleHeader
            title="Browse Categories"
            iconText={null}
            titleStyle="xl"
          />
          <FlatList
            data={dummyData.categories}
            numColumns={2}
            keyExtractor={(item) => `Browse-Categories-${item.id}`}
            renderItem={({ item, index }) => {
              return (
                <Box mb={4}>
                  <CategoriesCard
                    item={item}
                    containerStyle={{
                      width: SIZES.width * 0.43,
                      marginRight: 15,
                    }}
                  />
                </Box>
              );
            }}
          />
        </VStack>
      </VStack>
    </View>
  );
};

export default Search;

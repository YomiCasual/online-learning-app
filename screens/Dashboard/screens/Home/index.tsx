import { Box, Divider, ScrollView, VStack } from "native-base";
import React from "react";
import { FlatList } from "react-native";
import { dummyData } from "../../../../constants";
import { TitleHeader } from "../../../../reusables";
import {
  CategoriesCard,
  CourseCard,
  HomeHeader,
  Navbar,
  SecondaryCourseCard,
} from "./components";

const Home = () => {
  return (
    <>
      <Navbar />
      <HomeHeader />

      <ScrollView mt={4} horizontal showsHorizontalScrollIndicator={false}>
        {dummyData.courses_list_1.map((item, index) => {
          const isLastItem = index === dummyData.courses_list_1.length - 1;
          return (
            <CourseCard key={item.id} item={item} isLastItem={isLastItem} />
          );
        })}
      </ScrollView>
      <Divider my={6} />
      <VStack space={4}>
        <Box mx={4}>
          <TitleHeader title="Categories" />
        </Box>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {dummyData.categories.map((item, index) => {
            const isFirstItem = index === 0;
            const isLastItem = index === dummyData.categories.length - 1;

            return (
              <CategoriesCard
                item={item}
                containerStyle={{
                  marginLeft: isFirstItem ? 20 : 15,
                  marginRight: isLastItem ? 20 : 0,
                }}
              />
            );
          })}
        </ScrollView>
      </VStack>
      <VStack mx={4} space={4} mt={6}>
        <TitleHeader title="Popular Courses" />

        <FlatList
          data={dummyData.courses_list_2}
          keyExtractor={(item) => `Popular-Courses-${item.id}`}
          renderItem={({ item, index }) => {
            return <SecondaryCourseCard item={item} />;
          }}
          ItemSeparatorComponent={() => <Divider my={6} />}
        />
      </VStack>
    </>
  );
};

export default Home;

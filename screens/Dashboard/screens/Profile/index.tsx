import { View, Text } from "react-native";
import React from "react";
import { ScrollView, VStack } from "native-base";
import { ProfileBanner, ProfileHeader, ProfileSection } from "./components";

const Profile = () => {
  return (
    <ScrollView mx={4}>
      <VStack space={5}>
        <ProfileHeader />
        <ProfileBanner />
        <ProfileSection />
      </VStack>
    </ScrollView>
  );
};

export default Profile;

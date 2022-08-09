import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { APP_ROUTES } from "./app.routes";
import { DASHBOARD_SCREENS } from "./constants";
import { AppScreensProps } from "./types";

const Stack = createNativeStackNavigator();

export const buildStack = (stacks: AppScreensProps[]) => {
  const StackScreen = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={APP_ROUTES.DASHBOARD}
      >
        {stacks.map((item) => (
          <Stack.Screen
            key={item.name}
            name={item.name}
            component={item.component}
            options={item.options}
          />
        ))}
      </Stack.Navigator>
    );
  };
  return StackScreen;
};

const DashboardNavigation = buildStack(DASHBOARD_SCREENS);

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={APP_ROUTES.DASHBOARD}
      >
        <Stack.Screen name={APP_ROUTES.HOME} component={DashboardNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

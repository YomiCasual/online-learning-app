import { ParamListBase, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { icons } from "../constants";

export type AppScreensProps = {
  component: () => JSX.Element;
  name: string;
  icon?: typeof icons;
  options?:
    | NativeStackNavigationOptions
    | ((props: {
        route: RouteProp<ParamListBase, string>;
        navigation: any;
      }) => NativeStackNavigationOptions)
    | undefined;
};

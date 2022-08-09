import { icons } from "../constants";
import { Home, Profile, Search } from "../screens/Dashboard/screens";
import { APP_ROUTES } from "./app.routes";
import { AppScreensProps } from "./types";

export const APP_SCREENS: AppScreensProps[] = [
  {
    name: APP_ROUTES.HOME,
    component: Home,
    icon: icons.home,
  },
  {
    name: APP_ROUTES.SEARCH,
    component: Search,
    icon: icons.search,
  },
  {
    name: APP_ROUTES.PROFILE,
    component: Profile,
    icon: icons.profile,
  },
];

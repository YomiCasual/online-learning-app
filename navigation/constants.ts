import { icons } from "../constants";
import { Dashboard } from "../screens";
import { APP_ROUTES } from "./app.routes";
import { AppScreensProps } from "./types";

export const DASHBOARD_SCREENS: AppScreensProps[] = [
  {
    name: APP_ROUTES.DASHBOARD,
    component: Dashboard,
  },
];

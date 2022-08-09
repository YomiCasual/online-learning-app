import React from "react";
import { APP_SCREENS } from "../navigation/utils";

export const MAPPED_COMPONENTS = (APP_SCREENS || []).reduce((acc, curr) => {
  acc[curr.name] = { ...curr, ref: React.createRef() };
  return acc;
}, {} as Record<string, any>);

export const MAPPED_COMPONENTS_TO_ARRAY = Object.values(MAPPED_COMPONENTS);

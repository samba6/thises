import { SimpleStyle } from "jss/css";

export const ROOT_URL = "/";

export const POSITION_RELATIVE = "relative" as "relative";
export const POSITION_ABSOLUTE = "absolute" as "absolute";
export const FLEX_WRAP_WRAP = "wrap" as "wrap";
export const BORDER_COLLAPSE_SEPARATE = "separate" as "separate";

export type SimpleCss = Record<string, SimpleStyle>;

export const ROOT_CONTAINER_STYLE = {
  height: "100%",
  display: "flex",
  flexDirection: "column"
};

export const ERROR_COLOR = "#9f3a38";

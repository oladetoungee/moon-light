import type { PropsTableProp } from "@/types";

export const props: PropsTableProp[] = [
  {
    name: "className",
    type: ["string"],
    description: "Tailwind classes for customization",
  },
  {
    name: "size",
    type: ["2xs", "xs", "sm", "md", "lg"],
    defaultState: "2xs",
    description: "Size of CircularProgress",
  },
  {
    name: "value",
    type: ["number"],
    defaultState: "0",
    description: "Value of CircularProgress in percent (%)",
  },
];
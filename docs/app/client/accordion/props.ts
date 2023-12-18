import { PropsTableProp } from "@/types";

const Props: PropsTableProp[] = [
  {
    name: "itemSize",
    type: ["sm | md | lg | xl"],
    required: false,
    defaultState: "md",
    description: "Size of accordion item",
  },
  {
    name: "singleOpen",
    type: ["boolean"],
    required: false,
    defaultState: "false",
    description: "Whether only one item can be opened at a time",
  },
  {
    name: "defaultValue",
    type: ["string"],
    required: false,
    description: "The value of the item to expand",
  },
  {
    name: "value",
    type: ["string[]"],
    required: false,
    description: "The accordion items value",
  },
  {
    name: "onValueChange",
    type: ["(value: string[]) => void"],
    required: false,
    description:
      "Event handler called when the expanded state of an item changes and prop singleOpen in false state",
  },
];

export default Props;

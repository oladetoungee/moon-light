import type { PropsTableProp } from "@/types";

export const props: PropsTableProp[] = [
  {
    name: "children",
    description: "Children content",
    type: ["React.ReactNode"],
  },
  {
    name: "disabled",
    type: ["boolean"],
    defaultState: "false",
    description: "Disabled Chip",
  },
  {
    name: "iconLeft",
    description: "Left Icon",
    type: ["React.ReactNode"],
  },
  {
    name: "iconRight",
    description: "Right icon",
    type: ["React.ReactNode"],
  },
  {
    name: "iconOnly",
    description:
      "Icon without text, if provided it will render only the icon passed in this prop",
    type: ["React.ReactNode"],
  },
  {
    name: "isActive",
    description: "Active State",
    type: ["boolean"],
    defaultState: "false",
  },
  {
    name: "isStroke",
    description: "Shows stroke on hover/active",
    defaultState: "false",
    type: ["boolean"],
  },
  {
    name: "size",
    type: ["sm", "md"],
    description: "Size of the Chip",
    defaultState: '"md"',
  },
  {
    name: "variant",
    type: ["default", "ghost"],
    description: "Visual/Logical variant of the Chip",
    defaultState: "default",
  },
];

export default props;

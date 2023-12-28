import { PropsTableProp } from "@/types";

export const tagsInputProps: PropsTableProp[] = [
  {
    name: "selected",
    type: ["string[]"],
    description: "The selected dataset",
    required: true,
  },
  {
    name: "label",
    type: ["string"],
    description: "Label title",
  },
  {
    name: "size",
    type: ["sm", "md", "lg"],
    description: "Input size",
    defaultState: "md",
  },
  {
    name: "type",
    type: [
      "date",
      "datetime-local",
      "email",
      '"number"',
      "password",
      "search",
      "tel",
      "text",
      "time",
      "url",
      '"string"',
    ],
    defaultState: "text",
    description: "Input type",
  },
  {
    name: "placeholder",
    type: ["string"],
    description: "Placeholder for input",
  },
  {
    name: "isError",
    type: ["boolean"],
    defaultState: "false",
    description: "Sets error state for input",
  },
  {
    name: "disabled",
    type: ["boolean"],
    defaultState: "false",
    description: "Set disabled/non-disabled",
  },
  {
    name: "className",
    type: ["string"],
    description: "Tailwind classes for customization",
  },
  {
    name: "onEnter",
    type: ["(value: string) => void"],
    description: "The function to select the text and append it to the tag set",
  },
  {
    name: "onClear",
    type: ["(index: number) => void"],
    description: "The function to remove the selected tag.",
  },
];

export const tagsInputSelectedPropsItems: PropsTableProp[] = [
  {
    name: "className",
    type: ["string"],
    description: "Tailwind classes for customization",
  },
  {
    name: "index",
    type: ["number"],
    required: true,
    description: "This data specifies the key value of the item",
  },
  {
    name: "label",
    type: ["string"],
    required: true,
    description: "The text selected as tag",
  },
];
export default tagsInputProps;

const COMPONENTS = {
  accordion: {
    title: "Accordion",
    tags: ["ARIA", "RTL"],
    examples: [
      "Default",
      "OpenByDefault",
      "SingleOpen",
      "Disabled",
      "HeaderContent",
      "Sizes",
      "Customization",
      "ControlOutside",
    ],
  },
  alert: {
    title: "Alert",
    tags: ["ARIA", "RTL"],
    examples: [
      "Default",
      "WithTitle",
      "WithIcon",
      "WithClose",
      "Customization",
    ],
  },
  authcode: {
    title: "AuthCode",
    tags: ["ARIA", "RTL"],
    examples: [
      "Default",
      "WithManualSubmit",
      "WithAutoSubmit",
      "AllowedCharacters",
      "CustomLength",
      "ErrorState",
      "HintMessage",
      "Placeholder",
      "Password",
      "DifferentGaps",
    ],
  },
  avatar: {
    title: "Avatar",
    tags: ["ARIA", "RTL"],
    examples: [
      "Default",
      "Variants",
      "Sizes",
      "ActiveStatus",
      "StatusOrigin",
      "Customization",
    ],
  },
  bottomSheet: {
    title: "BottomSheet",
    tags: ["IN PROGRESS", "ARIA", "RTL"],
    examples: [
      "Default",
      "Sizes",
      "WithDraghandle",
      "WithTitle",
      "Customization",
      "RootPortal",
    ],
  },
  breadcrumb: {
    title: "Breadcrumb",
    tags: ["ARIA", "RTL"],
    examples: [
      "Collapsed",
      "FourItems",
      "TwoItems",
      "OneItem",
      "CustomDivider",
    ],
  },
  button: {
    title: "Button",
    tags: ["ARIA", "RTL"],
    examples: [
      "Sizes",
      "Disabled",
      "Animations",
      "ButtonAsLinkHTML",
      "DefaultWithClick",
      "FullWidth",
      "Icons",
      "Multiline",
      "Variants",
    ],
  },
  checkbox: {
    title: "Checkbox",
    tags: ["ARIA", "RTL"],
    examples: [
      "Default",
      "WithLabel",
      "Checked",
      "Disabled",
      "ReadOnly",
      "PartiallySelected",
      "Customization",
    ],
  },
  chip: {
    title: "Chip",
    tags: ["ARIA", "RTL"],
    examples: undefined,
  },
  circularProgress: {
    title: "CircularProgress",
    tags: ["ARIA", "RTL"],
    examples: ["Default", "Size", "Value", "Customization"],
  },
  drawer: {
    title: "Drawer",
    tags: ["ARIA", "RTL"],
    examples: ["Default", "Positions", "WithBackdrop", "WithClose"],
  },
  dropdown: {
    title: "Dropdown",
    tags: ["ARIA", "RTL"],
    examples: [
      "Default",
      "TriggerElements",
      "OptionsVariants",
      "Select",
      "SelectStates",
      "HiddenInput",
      "InsetSelect",
      "InsetSelectStates",
      "MultiSelect",
      "InsetMultiSelect",
      "CustomMenuWidth",
    ],
  },
  group: {
    title: "Group",
    tags: ["ARIA", "RTL"],
    examples: ["Default", "Direction", "Options", "Size", "States"],
  },
  iconbutton: {
    title: "IconButton",
    tags: ["ARIA", "RTL"],
    examples: undefined,
  },
  input: {
    title: "Input",
    tags: ["ARIA", "RTL"],
    examples: [
      "Default",
      "WithLabelAndHint",
      "Sizes",
      "DifferentStates",
      "TextInputTypes",
      "ControllingAnInput",
      "Customization",
    ],
  },
  insetInput: {
    title: "InsetInput",
    tags: ["ARIA", "RTL"],
    examples: ["Default", "DifferentStates", "TextInputTypes", "Customization"],
  },
  insetnativeselect: {
    title: "InsetNativeSelect",
    tags: ["ARIA", "RTL"],
    examples: ["Default", "DifferentStates", "CustomStyles"],
  },
  loader: {
    title: "Loader",
    tags: ["ARIA", "RTL"],
    examples: ["Default", "Sizes", "Colors"],
  },
  menuItem: {
    title: "MenuItem",
    tags: ["ARIA", "RTL"],
    examples: [
      "Default",
      "AsLink",
      "WithIcon",
      "WithMeta",
      "Checkbox",
      "Radio",
      "MultiTitle",
      "MultiLineItems",
      "ExpandCollapse",
    ],
  },
  modal: {
    title: "Modal",
    tags: ["ARIA", "RTL"],
    examples: ["Default", "WithBigContent", "WithStyledContent", "WithSelect"],
  },
  nativeselect: {
    title: "NativeSelect",
    tags: ["ARIA", "RTL"],
    examples: ["Default", "Sizes", "DifferentStates", "CustomStyles"],
  },
  pagination: {
    title: "Pagination",
    tags: ["ARIA", "RTL"],
    examples: ["Default", "WithButton", "WithArrayOfPageHREFs"],
  },
  popover: {
    title: "Popover",
    tags: ["ARIA", "RTL"],
    examples: [
      "Default",
      "Position",
      "TriggerElements",
      "WithCloseButton",
      "TooltipViewExample",
      "TooltipViewExampleWithAlwaysOpenState",
      "DisableFlipOnComponent",
    ],
  },
  progress: {
    title: "Progress",
    tags: ["ARIA", "RTL"],
    examples: [
      "Default",
      "Size",
      "Value",
      "Pin",
      "WithLabels",
      "Customization",
    ],
  },
  radio: {
    title: "Radio",
    tags: ["ARIA", "RTL"],
    examples: [
      "Default",
      "Uncontrolled",
      "Disabled",
      "AsFormItem",
      "Customization",
    ],
  },
  snackbar: {
    title: "Snackbar",
    tags: ["ARIA", "RTL"],
    examples: [
      "Default",
      "Positions",
      "Options",
      "SemanticTypes",
      "AutoClose",
      "Customization",
      "SnackbarQueue",
    ],
  },
  switch: {
    title: "Switch",
    tags: ["ARIA", "RTL"],
    examples: [
      "Default",
      "Sizes",
      "Disabled",
      "WithIcons",
      "Customization",
      "WithHTMLForms",
      "UsingTooltip",
    ],
  },
  tabs: {
    title: "Tabs",
    tags: ["ARIA", "RTL"],
    examples: [
      "Default",
      "Sizes",
      "Pill",
      "SegmentControlView",
      "SelectedIndex",
      "SelectedIndexSegment",
      "TabsOnlyView",
      "WithCustomStyle",
      "WithHandler",
    ],
  },
  tag: {
    title: "Tag",
    tags: ["ARIA", "RTL"],
    examples: ["Default", "Size", "WithIcons", "Casing", "Customization"],
  },
  tagsInput: {
    title: "TagsInput",
    tags: ["IN PROGRESS", "ARIA", "RTL"],
    examples: ["Default", "DifferentSizes", "States", "UppercaseLowercase"],
  },
  textarea: {
    title: "Textarea",
    tags: ["ARIA", "RTL"],
    examples: ["Default", "States", "WithButton", "Customization"],
  },
  tooltip: {
    title: "Tooltip",
    tags: undefined,
    examples: undefined,
  },
};

export default COMPONENTS;

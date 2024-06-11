const changeLogs = {
  docs: "# docs\n\n## 10.17.1\n\n### Patch Changes\n\n- Updated docs Accordion example\n\n## 10.17.0\n\n### Minor Changes\n\n- 9ec1d47: feat: remove necessity of installation of @tanstack package [MDS-1181]\n\n### Patch Changes\n\n- Updated dependencies [9ec1d47]\n  - @heathmont/moon-table-v8-tw@10.17.0\n\n## 10.16.1\n\n### Patch Changes\n\n- 884cf84: fix: add missing keys to Table map functions, remove unnecessary scroll on right sidebar in docs [MDS-1175]\n- 772195f: Add Contribution page [MDS-1064]\n- cdcfbab: fix: accessibility issue in TableProps component [MDS-950]\n- ab7501c: Add Themes page to documentation\n- 4d38494: Add Google Analytics [MDS-1066]\n- Updated dependencies [884cf84]\n  - @heathmont/moon-table-v8-tw@10.16.1\n\n## 10.16.0\n\n### Minor Changes\n\n- ac50cda: feat: update hover logics for Button and IconButton. Add hover-supported @media to MDS configuration file\n\n### Patch Changes\n\n- 18e3224: Add Installation page [MDS-1065]\n- Updated dependencies [ac50cda]\n  - @heathmont/moon-core-tw@10.16.0\n\n## 10.15.0\n\n### Minor Changes\n\n- d71a61f: docs: add Our contributors section on the main page [MDS-1061]\n- f557d96: Add version number to every component page title [MDS-1086]\n\n### Patch Changes\n\n- c032714: Update icons set, overall style improvements, useContributors hook fix [MDS-1085]\n- 64d9592: docs: Update AuthCode preview image [MDS-1083]\n- Updated dependencies [240db00]\n  - @heathmont/moon-themes-tw@10.15.0\n\n## 10.14.2\n\n### Patch Changes\n\n- a43ad4e: build: utilize pnpm@8.15.6\n  build: fix npm registry path\n\n## 10.14.1\n\n### Patch Changes\n\n- 4ba7fe4: docs: add syntax highlight for code previews [MDS-1058]\n- 42b4b3a: Added navigation to Release page [MDS-1044]\n- 56c7165: fix: update instances of github repo links [MDS-1056]\n- Updated dependencies [dc17021]\n- Updated dependencies [56c7165]\n  - @heathmont/moon-themes-tw@10.14.1\n  - @heathmont/moon-table-v8-tw@10.14.1\n  - @heathmont/moon-base-tw@10.14.1\n  - @heathmont/moon-cmdk-tw@10.14.1\n  - @heathmont/moon-core-tw@10.14.1\n\n## 10.14.0\n\n### Minor Changes\n\n- b4a0fce: docs: fix windows scrollbar styling, add color-scheme to dark theme\n- 6a576cf: fix: incorrect definition of the enum type in props tables [MDS-1029]\n- aec715c: The anchors have been replaced with the Next Link components [MDS-1037]\n- 1a84c8b: feat(Table): the cell border customization has been added [MDS-1023]\n- 9b3b12a: feat: а set of component cards is displayed on the main page [MDS-1028]\n- 306ffe5: fix: the pre-build step of component descriptions generation is enabled [MDS-1036]\n\n### Patch Changes\n\n- 48129e5: chore: update CONTRIBUTING.md regarding changeset\n- d9276b8: fix: Dark Mode & RTL Flickering [MDS-1024]\n- b9ea351: chore: bump e2e screenshots after packages migration\n- dc1f0a2: chore(docs): update navigation buttons colors & sidebar padding\n- 2b3a562: Added linting for newly generated datasets before pushing.\n- ab8698c: docs: update desktop and mobile layouts\n- 8266681: TagsInput: The maximum width of the components has been limited.\n  TagsInput: Functionality is split for each example instance.\n- ade08b1: docs: hide components from the main page, test optimization\n- 3328be8: The generator of the changelog total data file has been added [MDS-1018]\n- 67a7327: fix: z-indices for Combobox and Search\n- 829fdc1: feat: Chip - as polymorphic component\n- Updated dependencies [0302fc9]\n- Updated dependencies [1a84c8b]\n- Updated dependencies [67a7327]\n- Updated dependencies [829fdc1]\n  - @heathmont/moon-table-v8-tw@10.14.0\n  - @heathmont/moon-core-tw@10.14.0\n",
  "packages/base":
    "# @heathmont/moon-base-tw\n\n## 10.14.1\n\n### Patch Changes\n\n- 56c7165: fix: update instances of github repo links [MDS-1056]\n\n## 10.13.5\n\n### Patch Changes\n\n- bump version to 10.13.5\n",
  "packages/cmdk":
    "# @heathmont/moon-cmdk-tw\n\n## 10.14.1\n\n### Patch Changes\n\n- 56c7165: fix: update instances of github repo links [MDS-1056]\n- Updated dependencies [56c7165]\n  - @heathmont/moon-core-tw@10.14.1\n\n## 10.13.5\n\n### Patch Changes\n\n- bump version to 10.13.5\n- Updated dependencies\n  - @heathmont/moon-core-tw@10.13.5\n",
  "packages/core":
    "# @heathmont/moon-core-tw\n\n## 10.16.0\n\n### Minor Changes\n\n- ac50cda: feat: update hover logics for Button and IconButton. Add hover-supported @media to MDS configuration file\n\n## 10.14.1\n\n### Patch Changes\n\n- 56c7165: fix: update instances of github repo links [MDS-1056]\n\n## 10.14.0\n\n### Patch Changes\n\n- 67a7327: fix: z-indices for Combobox and Search\n- 829fdc1: feat: Chip - as polymorphic component\n",
  "packages/table-v8":
    "# @heathmont/moon-table-v8-tw\n\n## 10.17.0\n\n### Minor Changes\n\n- 9ec1d47: feat: remove necessity of installation of @tanstack package [MDS-1181]\n\n## 10.16.1\n\n### Patch Changes\n\n- 884cf84: fix: add missing keys to Table map functions, remove unnecessary scroll on right sidebar in docs [MDS-1175]\n\n## 10.14.1\n\n### Patch Changes\n\n- 56c7165: fix: update instances of github repo links [MDS-1056]\n- Updated dependencies [56c7165]\n  - @heathmont/moon-core-tw@10.14.1\n\n## 10.14.0\n\n### Minor Changes\n\n- 1a84c8b: feat(Table): the cell border customization has been added [MDS-1023]\n\n### Patch Changes\n\n- 0302fc9: fix: the widths of the sticky cells have been adjusted [MDS-1025]\n- Updated dependencies [67a7327]\n- Updated dependencies [829fdc1]\n  - @heathmont/moon-core-tw@10.14.0\n",
  "packages/themes":
    "# @heathmont/moon-themes-tw\n\n## 10.15.0\n\n### Patch Changes\n\n- 240db00: fix: update bitcasino hit color\n\n## 10.14.1\n\n### Patch Changes\n\n- dc17021: feat: new bitcasino colors and font\n- 56c7165: fix: update instances of github repo links [MDS-1056]\n\n## 10.13.5\n\n### Patch Changes\n\n- bump version to 10.13.5\n",
};
export default changeLogs;

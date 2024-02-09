"use client";

import { Popover, Button, MenuItem } from "@heathmont/moon-core-tw";
import { OtherFrame } from "@heathmont/moon-icons-tw";

const DisableFlipOnComponent = () => {
  return (
    <Popover autoPositionDisable={true}>
      <Popover.Trigger data-testid="popover-trigger">
        <Button>Toggle Popover</Button>
      </Popover.Trigger>
      <Popover.Panel className="p-2 flex flex-col gap-1">
        <Content />
      </Popover.Panel>
    </Popover>
  );
};

const Content: React.FC = () => (
  <>
    <MenuItem>
      <span className="flex w-11 h-11 bg-gohan items-center justify-center rounded-lg">
        <OtherFrame className="text-bulma text-moon-24" />
      </span>
      <MenuItem.MultiTitle
        title="Tournaments"
        text={<span>Best tournaments with streamers</span>}
      />
    </MenuItem>
    <MenuItem>
      <span className="flex w-11 h-11 bg-gohan items-center justify-center">
        <OtherFrame className="text-bulma text-moon-24" />
      </span>
      <MenuItem.MultiTitle
        title="Promotions"
        text={<span> Your favorite games</span>}
      />
    </MenuItem>
    <MenuItem>
      <span className="flex w-11 h-11 bg-gohan items-center justify-center">
        <OtherFrame className="text-bulma text-moon-24" />
      </span>
      <MenuItem.MultiTitle
        title="Providers"
        text={<span> Your favorite games</span>}
      />
    </MenuItem>
  </>
);

export default DisableFlipOnComponent;

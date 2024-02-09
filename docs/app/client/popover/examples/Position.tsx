"use client";

import { Popover, Button } from "@heathmont/moon-core-tw";

const Position = () => {
  return (
    <div className="flex align-middle justify-around items-center w-full gap-2">
      <Popover position="top">
        <Popover.Trigger data-testid="popover-trigger">
          <Button>Top</Button>
        </Popover.Trigger>
        <Popover.Panel>
          <Content />
        </Popover.Panel>
      </Popover>

      <Popover position="right">
        <Popover.Trigger data-testid="popover-right-trigger">
          <Button>Right</Button>
        </Popover.Trigger>
        <Popover.Panel>
          <Content />
        </Popover.Panel>
      </Popover>

      <Popover position="left">
        <Popover.Trigger data-testid="popover-left-trigger">
          <Button>Left</Button>
        </Popover.Trigger>
        <Popover.Panel>
          <Content />
        </Popover.Panel>
      </Popover>
    </div>
  );
};

const Content: React.FC = () => (
  <p className="p-4 text-moon-14">
    {/* cSpell:disable */}
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat.
    {/* cSpell:enable */}
  </p>
);
export default Position;

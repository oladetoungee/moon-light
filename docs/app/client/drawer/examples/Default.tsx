"use client";

import React, { useState } from "react";
import { Button, Drawer } from "@heathmont/moon-core-tw";

export const Default = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(true);
  return (
    <>
      <Button variant="outline" onClick={handleClick}>
        Show default Drawer
      </Button>
      <Drawer open={isOpen} setOpen={setIsOpen}>
        <Drawer.Panel>Default Drawer</Drawer.Panel>
      </Drawer>
    </>
  );
};

export default Default;

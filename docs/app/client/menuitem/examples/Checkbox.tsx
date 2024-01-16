"use client";

import { useState, useCallback } from "react";
import { MenuItem } from "@heathmont/moon-core-tw";

const Checkbox = () => {
  const [activeOpt1, setActiveOpt1] = useState(false);
  const [activeOpt2, setActiveOpt2] = useState(false);
  const toggle1 = useCallback(() => setActiveOpt1(!activeOpt1), [activeOpt1]);
  const toggle2 = useCallback(() => setActiveOpt2(!activeOpt2), [activeOpt2]);

  return (
    <>
      <MenuItem isSelected={activeOpt1} onClick={toggle1} className="w-56">
        <MenuItem.Checkbox />
        <MenuItem.Title>Your value</MenuItem.Title>
      </MenuItem>
      <MenuItem isSelected={activeOpt2} onClick={toggle2} className="w-56">
        <MenuItem.Title>Your value</MenuItem.Title>
        <MenuItem.Checkbox className="rounded-none shadow-roshi moon-checked:bg-roshi" />
      </MenuItem>
    </>
  );
};

export default Checkbox;

"use client";

import { MenuItem } from "@heathmont/moon-core-tw";
import { ControlsChevronDown } from "@heathmont/moon-icons-tw";
import { useCallback, useState } from "react";

const ExpandCollapse = () => {
  const [activeOpt, setActiveOpt] = useState(true);
  const [isOpen, setIsOpen] = useState(true);

  const toggleClick = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const toggleOpt = useCallback(() => {
    setActiveOpt(!activeOpt);
  }, [activeOpt]);

  return (
    <div className="flex items-start flex-wrap justify-around gap-2 w-full">
      <div className="w-56 bg-gohan flex flex-col gap-2 rounded-moon-s-lg p-4">
        <MenuItem as="a" href="/">
          Vision
        </MenuItem>
        <MenuItem as="a" href="/">
          Getting started
        </MenuItem>
        <MenuItem as="a" href="/">
          How to contribute?
        </MenuItem>
        <MenuItem as="a" href="/">
          Colors palette
        </MenuItem>
        <MenuItem as="a" href="/">
          Tokens
        </MenuItem>
        <MenuItem as="a" href="/">
          Transform SVG
        </MenuItem>
        <MenuItem as="a" href="/">
          Manifest
        </MenuItem>
        <MenuItem isActive={activeOpt} onClick={toggleOpt}>
          Tailwind
          <ControlsChevronDown className={`w-6 ${activeOpt && "rotate-180"}`} />
        </MenuItem>

        {activeOpt && (
          <div className="ps-6" data-testid="expandable-1">
            <MenuItem as="a" href="/">
              <MenuItem.Title> Accordion</MenuItem.Title>
            </MenuItem>
            <MenuItem as="a" href="/">
              <MenuItem.Title> Avatar</MenuItem.Title>
            </MenuItem>
            <MenuItem as="a" href="/">
              <MenuItem.Title> Breadcrumb</MenuItem.Title>
            </MenuItem>
            <MenuItem as="a" href="/">
              <MenuItem.Title> Button</MenuItem.Title>
            </MenuItem>
            <MenuItem as="a" href="/">
              <MenuItem.Title> Checkbox</MenuItem.Title>
            </MenuItem>
          </div>
        )}
      </div>

      <div className="w-56 bg-gohan flex flex-col gap-2 rounded-moon-s-lg p-4">
        <MenuItem>
          <span className="bg-goku w-6 h-6 rounded-full flex justify-center items-center">
            <p className="font-medium text-moon-10">B</p>
          </span>
          <MenuItem.Title>
            <p className="text-moon-14 font-medium">Bitcasino</p>
          </MenuItem.Title>
        </MenuItem>
        <MenuItem
          className="ps-6"
          onClick={toggleClick}
          data-testid="right-trigger"
        >
          <span className="bg-goku w-6 h-6 rounded-full flex justify-center items-center">
            <p className="font-medium text-moon-10">CX</p>
          </span>
          <MenuItem.Title> Customer...</MenuItem.Title>
          <ControlsChevronDown className={`w-6 ${isOpen && "rotate-180"}`} />
        </MenuItem>

        {isOpen && (
          <div className="ps-10" data-testid="expandable-2">
            <MenuItem>
              <span className="bg-goku w-6 h-6 rounded-full flex justify-center items-center">
                <p className="font-medium text-moon-10">S</p>
              </span>
              <MenuItem.Title>Sub nested item</MenuItem.Title>
            </MenuItem>
            <MenuItem>
              <span className="bg-goku w-6 h-6 rounded-full flex justify-center items-center">
                <p className="font-medium text-moon-10">S</p>
              </span>
              <MenuItem.Title>Sub nested item</MenuItem.Title>
            </MenuItem>
          </div>
        )}

        <MenuItem className="ps-6">
          <span className="bg-goku w-6 h-6 rounded-full flex justify-center items-center">
            <p className="font-medium text-moon-10">CX</p>
          </span>
          <MenuItem.Title>Quality...</MenuItem.Title>
        </MenuItem>
        <MenuItem className="ps-6">
          <span className="bg-goku w-6 h-6 rounded-full flex justify-center items-center">
            <p className="font-medium text-moon-10">RG</p>
          </span>
          <MenuItem.Title>Responsible...</MenuItem.Title>
        </MenuItem>
        <MenuItem className="ps-6">
          <span className="bg-goku w-6 h-6 rounded-full flex justify-center items-center">
            <p className="font-medium text-moon-10">RG</p>
          </span>
          <MenuItem.Title>Responsible...</MenuItem.Title>
        </MenuItem>
        <div className="flex flex-col gap-2 rounded-moon-s-lg">
          <MenuItem>
            <span className="bg-goku w-6 h-6 rounded-full flex justify-center items-center">
              <p className="font-medium text-moon-10">S</p>
            </span>
            <MenuItem.Title>
              <p className="text-moon-14 font-medium">Sportsbet</p>
            </MenuItem.Title>
          </MenuItem>
          <MenuItem className="ps-6">
            <span className="bg-goku w-6 h-6 rounded-full flex justify-center items-center">
              <p className="font-medium text-moon-10">RG</p>
            </span>
            <MenuItem.Title>Customer...</MenuItem.Title>
          </MenuItem>
          <MenuItem className="ps-6">
            <span className="bg-goku w-6 h-6 rounded-full flex justify-center items-center">
              <p className="font-medium text-moon-10">CX</p>
            </span>
            <MenuItem.Title>Quality...</MenuItem.Title>
          </MenuItem>
          <MenuItem className="ps-6">
            <span className="bg-goku w-6 h-6 rounded-full flex justify-center items-center">
              <p className="font-medium text-moon-10">RG</p>
            </span>
            <MenuItem.Title>Responsible...</MenuItem.Title>
          </MenuItem>
        </div>
        <div className="flex flex-col gap-2 rounded-moon-s-lg ">
          <MenuItem>
            <span className="bg-goku w-6 h-6 rounded-full flex justify-center items-center">
              <p className="font-medium text-moon-10">L</p>
            </span>
            <MenuItem.Title>
              <p className="text-moon-14 font-medium">Livecasino</p>
            </MenuItem.Title>
          </MenuItem>
          <MenuItem className="ps-6">
            <span className="bg-goku w-6 h-6 rounded-full flex justify-center items-center">
              <p className="font-medium text-moon-10">RG</p>
            </span>
            <MenuItem.Title>Customer...</MenuItem.Title>
          </MenuItem>
        </div>
      </div>
    </div>
  );
};

export default ExpandCollapse;

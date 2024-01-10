"use client";

import React, { useState } from "react";
import { Dropdown, MenuItem } from "@heathmont/moon-core-tw";
import { GenericInfo } from "@heathmont/moon-icons-tw";

type People = {
  name: string;
};

const people = [
  { name: "Wade Cooper" },
  { name: "Arlene Mccoy" },
  { name: "Devon Webb" },
  { name: "Tom Cook" },
  { name: "Tanya Fox" },
  { name: "Hellen Schmidt" },
];

export const SelectStates = () => {
  const [selected, setSelected] = useState<People>(people[2]);
  const [selected2, setSelected2] = useState<People>(people[0]);
  const [selected3, setSelected3] = useState<People | null>(null);
  const [selected4, setSelected4] = useState<People | null>(null);
  return (
    <div className="flex flex-col lg:flex-row justify-around items-center w-full gap-2">
      <Dropdown value={selected} onChange={setSelected} isError={true}>
        {({ open }) => (
          <>
            <Dropdown.Select open={open} label="Error">
              {selected?.name}
            </Dropdown.Select>

            <Dropdown.Options>
              {people.map((person, index) => (
                <Dropdown.Option value={person} key={index}>
                  {({ selected, active }) => (
                    <MenuItem
                      isActive={active}
                      isSelected={selected}
                      data-testid={`test-${index}`}
                    >
                      {person.name}
                    </MenuItem>
                  )}
                </Dropdown.Option>
              ))}
            </Dropdown.Options>
            <Dropdown.Hint>
              <GenericInfo />
              Informative message holder
            </Dropdown.Hint>
          </>
        )}
      </Dropdown>

      <Dropdown value={selected2} onChange={setSelected2} disabled={true}>
        {({ open }) => (
          <>
            <Dropdown.Select open={open} label="Disabled">
              {selected2?.name}
            </Dropdown.Select>
            <Dropdown.Options>
              {people.map((person, index) => (
                <Dropdown.Option value={person} key={index}>
                  {({ selected, active }) => (
                    <MenuItem isActive={active} isSelected={selected}>
                      {person.name}
                    </MenuItem>
                  )}
                </Dropdown.Option>
              ))}
            </Dropdown.Options>
            <Dropdown.Hint>Informative message holder</Dropdown.Hint>
          </>
        )}
      </Dropdown>
    </div>
  );
};

export default SelectStates;

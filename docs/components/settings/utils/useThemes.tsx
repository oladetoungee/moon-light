"use client";

import React, { useEffect } from "react";
import isStorageAvailable from "./isStorageAvailable";

type ColorModes = {
  dark: string;
  light: string;
};

type Themes = {
  betadda: ColorModes;
  bitcasino: ColorModes;
  bombay: ColorModes;
  // TODO don't need comms
  // comms: ColorModes;
  empire: ColorModes;
  hub88: ColorModes;
  lab: ColorModes;
  livecasino: ColorModes;
  moonDesign: ColorModes;
  partners: ColorModes;
  sportsbet: ColorModes;
  tradeart: ColorModes;
  tradeartMiniBetting: ColorModes;
  travel: ColorModes;
  pay: ColorModes;
};

export const themes: Themes = {
  betadda: {
    dark: "theme-betadda-dark",
    light: "theme-betadda-light",
  },
  bitcasino: {
    dark: "theme-bitcasino-dark",
    light: "theme-bitcasino-light",
  },
  bombay: {
    dark: "theme-bombay-club",
    light: "theme-bombay-club",
  },
  // comms: {
  //   dark: 'theme-comms-dark',
  //   light: 'theme-comms-light',
  // },
  empire: {
    dark: "theme-empire-dark",
    light: "theme-empire-light",
  },
  hub88: {
    dark: "theme-hub88-light",
    light: "theme-hub88-light",
  },
  lab: {
    dark: "theme-lab-light",
    light: "theme-lab-light",
  },
  livecasino: {
    dark: "theme-livecasino-dark",
    light: "theme-livecasino-light",
  },
  moonDesign: {
    dark: "theme-moon-dark",
    light: "theme-moon-light",
  },
  partners: {
    dark: "theme-partners-light",
    light: "theme-partners-light",
  },
  sportsbet: {
    dark: "theme-sb-dark",
    light: "theme-sb-light",
  },
  tradeart: {
    dark: "theme-tradeart-dark",
    light: "theme-tradeart-light",
  },
  tradeartMiniBetting: {
    dark: "theme-tradeart-mini-betting",
    light: "theme-tradeart-mini-betting",
  },
  travel: {
    dark: "theme-travel-light",
    light: "theme-travel-light",
  },
  pay: {
    dark: "theme-pay-light",
    light: "theme-pay-light",
  },
} as const;

export type Brand = keyof Themes;
export type Mode = keyof ColorModes;

const useTheme = () => {
  const [themeState, setThemeState] = React.useState({
    brand: "moonDesign" as Brand,
    colorMode: "light" as Mode,
  });

  const setTheme = (className: string) => {
    const previewElements = document.getElementsByTagName("body");
    const themeClasses = [];
    for (let key in themes) {
      const brandName = key as Brand;
      themeClasses.push(themes[brandName].dark);
      themeClasses.push(themes[brandName].light);
    }

    for (let i = 0; i < previewElements.length; i++) {
      themeClasses.map((cl) => {
        previewElements[i].classList.remove(cl);
      });
      previewElements[i].className += ` ${className}`;
    }
    localStorage.setItem("theme", className);
  };

  const getTheme = () => {
    if (!isStorageAvailable("localStorage")) {
      return "";
    }
    return localStorage.getItem("theme");
  };

  const getBrand = () => {
    if (!isStorageAvailable("localStorage")) {
      return "";
    }
    return localStorage.getItem("brand");
  };

  const setBrand = (brand: Brand) => {
    const currentMode = (getMode() || themeState.colorMode) as Mode;
    const className = themes && themes[brand][currentMode];
    setTheme(className);
    setThemeState({
      brand: brand,
      colorMode: themeState.colorMode,
    });
    localStorage.setItem("brand", brand);
  };

  /**
   * Toggle between themes 'dark' and 'light' states
   */
  const toggleMode = () => {
    const localStorageMode =
      isStorageAvailable("localStorage") && localStorage.getItem("themeMode");
    const currentMode = localStorageMode || themeState.colorMode;
    const newColorMode = currentMode === "dark" ? "light" : "dark";
    const className = themes && themes[themeState.brand][newColorMode];
    setTheme(className);
    setThemeState({
      brand: themeState.brand,
      colorMode: newColorMode,
    });
    localStorage.setItem("themeMode", newColorMode);
  };

  const getMode = () => {
    if (!isStorageAvailable("localStorage")) {
      return "";
    }
    return localStorage.getItem("themeMode") || "light";
  };

  return {
    setBrand,
    getBrand,
    toggleDarkLightMode: toggleMode,
    getTheme,
    getMode,
    isDarkThemeEnabled: getMode() === "dark",
  };
};

export default useTheme;

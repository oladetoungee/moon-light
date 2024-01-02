import { test, expect } from "@playwright/test";
import { PLAYWRIGHT_DEFAULT_TIMEOUT } from "@/constants";

const COMPONENT_NAME = "button";

test.beforeEach(async ({ page }, testInfo) => {
  const example = testInfo.title?.split(":")?.[0] ?? "Default";
  await page.goto(`/client/${COMPONENT_NAME}/${example}`);
  await page.waitForTimeout(PLAYWRIGHT_DEFAULT_TIMEOUT);
});
test.afterEach(async ({ page }) => {
  // Cleanup from route
  await page.close();
});
test.describe("Default tests", () => {
  test("Default: should render and match screenshot", async ({ page }) => {
    await expect(page).toHaveScreenshot(`button-Default.png`);
  });

  test("Default: should correctly make the click animation", async ({
    page,
  }) => {
    const btn = await page.getByText("Default");
    const btnPos = await btn.boundingBox();
    await page.mouse.move((btnPos?.x || 0) + 10, (btnPos?.y || 0) + 5, {
      steps: 10,
    });
    await page.mouse.down();
    await page.waitForTimeout(200); // Wait the animation
    const scale = await btn.evaluate((el) => {
      return {
        x: parseFloat(
          window.getComputedStyle(el).getPropertyValue("--tw-scale-x"),
        ),
        y: parseFloat(
          window.getComputedStyle(el).getPropertyValue("--tw-scale-y"),
        ),
      };
    });
    await expect(scale.x).toBe(0.9);
    await expect(scale.y).toBe(0.9);
    // Only on the default we check visually
    await expect(page).toHaveScreenshot(`button-Default-Clicked.png`);
    await page.mouse.up();
  });

  test("DefaultWithClick: should run the callback on the click", async ({
    page,
  }) => {
    let clicked = false;
    page.on("dialog", (dialog) => {
      clicked = true;
      dialog.accept();
    });
    await page.getByText("Default").click();
    await expect(clicked).toBe(true);
  });
});

test.describe("ButtonAsLinkHTML tests", () => {
  test("ButtonAsLinkHTML: should render and match screenshot", async ({
    page,
  }) => {
    await expect(page).toHaveScreenshot(`button-ButtonAsLinkHTML.png`);
  });

  test("ButtonAsLinkHTML: should correctly make the click animation", async ({
    page,
  }) => {
    const btn = await page.getByText("Link HTML element");
    const btnPos = await btn.boundingBox();
    await page.mouse.move((btnPos?.x || 0) + 10, (btnPos?.y || 0) + 5, {
      steps: 10,
    });
    await page.mouse.down();
    const scale = await btn.evaluate((el) => {
      return {
        x: parseFloat(
          window.getComputedStyle(el).getPropertyValue("--tw-scale-x"),
        ),
        y: parseFloat(
          window.getComputedStyle(el).getPropertyValue("--tw-scale-y"),
        ),
      };
    });
    await expect(scale.x).toBe(0.9);
    await expect(scale.y).toBe(0.9);
    await page.mouse.up();
  });
});

test.describe("Variants tests", () => {
  test("Variants: should render and match screenshot", async ({ page }) => {
    await expect(page).toHaveScreenshot(`button-Variants.png`);
  });

  test("Variants: (fill) should correctly make the click animation", async ({
    page,
  }) => {
    const btn = await page.getByText("Fill is default");
    const btnPos = await btn.boundingBox();
    await page.mouse.move((btnPos?.x || 0) + 10, (btnPos?.y || 0) + 5, {
      steps: 10,
    });
    await page.mouse.down();
    const scale = await btn.evaluate((el) => {
      return {
        x: parseFloat(
          window.getComputedStyle(el).getPropertyValue("--tw-scale-x"),
        ),
        y: parseFloat(
          window.getComputedStyle(el).getPropertyValue("--tw-scale-y"),
        ),
      };
    });
    await expect(scale.x).toBe(0.9);
    await expect(scale.y).toBe(0.9);
    await page.mouse.up();
  });

  test("Variants: (outline) should correctly make the click animation", async ({
    page,
  }) => {
    const btn = await page.getByText("Outline");
    const btnPos = await btn.boundingBox();
    await page.mouse.move((btnPos?.x || 0) + 10, (btnPos?.y || 0) + 5, {
      steps: 10,
    });
    await page.mouse.down();
    const scale = await btn.evaluate((el) => {
      return {
        x: parseFloat(
          window.getComputedStyle(el).getPropertyValue("--tw-scale-x"),
        ),
        y: parseFloat(
          window.getComputedStyle(el).getPropertyValue("--tw-scale-y"),
        ),
      };
    });
    await expect(scale.x).toBe(0.9);
    await expect(scale.y).toBe(0.9);
    await page.mouse.up();
  });

  test("Variants: (ghost) should correctly make the click animation", async ({
    page,
  }) => {
    const btn = await page.getByText("Ghost");
    const btnPos = await btn.boundingBox();
    await page.mouse.move((btnPos?.x || 0) + 10, (btnPos?.y || 0) + 5, {
      steps: 10,
    });
    await page.mouse.down();
    const scale = await btn.evaluate((el) => {
      return {
        x: parseFloat(
          window.getComputedStyle(el).getPropertyValue("--tw-scale-x"),
        ),
        y: parseFloat(
          window.getComputedStyle(el).getPropertyValue("--tw-scale-y"),
        ),
      };
    });
    await expect(scale.x).toBe(0.9);
    await expect(scale.y).toBe(0.9);
    await page.mouse.up();
  });
});

test.describe("Sizes tests", () => {
  test("Sizes: should render and match screenshot", async ({ page }) => {
    await expect(page).toHaveScreenshot(`button-Sizes.png`);
  });
});

test.describe("Icons tests", () => {
  test("Icons: should render and match screenshot", async ({ page }) => {
    await expect(page).toHaveScreenshot(`button-Icons.png`);
  });
});

test.describe("FullWidth tests", () => {
  test("FullWidth: should render and match screenshot", async ({ page }) => {
    await expect(page).toHaveScreenshot(`button-FullWidth.png`);
  });
});

test.describe("Disabled tests", () => {
  test("Disabled: should render and match screenshot", async ({ page }) => {
    await expect(page).toHaveScreenshot(`button-Disabled.png`);
  });

  test("Disabled: should not cause any animation on the click", async ({
    page,
  }) => {
    const btn = await page.getByText("Disabled");
    const btnPos = await btn.boundingBox();
    await page.mouse.move((btnPos?.x || 0) + 10, (btnPos?.y || 0) + 5, {
      steps: 10,
    });
    await page.mouse.down();
    const scale = await btn.evaluate((el) => {
      return {
        x: parseFloat(
          window.getComputedStyle(el).getPropertyValue("--tw-scale-x"),
        ),
        y: parseFloat(
          window.getComputedStyle(el).getPropertyValue("--tw-scale-y"),
        ),
      };
    });
    await expect(scale.x).toBe(1);
    await expect(scale.y).toBe(1);
    await page.mouse.up();
  });
});

test.describe("Animations tests", () => {
  test("Animations: should render and match screenshot", async ({ page }) => {
    await expect(page).toHaveScreenshot(`button-Animations.png`, {
      animations: "disabled",
    });
  });

  test("Animations: (progress) click action should make animation", async ({
    page,
  }) => {
    const btn = await page.getByTestId("progress");
    const btnPos = await btn.boundingBox();
    await page.mouse.move((btnPos?.x || 0) + 10, (btnPos?.y || 0) + 5, {
      steps: 10,
    });
    const scale1 = await btn.evaluate((el) => {
      return {
        w: el.getBoundingClientRect().width,
        h: el.getBoundingClientRect().height,
      };
    });
    await page.mouse.down();
    await page.waitForTimeout(200);
    const scale2 = await btn.evaluate((el) => {
      return {
        w: el.getBoundingClientRect().width,
        h: el.getBoundingClientRect().height,
      };
    });
    await expect(scale1.w).not.toBe(scale2.w);
    await expect(scale1.h).not.toBe(scale2.h);

    await page.mouse.up();
  });

  test("Animations: (success) click action should make animation", async ({
    page,
  }) => {
    const btn = await page.getByTestId("success");
    const btnPos = await btn.boundingBox();
    await page.mouse.move((btnPos?.x || 0) + 10, (btnPos?.y || 0) + 5, {
      steps: 10,
    });
    const scale1 = await btn.evaluate((el) => {
      return {
        w: el.getBoundingClientRect().width,
        h: el.getBoundingClientRect().height,
      };
    });
    await page.mouse.down();
    await page.waitForTimeout(200);
    const scale2 = await btn.evaluate((el) => {
      return {
        w: el.getBoundingClientRect().width,
        h: el.getBoundingClientRect().height,
      };
    });
    await expect(scale1.w).not.toBe(scale2.w);
    await expect(scale1.h).not.toBe(scale2.h);

    await page.mouse.up();
  });

  test("Animations: (error) click action should make animation", async ({
    page,
  }) => {
    const btn = await page.getByTestId("success");
    const btnPos = await btn.boundingBox();
    await page.mouse.move((btnPos?.x || 0) + 10, (btnPos?.y || 0) + 5, {
      steps: 10,
    });
    const scale1 = await btn.evaluate((el) => {
      return {
        w: el.getBoundingClientRect().width,
        h: el.getBoundingClientRect().height,
      };
    });
    await page.mouse.down();
    await page.waitForTimeout(200);
    const scale2 = await btn.evaluate((el) => {
      return {
        w: el.getBoundingClientRect().width,
        h: el.getBoundingClientRect().height,
      };
    });
    await expect(scale1.w).not.toBe(scale2.w);
    await expect(scale1.h).not.toBe(scale2.h);

    await page.mouse.up();
  });

  test("Animations: (pulse) click action should make animation", async ({
    page,
  }) => {
    const btn = await page.getByTestId("pulse");
    const btnPos = await btn.boundingBox();
    await page.mouse.move((btnPos?.x || 0) + 10, (btnPos?.y || 0) + 5, {
      steps: 10,
    });
    const scale1 = await btn.evaluate((el) => {
      return {
        w: el.getBoundingClientRect().width,
        h: el.getBoundingClientRect().height,
      };
    });
    await page.mouse.down();
    await page.waitForTimeout(200);
    const scale2 = await btn.evaluate((el) => {
      return {
        w: el.getBoundingClientRect().width,
        h: el.getBoundingClientRect().height,
      };
    });
    await expect(scale1.w).not.toBe(scale2.w);
    await expect(scale1.h).not.toBe(scale2.h);

    await page.mouse.up();
  });
});

test.describe("Multiline tests", () => {
  test("Multiline: should render and match screenshot", async ({ page }) => {
    await expect(page).toHaveScreenshot(`button-Multiline.png`);
  });
});

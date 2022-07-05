import { findPackages, findSentinel } from "../src/common";
import { setFixture, unsetFixture } from "./helper";

describe("findPackages", () => {
  test("returns an empty array when passed no patterns", () => {
    expect(findPackages(undefined, "/")).resolves.toEqual([]);
  });
});

describe("findSentinel", () => {
  afterEach(() => {
    unsetFixture();
  });

  test("returns sentinel for Lerna", async () => {
    setFixture("lerna-packages");
    expect(await findSentinel()).toMatch(/[/\\]lerna.json$/);

    setFixture("lerna-workspaces");
    expect(await findSentinel()).toMatch(/[/\\]lerna.json$/);
  });

  test("returns sentinel for npm", async () => {
    setFixture("npm");
    expect(await findSentinel()).toMatch(/[/\\]package-lock.json$/);
  });

  test("returns sentinel for pnpm", async () => {
    setFixture("pnpm");
    expect(await findSentinel()).toMatch(/[/\\]pnpm-workspace.yaml$/);
  });

  test("returns sentinel for Rush", async () => {
    setFixture("rush");
    expect(await findSentinel()).toMatch(/[/\\]rush.json$/);
  });

  test("returns sentinel for Yarn", async () => {
    setFixture("yarn");
    expect(await findSentinel()).toMatch(/[/\\]yarn.lock$/);
  });
});
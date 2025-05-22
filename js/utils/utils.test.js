import { describe, it, expect, beforeEach } from "vitest";
import { isActivePath } from "./userInterface";

import { getUserName } from "./storage";

describe("isActivePath", () => {
  it("returns true when path matches href exactly", () => {
    expect(isActivePath("/", "/")).toBe(true);
  });

  it('returns true for "/" when path is "/" or "/index.html"', () => {
    expect(isActivePath("/index.html", "/")).toBe(true);
    expect(isActivePath("/", "/")).toBe(true);
  });

  it("returns true when current path includes the href", () => {
    expect(isActivePath("/venues/123", "/venues")).toBe(true);
  });

  it("returns false when paths do not match", () => {
    expect(isActivePath("/about", "/login")).toBe(false);
  });
});

describe("getUserName", () => {
  beforeEach(() => localStorage.clear());

  it("returns the name from the user object in localStorage", () => {
    localStorage.setItem("user", JSON.stringify({ name: "Sneza" }));
    expect(getUserName()).toBe("Sneza");
  });

  it("returns null when no user exists in localStorage", () => {
    expect(getUserName()).toBe(null);
  });
});

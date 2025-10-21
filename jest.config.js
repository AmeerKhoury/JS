import { createDefaultPreset } from "ts-jest";

const tsJestTransformCfg = createDefaultPreset({ useESM: true }).transform;

/** @type {import("jest").Config} **/
export default {
  testEnvironment: "node",
  transform: {
    ...tsJestTransformCfg,
  },
   moduleFileExtensions: ["js", "ts"],
  testMatch: ["**/Test/**/*.test.(js|ts)"]
};

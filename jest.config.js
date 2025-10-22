import { createDefaultPreset } from "ts-jest";

const tsJestTransformCfg = createDefaultPreset({ useESM: true }).transform;

export default {
  testEnvironment: "node",
  transform: {
    ...tsJestTransformCfg,
  },
  moduleFileExtensions: ["js", "ts"],
  testMatch: ["**/tests/**/*.test.(js|ts)"],
  extensionsToTreatAsEsm: [".ts"],
};

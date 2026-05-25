function mergeJsBasicsConfig(defaultConfig, overrideConfig) {
  const merged = {
    ...defaultConfig,
    ...overrideConfig
  };

  // Default retries to 0 if missing in both objects
  if (merged.retries === undefined) {
    merged.retries = 0;
  }

  return merged;
}

console.log(mergeJsBasicsConfig({"env":"qa"}, {"timeout":5000}));
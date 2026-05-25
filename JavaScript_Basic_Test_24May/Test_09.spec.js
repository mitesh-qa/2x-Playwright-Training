function buildJsBasicsRunLabel(suiteName, environment, buildNumber) {
  const trimmedSuite = suiteName.trim();
  const lowerEnv = environment.trim().toLowerCase();
  const build = `build-${buildNumber}`;

  return `${trimmedSuite} | ${lowerEnv} | ${build}`;
}

console.log(buildJsBasicsRunLabel(" Smoke Suite ", " STAGING ", 42));

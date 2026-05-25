function filterSupportedJsBasicsTopics(...topics) {
 const aliasMap = {
    npm: "npm",
    node: "node",
    v8: "v8",
  };

  return [...new Set(
    topics
      .map(topic => aliasMap[topic.trim().toLowerCase()])
      .filter(Boolean)
  )];
}

console.log(filterSupportedJsBasicsTopics("node", "v8"));
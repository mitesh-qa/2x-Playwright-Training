function buildJsBasicsChecklist(items) {
  const checklist = [];
  let count = 1;

  for (let i = 0; i < items.length; i++) {
    const task = items[i].trim();

    if (task) {
      checklist.push(`${count}. ${task} - TODO`);
      count++;
    }
  }

  return checklist;
}

console.log(buildJsBasicsChecklist(["Install Node","Create GitHub repo"]));
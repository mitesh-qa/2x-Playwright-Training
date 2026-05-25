function createUniqueJsBasicsTags(tags) {

    const uniqueTags = [];

    for (let i = 0; i < tags.length; i++) {
        const tag = tags[i].trim().toLowerCase();

    if (tag && !uniqueTags.includes(tag)) {
        uniqueTags.push(tag);
    }
    }

  return uniqueTags;
}

console.log(createUniqueJsBasicsTags([" Smoke ","smoke","Regression"]));


function normalizeJsBasicsLabel(label) {
    
   const prefix = "js-basic";
    const convertedText = prefix + "-" + label.trim().replace("-", "");

        const text = convertedText
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")   // replace special chars/groups with -
        .replace(/^-+|-+$/g, ""); 

        return text;
}


console.log(normalizeJsBasicsLabel("---Search@@Box---"));

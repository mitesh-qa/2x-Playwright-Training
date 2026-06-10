function isAnagrams(name1,name2) {
    const str1 = name1.toLowerCase().split('').sort().join('');
    const str2 = name2.toLowerCase().split('').sort().join('');

    if(name1 === name2) {
        console.log(name1 + "and" + name2 + " is Anagram");
    }
    else {
        console.log(name1 + " and " + name2 + " is NOT Anagram");
    }
}

isAnagrams("mitesh","dharika");

// /creating a function to record daily events and add to the list
var diary = [];
function addEntry(events){
    diary.push({events})
}
addEntry(["work","icecream","church","running","sleeping", "baking"]);
addEntry(["sleep","tea","pizza","walking","television", "coding"]);

addEntry(["work","icecream","church","running","sleeping", "baking"] );

addEntry(["sleep","tea","pizza","walking","television", "coding"]);

addEntry(["work","wine","touched a tree","running","television", "baking"]);

addEntry(["work","reading","pizza","running","movies", "church"]);

addEntry(["work","coding","touched a tree","walking","television", "snacking"]);

addEntry(["tea","","pizza","running","sky diving", "church"]);

addEntry(["work","icecream","sleeping","running","movies", "snacking"]);

addEntry(["work","snacking","coding","running","television", "karaoke"]);

addEntry(["weekend","wine","lunch date","running","visit", "snacking"]);

addEntry(["weekend","barbeque","pizza","sleeping","television", "coding"]);

addEntry(["work","icecream","sleeping","running","movies", "snacking"]);

for(i=0;i<diary.length;i++){
    if (diary[i].events.includes("pizza")===true){
        console.log("jaquel turned into a werewolf")
    }
}
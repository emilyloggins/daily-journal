console.log("hi");

const JournalEntry = [
    {
    date: "April 14, 2019",
    titleConcepts: "DOM",
    entry: "Everything was great!",
    mood: "excited"
},
{ 
    date: "April 15, 2019",
    titleConcepts: "query selectors",
    entry: "Everything sucked.",
    mood: "defeated"
},
{
    date: "April 16, 2019",
    titleConcepts: "nothin",
    entry: "meh",
    mood: "content"
}
]

const makeJournalEntryComponent = function(date, titleConcepts, entry, mood) {
    return `
    <h2>${titleConcepts}</h2>
    <p>${date}</p>
    <p>${mood}</p>
    <p>${entry}</p>
    `
}

const entryContainer = document.querySelector("#container")


for (let i = 0; i < journalEntry.length; i++) {
    const entries = journalEntry[i]
    entryContainer.innerHTML += makeJournalEntryComponent(
        entries.date,
        entries.titleConcepts,
        entries.entry,
        entries.mood
    )
}




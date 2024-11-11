export function generateLoremIpsum(length = 1000) {
    const loremWords = [
        "Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit",
        "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore",
        "magna", "aliqua", "Ut", "enim", "ad", "minim", "veniam", "quis", "nostrud",
        "exercitation", "ullamco", "laboris", "nisi", "ut", "aliquip", "ex", "ea",
        "commodo", "consequat", "Duis", "aute", "irure", "dolor", "in", "reprehenderit",
        "in", "voluptate", "velit", "esse", "cillum", "dolore", "eu", "fugiat", "nulla",
        "pariatur"
    ];
  
    let text = "Lorem ipsum ";
    while (text.length < length) {
      text += loremWords[Math.floor(Math.random() * loremWords.length)] + " ";
    }
    return text.trim().substring(0, length);
  }
  
import marked from 'marked' 

const rawNotes = [
  {
    name: "Intro To R",
    link: "intro-to-r",
    text: require('./1-intro-to-r.md'),
  },
  {
    name: "Vectors",
    link: "vectors",
    text: require('./2-vectors.md'),
  },
  {
    name: "Matrices",
    link: "matrices",
    text: require('./3-matrices.md'),
  },
  {
    name: "Factors",
    link: "factors",
    text: require('./4-factors.md'),
  }
]

const notes = {
  text: marked(rawNotes.map(note => note.text).join('')),
  tableOfContents: rawNotes.map(n => `<a href="#${n.link}">${n.link}</a>`).join(''),
}

export default notes 


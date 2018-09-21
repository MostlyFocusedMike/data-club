import marked from 'marked' 
import names from './names'

const rawNotes = names.map((name, idx) => {
  const dashed = name.replace(/ /g, "-").toLowerCase()
  return {
    name: name,
    link: dashed,
    text: `\n# ${name}\n${require(`./markdown/${idx}-${dashed}.md`)}`,
  }
})

export default {
  text: marked(rawNotes.map(note => note.text).join('')),
  tableOfContents: rawNotes.map(n => `<a href="#${n.link}">${n.name}</a>`).join(''),
}

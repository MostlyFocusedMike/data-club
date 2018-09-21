import rNotes from './markdown/r-notes'
import marked from 'marked'

 
 const myNotes = marked(`
 # I am a notes 
 ## I am sub header 
 [I am link](https://www.statmethods.net/interface/workspace.html) 
 `)

 const noteHolder = `
 <div id="test">
${myNotes}
</div>

 `

class notesCtrl{
  constructor($sce) {
    // we need to use $sce because if we don't, angular will filter out .md
    // auto generated header ids, which would make navigation impossible
    this.text = $sce.trustAsHtml(rNotes.text);
    this.notes = rNotes
    this.tableOfContents = rNotes.tableOfContents;
    this.test = $sce.trustAsHtml(noteHolder);
  }
}

export default notesCtrl;
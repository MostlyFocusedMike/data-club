import rNotes from './r-notes'

class notesCtrl{
  constructor($sce) {
    // we need to use $sce because if we don't, angular will filter out .md
    // auto generated header ids, which would make navigation impossible
    this.text = $sce.trustAsHtml(rNotes.text);
    this.tableOfContents = rNotes.tableOfContents;
  }
}

export default notesCtrl;
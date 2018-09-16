import introToR from './markdown/r-notes/1-intro-to-r.md'
import vectors from './markdown/r-notes/2-vectors.md'
import matrices from './markdown/r-notes/3-matrices.md'
import factors from './markdown/r-notes/4-factors.md'

  
  const rNotes = 
    introToR +
    vectors +
    matrices +
    factors 
  
  
  const notesCtrl = function($sce) {
    // we need to use $sce because if we don't, angular will filter out .md
    // auto generated header ids, which would make navigation impossible
    this.notes = $sce.trustAsHtml(rNotes);
  }

export default notesCtrl;
(function(exports){
  function NoteList(){
    this.notes = [];
  };

  NoteList.prototype.getNotes = function() {
    return this.notes;
  };

  NoteList.prototype.pushToNotes = function(note) {
    this.notes.push(note);
  };

  NoteList.prototype.getSingleNoteHtml = function(note_id) {
    var note

    for (var i = 0; i < this.notes.length; i++) {
      if (this.notes[i].uniqueId === note_id) {
        note = new SingleNoteView(this.notes[i])
        break
      }
    }

    return note.htmlNote()
  };


  exports.NoteList = NoteList;
})(this);

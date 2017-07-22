(function(exports) {
  function NoteController(noteList) {
    this.noteList = noteList;
    this.noteListView = new NoteListView(noteList);
  };

  NoteController.prototype.getLinkHtml = function() {
    return this.noteListView.toHtml();
  };

  NoteController.prototype.showSingleNoteHtml = function(note_id) {
    return this.noteList.getSingleNoteHtml(note_id);
  };

  exports.NoteController = NoteController;
})(this);

(function(exports) {
  function NoteController(noteList) {
    this.noteList = noteList;
    this.noteListView = new NoteListView(noteList);
  };

  NoteController.prototype.getNoteList = function() {
    return this.noteList;
  };

  NoteController.prototype.getNoteListView = function() {
    return this.noteListView;
  };

  NoteController.prototype.getLinkHtml = function() {
    return this.noteListView.toHtml();
  };

  

  exports.NoteController = NoteController;
})(this);

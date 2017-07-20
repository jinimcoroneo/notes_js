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

  NoteController.prototype.getNLVHtml = function() {
    var string = this.noteListView.toHtml();
    this.addNoteToPage(string);
  };

  NoteController.prototype.addNoteToPage = function(html) {
    document.getElementById("app").innerHTML = html;
  };

  exports.NoteController = NoteController;
})(this);

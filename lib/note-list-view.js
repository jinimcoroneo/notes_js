(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList;
  };

NoteListView.prototype.toHtml = function() {
  if (this.noteList.getNotes().length >= 1) {
    var notesHtml = []
    this.noteList.notes.forEach(function(note){
      notesHtml.push("<li><a href='#" + note.uniqueId + "'>" + note.text.substring(0, 20) + "</a></li>");
    });
    return this._getHtml(notesHtml);
  };
};

NoteListView.prototype._getHtml = function(html) {
  return "<ul>" + html.join("") + "</ul>"
};

exports.NoteListView = NoteListView;
})(this);

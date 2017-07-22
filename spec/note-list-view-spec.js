function testNoteListView() {
  var note = new Note("Note message");
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.noteList == noteList)
};

testNoteListView();

function testoHTML() {
  var note = new Note("Note message");
  note.uniqueId = 0
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
  noteList.pushToNotes(note);
  assert.isTrue(noteListView.toHtml() == "<ul><li><a href='#0'>Note message</a></li></ul>")
};

testoHTML();

function testoMultipleHTML() {
  var note = new Note("Note message");
  note.uniqueId = 0
  var note2 = new Note("Please fucking work!!!!!");
  note2.uniqueId = 1
  var noteList = new NoteList();
  noteListView = new NoteListView(noteList);
  noteList.pushToNotes(note);
  noteList.pushToNotes(note2);
  var noteListView = new NoteListView(noteList);

  assert.isTrue(noteListView.toHtml() === "<ul><li><a href='#0'>Note message</a></li><li><a href='#1'>Please fucking work!</a></li></ul>")
}

testoMultipleHTML();

function testtoHtmlNoNoteModels() {
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.toHtml() == null)
}

testtoHtmlNoNoteModels();

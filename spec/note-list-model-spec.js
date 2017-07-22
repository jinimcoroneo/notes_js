function testNoteList() {
  var noteList = new NoteList();
  assert.isTrue(Array.isArray(noteList.notes));
};

testNoteList();

function testGetNotes() {
  var noteList = new NoteList();
  assert.isTrue(noteList.getNotes().length === 0);
};

testGetNotes();

function testPushToNotes() {
  var note = new Note("Too sexy to code");
  var noteList = new NoteList();
  noteList.pushToNotes(note);
  assert.isTrue(noteList.notes.length === 1);
};

testPushToNotes();

function testGetSingleNoteHtml() {
  var note = new Note("Too sexy to code");
  note.uniqueId = 0
  var noteList = new NoteList();
  noteList.pushToNotes(note);
  assert.isTrue(noteList.getSingleNoteHtml(note.uniqueId) === "<div>Too sexy to code</div>")
}

testGetSingleNoteHtml();

function testNoteController() {
  var note = new Note("I hate children")
  var noteList = new NoteList();
  noteList.pushToNotes(note);
  var controller = new NoteController(noteList);

  assert.isTrue(controller.noteList === noteList);
};

testNoteController();

function testGetLinkHtml() {
  var note = new Note("no mocks!")
  note.uniqueId = 0
  var noteList = new NoteList();
  noteList.pushToNotes(note);
  var controller = new NoteController(noteList);
  assert.isTrue(controller.getLinkHtml() === "<ul><li><a href='#0'>no mocks!</a></li></ul>")
}

testGetLinkHtml();

function testShowSingleNoteHtml() {
  var note = new Note("no mocks!");
  note.uniqueId = 0
  var noteList = new NoteList();
  noteList.pushToNotes(note);
  var controller = new NoteController(noteList);
  assert.isTrue(controller.showSingleNoteHtml(0) === "<div>no mocks!</div>")
}

testShowSingleNoteHtml();

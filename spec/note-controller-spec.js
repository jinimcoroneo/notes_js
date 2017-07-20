function testNoteController() {
  var note = new Note("I hate children")
  var noteList = new NoteList();
  noteList.pushToNotes(note);
  var controller = new NoteController(noteList);

  assert.isTrue(controller.noteList === noteList);
};

testNoteController();

function testGetNLVHtml() {
  var note = new Note("no mocks!")
  var noteList = new NoteList();
  noteList.pushToNotes(note);
  var controller = new NoteController(noteList);

  assert.isTrue(controller.getNLVHtml() === "<ul><li><div>no mocks!</div></li></ul>")
}

testGetNLVHtml();

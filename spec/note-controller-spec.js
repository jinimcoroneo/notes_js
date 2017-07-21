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
  var noteList = new NoteList();
  noteList.pushToNotes(note);
  var controller = new NoteController(noteList);
  assert.isTrue(controller.getLinkHtml() === "<ul><li><a href='#12'>no mocks!</a></li></ul>")
}

testGetLinkHtml();

function testGetSingleNoteViewHtml() {
  var note = new Note("no mocks!");
  var noteList = new NoteList();
  noteList.pushToNotes(note);
  var controller = new NoteController(noteList);
  assert.isTrue(controller.getSingleNoteViewHtml() === "<div>no mocks!</div>")
}

testGetSingleNoteViewHtml();

// function testCreateSingleNoteView() {
//   var note = new Note("no mocks!");
//   var noteList = new NoteList();
//   noteList.pushToNotes(note);
//   var controller = new NoteController(noteList);
//   assert.isTrue(controller.createSingleNoteView === )
// }

testCreateSingleNoteView();

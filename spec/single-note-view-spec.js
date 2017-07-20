function testSingleNoteView() {
  var singleNote = new Note("boreeeed");
  var singleNoteView = new SingleNoteView(singleNote);
  assert.isTrue(singleNoteView.note.text === "boreeeed" );
};

testSingleNoteView();

function testHtmlNote() {
  var singleNote = new Note("boreeeed");
  var singleNoteView = new SingleNoteView(singleNote);
  assert.isTrue(singleNoteView.htmlNote() === "<div>boreeeed</div>");
};

testHtmlNote();

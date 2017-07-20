function testNoteTakeText() {
  var note = new Note("Javascript is sexy!");
  assert.isTrue(note.text === "Javascript is sexy!");
};

testNoteTakeText();

function testCreateUniqueId() {
  var note = new Note("My unique ID is 1!");
  assert.isTrue(note.uniqueId === 1);
};

testCreateUniqueId();

function testGetText() {
  var note = new Note("Javascript is sexy!");
  assert.isTrue(note.getText() === "Javascript is sexy!");
};

testGetText();

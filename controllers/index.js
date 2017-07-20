var note = new Note("I hate children");
var noteList = new NoteList;
noteList.pushToNotes(note);
var controller = new NoteController(noteList);

window.onload = function() {
  controller.getNLVHtml();
};

var note = new Note("I like nipple piercings");
var noteList = new NoteList;
noteList.pushToNotes(note);
var controller = new NoteController(noteList);

window.onload = function() {
  document.getElementById("app").innerHTML = controller.getLinkHtml();
}

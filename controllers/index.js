var note = new Note("I like nipple piercings");
var note2 = new Note("This is the second note");
var noteList = new NoteList;
noteList.pushToNotes(note);
noteList.pushToNotes(note2);
var controller = new NoteController(noteList);

window.onload = function() {
  document.getElementById("app").innerHTML = controller.getLinkHtml();

  window.addEventListener('hashchange', function(evt) {
      console.log(evt)
  });
};

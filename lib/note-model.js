(function(exports) {
  function Note(text){
    this.text = text;
    this.uniqueId = this.createUniqueId();
  };

  var idCounter = 0;

  Note.prototype.getText = function() {
    return this.text;
  };

  Note.prototype.createUniqueId = function() {
    return idCounter ++;
  };


  exports.Note = Note;
})(this);

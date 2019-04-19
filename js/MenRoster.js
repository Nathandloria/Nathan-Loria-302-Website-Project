function Player(name, year) {
  "use strict";
  this.name = name;
  this.year = year;
}
(function() {
  "use strict";
  var Mensplayers = [
    new Player("David Ahlers", "Sophomore"),
    new Player("Hirotaka Doi", "Sophomore"),
    new Player("Noah Goodwin-Bain", "Junior"),
    new Player("Charles Johnson", "Junior"),
    new Player("Ethan Kennelly", "Junior"),
    new Player("Mitchell Lachat", "Senior"),
    new Player("Nathan Loria", "Sophomore"),
    new Player("Ian Manning", "Sophomore"),
    new Player("Ben Ramsey", "Sophomore"),
    new Player("Eli Smith", "Junior")
  ];
  document.write("<th>Name:</th>");
  document.write("<th>Year:</th>");
  for (var i = 0; i < Mensplayers.length; i++) {
    var p = Mensplayers[i];
    document.write("<tr scope='row'>");
    document.write("<td>" + p.name + "</td>");
    document.write("<td>" + p.year + "</td>");
    document.write("</tr>");
  }
})();

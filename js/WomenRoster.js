function Player(name, year) {
  "use strict";
  this.name = name;
  this.year = year;
}
(function() {
  "use strict";
  var Womensplayers = [
    new Player("Sophie Adams", "Sophomore"),
    new Player("Victoria Bajek", "Junior"),
    new Player("Emily Brady", "Junior"),
    new Player("Alexis Caponi", "Sophomore"),
    new Player("Paige Genewick", "Sophomore"),
    new Player("Jacqueline Kelley-Cogde", "Senior"),
    new Player("Megan Kresse", "Sophomore"),
    new Player("Gabrielle Kuntz", "Senior"),
    new Player("Jordyn Miller", "Sophomore"),
    new Player("Molly Nelson", "Junior"),
    new Player("Katie Nichols", "Sophomore"),
    new Player("Sydney Winter", "Sophomore"),
    new Player("Katherine Wise", "Junior")
  ];
  document.write("<th>Name:</th>");
  document.write("<th>Year:</th>");
  for (var i = 0; i < Womensplayers.length; i++) {
    var wp = Womensplayers[i];
    document.write("<tr scope='row'>");
    document.write("<td>" + wp.name + "</td>");
    document.write("<td>" + wp.year + "</td>");
    document.write("</tr>");
  }
})();

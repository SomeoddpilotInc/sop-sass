var sass = require("node-sass"),
    fs = require("fs");

// test cases

var cases = fs.readdirSync("test/cases").filter(function(file){
  return file.match(/\.scss$/);
}).map(function(file){
  return file.replace(".scss", "");
});

describe("integration", function(){
  cases.forEach(function(test){
    var name = test.replace(/[-.]/g, " ");
    it(name, function(){
      var path = "test/cases/" + test + ".scss";
      var scss = fs.readFileSync(path, "utf8").replace(/\r/g, "");
      var css = fs.readFileSync("test/cases/" + test + ".css", "utf8").replace(/\r/g, "").trim();

      var style = sass.renderSync({
        file: path,
        outputStyle: 'expanded',
        includePaths: [ 'lib/', 'lib/sop-sass/' ]
      });

      style.css.toString().trim().should.equal(css);
    });
  });
});

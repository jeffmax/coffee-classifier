describe("Training", function(){
    var c, 
    python_documents = [
        "Python for dummies",
        "Learning python the hard way"
    ],
    java_documents = ["Java for JavaScript programmers",
                      "Verbose Java",
                      "Implementing Java factory interfaces"];

   beforeEach(function(){
        c = new NaiveBayesClassifier();
   });

   it("learns", function() {
       var index, internal;
       for (index in python_documents){
           d = python_documents[index];
           c.train(d, 'python');
       }
       for (index in java_documents){
           d = java_documents[index];
           c.train(d, 'java');
       }
       expect(c.classify("Learn PYTHON in 3 years")).toEqual("python");
       expect(c.classify("A cup of Java")).toEqual("java");
       internal = c.to_object();
       expect(internal.klass_count["python"]).toEqual(2);
       expect(internal.klass_count["java"]).toEqual(3);
   });
});

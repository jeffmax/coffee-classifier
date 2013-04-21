This is an implementation of a Naive Bayes classifier in CoffeeScript.


## Dependencies

This project will use PorterStemmer1980.js (included as a git submodule in this project) if it finds the stemmer variable in the global namespace, otherwise stemming is not performed.

## Implementation

Documents have stop-words removed and are stemmed before training and classifying.

## Usage
###Basic usage
```coffeescript
c = new NaiveBayesClassifier()
c.train("Something interesting to you", "mundane sentence")
klass = c.classify("another phrase")
```

### Other Features
#### Saving a trained classifier
Call the `to_object` function to get an object representing the internal data of the classifier.  The object can be saved and passed to the constructor to re-constitute the classifier at another time.

```coffeescript
save = c.to_object()
c2 = new NaiveBayesClassifier(save)
```
#### Untraining
Call the `untrain` method with a document and class to untrain it. This might be useful for applications that use a classifier but need to support undo.

```coffeescript
c = new NaiveBayesClassifier()
c.untrain("Something interesting to you", "mundane sentence")

```
#### Renaming a class
You can rename a class in the classifier. For example, you were previously training documents with the class name of "phyics" and realized your spelling mistake, you could do the following:

```coffeescript
c.rename_class('phyics', 'physics')
````






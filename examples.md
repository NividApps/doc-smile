Examples
========

Various examples of Bootstrap styling applied to Sphinx constructs. You
can view the [source](./_sources/examples.txt) of this page to see the
specific reStructuredText used to create these examples.

Headings
--------

This is a first level heading (`h1`).

### Sub-Heading

This is a second level heading (`h2`).

#### Sub-Sub-Heading

This is a third level heading (`h3`).

#### Question1

\<dl\> This is a third level heading (`h3`). :

    multiline
    code text

\</dl\>

### Sub-Heading

    multiline
    code text

term 2
:   Definition 2, paragraph 1.

Code
----

The Sphinx Bootstrap Theme uses Bootstrap styling for `inline code text`
and :

    multiline
    code text

Here's an included example with line numbers.

It also works with existing Sphinx highlighting:

``` {.sourceCode .html}
<html>
  <body>Hello World</body>
</html>
```

``` {.sourceCode .python}
def hello():
    """Greet."""
    return "Hello World"
```

``` {.sourceCode .javascript}
/**
 * Greet.
 */
function hello(): {
  return "Hello World";
}
```

Admonitions
-----------

The Sphinx Bootstrap Theme uses the Bootstrap `alert` classes for Sphinx
admonitions.

### Note

> **note**
>
> This is a **note**.

### Todo

### Warning

> **warning**
>
> This is a **warning**.

### Danger

> **danger**
>
> This is **danger**-ous.

Footnotes
---------

I have footnoted a first item [\#f1]\_ and second item [\#f2]\_. This
also references the second item [\#f2]\_.

**Footnotes**

Icons
-----

Icons are different in Bootstrap 2 and 3, so you will only see an icon
below for the version of Bootstrap that we used to build these docs.

### Bootstrap 2

The following template HTML:

``` {.sourceCode .html}
<span class="icon-star-empty"></span>
```

translates to a neat star:

<span class="icon-star-empty"></span>
### Bootstrap 3

The following template HTML:

``` {.sourceCode .html}
<span class="glyphicon glyphicon-star-empty"></span>
```

translates to a neat star:

<span class="glyphicon glyphicon-star-empty"></span>
Tables
------

Here are some examples of Sphinx
[tables](http://sphinx-doc.org/rest.html#rst-tables). The Sphinx
Bootstrap Theme removes all Sphinx `docutils` classes and replaces them
with the default Bootstrap `table` class. You can add additional table
classes using the Sphinx `cssclass::` directive, as demonstrated in the
following tables.

### Grid

A "**bordered**" grid table:

  Header1                   Header2       Header3     Header4
  ------------------------- ------------- ----------- -----------
  row1, cell1               cell2         cell3       cell4
  row2 ...                  ...           ...         
  ...                       ...           ...         

which uses the directive:

    .. cssclass:: table-bordered

### Simple

A simple "**striped**" table:

  H1      H2      H3
  ------- ------- -------
  cell1   cell2   cell3
  ...     ...     ...
  ...     ...     ...

which uses the directive:

    .. cssclass:: table-striped

And a "**hoverable**" table:

  H1      H2      H3
  ------- ------- -------
  cell1   cell2   cell3
  ...     ...     ...
  ...     ...     ...

which uses the directive:

    .. cssclass:: table-hover

Code Documentation
------------------

An example Python function.

An example JavaScript function.

``` {.sourceCode .html}
<span class="icon-star-empty"></span>
```

#### Question 1

Write the answer here........

``` {.sourceCode .javascript}
/**
 * Greet.
 */
function hello(): {
  return "Hello World";
}
```

``` {.sourceCode .language-javascript}
/**
 * Greet.
 */
function hello(): {
  return "Hello World";
}
```

**LotteryMongo.kmongo**

``` {.sourceCode .scala}
collection Lottery {
    property lotteryName:String
    property amount:Int
    property participantList:String*
    property winner:String?
    property open:Boolean
}
```

``` {.sourceCode .javascript}
section lottery {
    mongo-module LotteryMongo at com.metastay.lotterymongo
}
```

**LotteryMongoTestSuite.scala**

``` {.sourceCode .scala}
test("lottery", Tag("lottery")) {
  LotteryWriter().drop()
  val lotteryName = "KarnatakaLotto"
  val row = LotteryRow(lotteryName = lotteryName, amount = 20000, open = true)
  LotteryWriter().save(row);
  assert(LotteryQuery().count == 1)

  //Add Participant
  val q = LotteryQuery().lotteryName.is(lotteryName)
  val u = LotteryUpdate().participantList.addToSet("John")
  LotteryWriter().updateOne(q, u)
  assert(q.findOne.get.participantList.size == 1)

  //Remove Lottery
  //LotteryWriter().remove(q)
  //assert(LotteryQuery().count == 0)
}
```

``` {.sourceCode .console}
$ smile new Lottery
$ cd lottery
$ sbt
```

![alternate text](images/biohazard.png)

![alternate text](images/biohazard.png)

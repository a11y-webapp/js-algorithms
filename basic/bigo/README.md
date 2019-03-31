## BigO

Big O notation is an instrument used to calculate the complexity of the algorithm.
It could be used to measure time and space complexity.

**Time complexity** allows formalizing the growth of the algorithm's runtime as the input growth. 

**Space complexity** refers to space required by the algorithm, not including space taken by the inputs.
 * Booleans, numbers, undefined, null = constant space O(1)
 * Strings = O(n) where n is the length of the string
 * Referance types are also O(n) where n is the length for arrays and number of keys for objects


### Objects

A Developer should choose object when an order of the key/value pairs is not important.
* Insertion = O(1)
* Removal = O(1)
* Access = O(1)
* Searching = O(n)

### Arryas

Ordered Data structures.
* Insertion = at the begginig O(n), at the end O(1)
* Removal = at the begginig O(n), at the end O(1)
push()/pop() are always faster than shift()/unshift()
* Access = O(1)
* Searching = O(n)


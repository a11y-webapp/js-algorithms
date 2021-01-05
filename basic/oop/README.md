# Interface

Interface is a structure that defines the contract in your application. It defines the syntax for classes to follow. 
Classes that are extended from an interface must follow the structure provided by their interface 
(the implementing class can define extra properties and methods, but at least it must define all the members of an interface). 
The TypeScript compiler does not convert interface to JavaScript. It uses interface for type checking. This is also known as "duck typing" or "structural subtyping".

  - Interfaces can be used to define a veriable type, function type or array type
  - They can have optional and readonly properties
  - Interfaces can extend one or more interfaces. This makes writing interfaces flexible and reusable.
  
## TypeScript Interface vs Abstract Class

|Interface                                       	| Abstract Class                                            | 
|-------------------------------------------------|-----------------------------------------------------------|
| All members are abstract                        | Some members are abstract and some are fully implemented  |
| Interfaces support multiple inheritances.	      | Abstract class does not support multiple inheritances     |
| TypeScript Interface has zero JavaScript code  that means it is only available in TypeScript and does not produce any code in compiled JavaScript file. | Abstract class compile to JavaScript functions            |
| Interfaces are generic in nature. They can be implemented by any class for example IClone interface can be implemented by any class like business objects, database classes | Abstract classes are related. For example ViewModelBase is an abstract, class then we know this class will only inherits by ViewModels. |

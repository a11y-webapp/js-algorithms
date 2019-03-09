<h2>Design Patterns</h2>

<h3>SOLID</h3>

<p>SOLID is acronym for five design principles intended to make software designs more understandable, flexible and maintainable.</p>

<ul>
    <li><strong>Single responsibility principle.</strong> It states that every module, class, or function should have responsibility over a single part of the functionality provided by the software, and that responsibility should be entirely encapsulated by the class.</li>
    <li><strong>Open–closed principle.</strong> It states "software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification"; that is, such an entity can allow its behaviour to be extended without modifying its source code.</li> 
    <li><strong>Liskov substitution principle.</strong> Stating that, in a computer program, if S is a subtype of T, then objects of type T may be replaced with objects of type S (i.e. an object of type T may be substituted with any object of a subtype S) without altering any of the desirable properties of the program (correctness, task performed, etc.). </li>
    <li><strong>Interface segregation principle.</strong> "Many client-specific interfaces are better than one general-purpose interface." No client should be forced to depend on methods it does not use. ISP splits interfaces that are very large into smaller and more specific ones so that clients will only have to know about the methods that are of interest to them. Such shrunken interfaces are also called role interfaces.</li>
    <li><strong>Dependency inversion principle</strong> High-level modules should not depend on low-level modules. Both should depend on abstractions. Abstractions should not depend on details. Details should depend on abstractions.</li>
</ul>

<h3>GRASP</h3>

<p>General Responsibility Assignment Software Patterns (or Principles), abbreviated GRASP, consist of guidelines for assigning responsibility to classes and objects in object-oriented design. It is not related to the SOLID design principle.</p>

<p>The different patterns and principles used in GRASP are controller, creator, indirection, information expert, high cohesion, low coupling, polymorphism, protected variations, and pure fabrication. All these patterns answer some software problems, and these problems are common to almost every software development project. These techniques have not been invented to create new ways of working, but to better document and standardize old, tried-and-tested programming principles in object-oriented design.</p>

More https://en.wikipedia.org/wiki/GRASP_(object-oriented_design)

<h3>MVC</h3>

<ul>
    <li>The Model contains only the pure application data, it contains no logic describing how to present the data to a user. They are the parts of the application that implement the logic for the application’s data domain. They retrieve and store model state in a database.</li>
    <li>The View presents the model’s data to the user. The view can only be used to access the model’s data. They are the components that display the application’s user interface (UI).</li>
    <li>The Controller exists between the view and the model. It listens to events triggered by the view and executes the appropriate commands. They are the components that handle user interaction, work with the model, and ultimately select a view to render that displays UI.</li>
</ul>

<h3>Singelton</h3>

<p>Ensure a class has only one instance and provide a global point of access to it.</p>

<p>The Singleton Pattern limits the number of instances of a particular object to just one. This single instance is called the singleton.</p>

<p>Singletons are useful in situations where system-wide actions need to be coordinated from a single central place. An example is a database connection pool. The pool manages the creation, destruction, and lifetime of all database connections for the entire application ensuring that no connections are 'lost'.</p>

<p>Singletons reduce the need for global variables which is particularly important in JavaScript because it limits namespace pollution and associated risk of name collisions.</p>

<code>

    var Singleton = (function () {
        var instance;

        function createInstance() {
            var object = new Object("I am the instance");
            return object;
        }

        return {
            getInstance: function () {
                if (!instance) {
                    instance = createInstance();
                }
                return instance;
            }
        };
    })();
</code>
Source https://www.dofactory.com/javascript/singleton-design-pattern

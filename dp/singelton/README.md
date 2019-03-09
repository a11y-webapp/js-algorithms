<h2>Singelton</h2>

<p>Definition: Class has only one instance and provide a global access to it.</p>

<p>The Singleton Pattern limits the number of instances of a particular object to just one. This single instance is called the singleton.</p>

<p>Singletons are useful in situations where system-wide actions need to be coordinated from a single central place. An example is a database connection pool. The pool manages the creation, destruction, and lifetime of all database connections for the entire application ensuring that no connections are 'lost'. Another posible example might be logging user action.</p>

<p>Singletons reduce the need for global variables which is particularly important in JavaScript because it limits namespace pollution and associated risk of name collisions.</p>

```javascript
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
```

Source https://www.dofactory.com/javascript/singleton-design-pattern

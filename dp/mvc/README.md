## MVC

MODEL-VIEW-CONTROLLER

* The Model contains only the pure application data, it contains no logic describing how to present the data to a user. They are the parts of the application that implement the logic for the application’s data domain. They retrieve and store model state in a database.

* The View presents the model’s data to the user. The view can only be used to access the model’s data. They are the components that display the application’s user interface (UI).

* The Controller exists between the view and the model. It listens to events triggered by the view and executes the appropriate commands. They are the components that handle user interaction, work with the model, and ultimately select a view to render that displays UI.

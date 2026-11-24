# NORA public demo — Feature map

This page describes what is implemented in the public demonstration in this repository. It does not describe or promise features of the complete private NORA application.

## Included in the public demo

| Feature | What it does |
|---|---|
| Daily task list | Displays tasks for the current day |
| Add a task | Saves a title, category and due date |
| Complete a task | Allows a task to be marked complete or pending |
| Remove a task | Deletes a demo task |
| Daily overview | Shows the total and completed tasks for today |
| Focus timer | Offers a simple browser-based focus timer with pause and reset |
| Local storage | Persists demo tasks in a local SQLite database |
| API documentation | Exposes the FastAPI interactive documentation locally |
| Automated checks | Exercises the demo API, validation and persistence using temporary test data |

## Product direction

NORA's broader design ambition is to make everyday digital support more adaptable for people with different energy, attention, sensory, routine and sleep needs. The project is being shaped with awareness of experiences such as depression, anxiety, ADHD, OCD and insomnia, while avoiding claims that software can diagnose or treat those conditions.

These are product principles and future design goals, not functionality delivered by this public demo. In particular, the public demo does not contain mental-health-specific interventions, clinical workflows, crisis response, therapy or medical advice.

## Not included here

The complete private application, private integrations, production account features, remote synchronization, complete assistant experience and full mobile application are not part of this repository. No contributor should add private application source or credentials to the public demo.

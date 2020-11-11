## Feedback Meeting: 
- Need more error handling- what happens when the data doesn't come in.
- walk through the user story to decide what to test on each element.
- Separate network requests of `CreateATeam` to make it easier to mock and test the file.
- Integration testing needs more work, unit testing shows solid level of understanding. 


## Notes:

- README looks great
- Love the layout of the app
- Undefined routes are not accounted for

### Questions

- Testing: What should have been tested that wasn't? How can async testing be improved?
    - For testing at the App level, you'd want to interact with the Application the same way that a user would
        - In addition to the assertions to you, I would check to see if:
            - We can add a team and then see it in the MyTeams view
            - we can navigate to the Gym Leaders page
            - And other features like the above
    - you would also want to break out some of the network requests that are defined in `CreateATeam` into their own files so that you can mock them when testing that component's functionality
    - To clean the tests on the GymLeaders components, you could check to see whether the correct number of Gym leaders are rendered
- Data: Are components separated correctly? Are props passed correctly? What are the errors in the console happening?
    - You don't need prop types in the App component
    - Why use axios over fetch? It's no problem, just curious
    - SetState doesn't return a promise; you don't need to await it
    - One of the issues seems to be that you're making duplicate keys somehow
        - that may be an issue with the AsyncSelect component
    - Is it possible to get the Gym Leader data from the server, or did you have to hard code the dataset?
    - 

### Specification Adherence

- [ ]  4 - All requirements from 3 are met. The application completes all iterations above and implements one or more of the extensions. And the evaluator has no recommendations for design changes.
- [x]  3 - The application uses the above technologies to a professional level. The evaluator has minimal recommendations for refactoring or design changes.
- [ ]  2 - The application is in a usable state, but is missing part of one or more of the technologies outlined above. Evaluator has multiple recommendations for design changes.
- [ ]  1 - The application is missing multiple features outlined above. Developer did minimal to no CSS for this project.

**[10 Essential Usability Guidelines.](https://speckyboy.com/10-essential-web-application-usability-guidelines/)**

### Project Professionalism

- [ ]  4 - All requirements from 3 met, PropType functionality is complete, codebase has zero linter errors/warnings, and README contains screenshots of application. Project team uses a rebase workflow, taking advantage of GitHub issues to track work. Project shows a complete mastery of React architecture.
- [x]  3 - PropType functionality is tried but missing for some components, the codebase has less than 5 linter errors, README has been updated with all group members. Project utilized wireframes from the outset. All git commits are atomic, made first to branches, and use descriptive and concise commit messages. Project demonstrates a fundamental understanding of React architecture.
- [ ]  2 - Project are substantially unused, README updates, wireframes, or has more than 5 linter errors. Project team makes large infrequent git commits. Project shows a basic understanding of React.
- [ ]  1 - PropTypes are substantially unused, README is incomplete, wireframes were not used, or more than 10 linter errors are present. Git history does not show evolution of project, with many large and inconsistent commits. Project shows little understanding of React and significant refactoring is required.

### Testing

- [ ]  4 - All async functionality is tested, tests are passing and run efficiently (using mount only when appropriate). Unit tests for snapshots and methods cover not only happy paths but also sad paths. Evaluator has no recommendations for testing.
- [ ]  3 - Includes testing from levels 1 and 2, and a valid attempt to test asynchronous functionality has been made. Asynchronous tests cover happy paths as well as multiple sad paths.
- [x]  2 - Nearly all unit tests are in place. Components are well tested with a diverse set of tests including but not limited to snapshot tests, event simulation tests, and tests on class methods (including `componentDidMount`). No attempt to test async functionality was made.
- [ ]  1 - There is little or no evidence of testing in the application. There are some UI tests including snapshot tests, but major gaps in unit testing functionality.

### Routing

- [x]  4 - All requirements from 3 met, and always chooses the correct component for rendering, as well as the correct Route API. Application should account for undefined routes.
- [x]  3 - Application uses React Router to display appropriate components based on URL.
- [ ]  2 - Application uses React Router, but does not display the appropriate components upon navigating.
- [ ]  1 - Application uses React Router, but does not render/use all routes.

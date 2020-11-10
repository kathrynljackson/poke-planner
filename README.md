# Poképlanner

## About
This app allows Nintendo Switch players to research and choose the Pokémon that they would like to use for each opponent in the games _Pokémon Sword_ and _Pokémon Shield_. 

## Expectations
* demonstrate mastery of React
* demonstrate mastery of Router
* demonstrate mastery of Asynchronous JavaScript
* utilize assigned API and technology
* display the data from the API in a way that applies directly to a specific audience
* store/manipulate the data displayed in the application, such as favoriting or adding to a list


## Utilizing the Code 
1. In your terminal, choose the directory you want this code to be stored in.
2. Clone [this repository](https://github.com/kathrynljackson/poke-planner) using `git clone https://github.com/kathrynljackson/poke-planner`
3. Inside of the new directory, run `npm install` to install all dependencies.
4. Run `npm start` to deploy the app in your default browser.
5. `npm test` can be used to review all tests.

## To Use
Users can choose the gym leader that will be their opponent and decide what Pokémon will be on that specific team. The user can create multiple teams for each opponent, allowing them to choose the Pokémon that work best for their fighting style at each point in the game. 

![Screen Shot 2020-11-09 at 11 24 51 PM](https://user-images.githubusercontent.com/65988644/98628313-8e8d4980-22d3-11eb-898d-efe760377bfb.png)

Unsure of the Pokémon type you want to use? The **Pokédex** feature allows you to search for a Pokémon by name and view its name, type, and picture.

![Screen Shot 2020-11-09 at 11 25 30 PM](https://user-images.githubusercontent.com/65988644/98628260-6c93c700-22d3-11eb-8947-b4ebbdc6d391.png)

![Screen Shot 2020-11-09 at 11 25 40 PM](https://user-images.githubusercontent.com/65988644/98628265-70274e00-22d3-11eb-8be9-0943e51627b4.png)

Saved teams are stored in `localStorage` and can be viewed throughout gameplay.

![Screen Shot 2020-11-09 at 11 25 08 PM](https://user-images.githubusercontent.com/65988644/98628320-9351fd80-22d3-11eb-9bd5-44ca818addad.png)


## Continued Goals
This project reaches the minimum goals that I set at the start, but there are several features and improvements I would like to implement:
* show the Gym Leader pictures in the `AsyncSelect` component
* pass all tests
* be able to search for and view Gym Leaders and their details on the same page that the user builds their team on
* increase accessibility


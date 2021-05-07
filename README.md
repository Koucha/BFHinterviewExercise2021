# BFHinterviewExercise

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.12.

> ## Exercise tasks:
> 
> ### Task 1
> 1. Display a material input field and a label with the text "write something in the input field to change this label".
> 1. If the user types characters in the input field, update the text on the label accordingly.
> 
> ### Task 2
> 1. Display two 2 tabs with different content.
> 1. If the user clicks on one of the tabs, the main content of the page changes accordingly.
> 
> ### Task 3
> 1. Create a pipe function that takes a string as input and validates the following:
>   1. The given string is an integer
>   1. The given string is at least 3 characters long
>   1. The given string contains at least a 9
> 1. When the validation is wrong the system should return an error to the user explaining what condition failed.
> 1. Apply the pipe function to the input field from task 1
> 
> ### Task 4 *[optional]*
> 1. Create a unit test that validates your pipe function in the following way
>   1. Running the function with the input "test" shall return an error "the inserted text is not an integer"
>   1. Running the function with the input "11" shall return an error "the inserted text is too short and it does not contain a 9
>   1. Running the function with the input "109" shall return "validated"
> 
> Remember that you have to use Angular Material for every component of the UI.  
> Once you have done at least tasks 1, 2 and 3, send us the link to the  GIT repo so that we can clone to review the code.
> 
> Deadline:  14/05/2021 08:00AM
> 
> ###### (1) [Angular][angular]
> ###### (2) [Angular Material][angular-material]
> 
> [angular]: https://angular.io/
> [angular-material]: https://material.angular.io/

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

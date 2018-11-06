# LimelightTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.0. by Jun Wang

# Installation

use CLI and direct into root folder, run `npm install`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Usage

1. after staring the server, navigate to `http://localhost:4200/`. The app will automaticlly redirect you to a login page. You have to log in with a correct email, otherwise login will be rejected. For your convenience, feel free to use Sincere@april.biz

2. after user logs in, user will be redirected to posts page by default. The post information is presented in a table with virtual scrolling enabled.  It will have some following features:
    1. User can click expand all to look at row details of all posts, and collapse all to close all rows.
    2. user can use the search bar to search any keyword that appears in either the body or title of the post. All natching posts will be shown
    3. user can click on the arrow head to open a row detail manually  <br />
   Note: due to limitation of the api provided, it is not possible to find the comment count of a single post, thus the comment count is a hard coded value here.

3. Navigate to albums link, user will get to see a list of album names, number of photos in each album and a view photos link to open up a modal. Below are the features:
    1. a list of albums including album name, photo count and view photos link are presented
    2. user can click on the view photos link and open a modal showing all photos under that album
    3. user can click the close button in the modal or click outside the modal to close the modal  <br />
    Note: due to the limitation of the api provided, it is not possible to find the exact photos uner an album for a specific user, thus photo count is hard coded here and every link will show the same set of photos

4. Navigate to Todos link, user will see a list of tasks including both completed and incomplete: Features are listed below:
    1. user will see a list of tasks including its title and status, a checked box means the status is completed, vice versa
    2. user can use the slide toggle to show completed tasks only or to show all tasks
    3. user can check or check the box to change the status of a task

5. User can click on the company link located beside the log out button to redirect to the the author's website

6. User can click on the log out button to exit the application

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

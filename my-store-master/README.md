# My Store

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.5. [Fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) the project repository and [clone](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) your forked repository to your machine.

Run `npm install` to install all the dependencies to the project.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## About

The project is developed by creating the following

### Components

- Product list
- Product Item
- Product Detail
- Cart
- Check out
- Form
- Confirmation screen
- Header
- Page not found
-

### Services

- Cart
- Product
- Shipping

### Routing

Routing has been added and all the paths have been configured using the [RouterModule](https://angular.io/api/router/RouterModule) and navigation opens one or more routed components in one or more `<router-outlet>` locations on the page.
used [routerLink](https://angular.io/api/router/RouterLink) directives to navigate between the pages without reloading.

### Passing data between parent and child component

Have used [@Input](https://angular.io/api/core/Input) decorator to pass data from parent to child component and [@Output](https://angular.io/api/core/Output) to emit the event using `EventEmitter` from the child to the parent component.

### Cart and Form

Cart component will display the items added to the cart and fetch the list from the local storage. Remove option has been provided to each cart item to delete the item from the cart. We can also modify the cart item quantity. The price and Subtotal will be modified based on the item quantity change.

Template driven forms using `ngForm` is implemented using proper validations. Use two-way binding to listen for events and update values simultaneously between parent and child components using `ngModel`. On form submission, confirmation screen will be displayed and cart items will be cleared in the localstorage.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

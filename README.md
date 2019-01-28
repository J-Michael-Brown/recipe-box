# _Recipe Box_

#### _Site that allows a user to Edit all fields in a given recipe, 1/23/19_

#### By _**J. Michael Brown, and Christopher Cahill**_

## Description

_A user may see a list of dishes, click on the dish to view the recipe, and click edit to edit the recipe on that instance of the site._

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Known Bugs

_This is a dev build that was cut part way through. Final application should have had the ability to add new recipes._

## Support and contact details

_You may contact Michael @jmichaelbrown132737@gmail.com_

## Technologies Used

* [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

* JavaScript

* jQuery

### License

MIT License

Copyright (c) 2018, _J. Michael Brown, and Christopher Cahill_  

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:  

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE._

# Learned from this project:

## Issues

Recipe objects were instantiated with ingredients as an array of basic strings.   
The problem occurred while attempting to use [(ngModel)] on a sting element within an array.    
The string would be rewritten, but the page would rewrite on every character change, causing the focus to be lost from the input field.

Example:
~~~
<div *ngfor="let ingredient of Recipe.ingredients">
  <li>{{ingredient}}<button (click)="selectIngredient"></li>
</div>

<input *ngIf="selectIngredient" [(ngModel)]="selectedIngredient(ingredient)">

<script>
  selectIngredient(clickedIngredient) {
    this.selectedIngredient = clickedIngredient;
  }
</script>
~~~

Input field _would_ appear, but only one change could be made at a time. I.E. typing one character, or hitting backspace would cause the element to reload, and the input field to lose focus. It _did_ change the origin.

#### Solution

The issue took place because of pathing through Angular. The string change was considered a object change at some level, which caused a major portion of the page to be rewritten on character change. As such the solution was to create an object class with a property that is _adjusted_ and not _overwritten_.

Example:

<!-- ~~~HTML -->
`|<div *ngfor="let ingredient of Recipe.ingredients">`   
`| <li>{{ingredient.`*name*`}}<button (click)="selectIngredient"></li>`    
`|</div>`    
`|<input *ngIf="selectIngredient" [(ngModel)]="selectedIngredient(ingredient.`*name*`)">`    

`|<script>`    
`| selectIngredient(clickedIngredient) {`    
`|   this.selectedIngredient = clickedIngredient;`    
`| }`   
`|</script>`
<!-- ~~~ -->

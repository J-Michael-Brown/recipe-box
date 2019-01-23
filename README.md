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

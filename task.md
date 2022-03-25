# Practice the usage of stage management using NgRx - https://ngrx.io/guide/store
- Reducers, Actions, Selectors
- Effects ( bonus requirement )
- Angular Material, SASS
- Angular Lazy Loading Modules, Dependency Injection
- RxJs, Observables
- Reactive Forms, Validators, LifeHooks
- for communication with the given Rest API you must use HttpClient

## Angular & Typescript
- [x] Creating modules and components in Angular
- [x] Rendering data
- [x] Properties and event binding
- [x] Styling components
- [x] Parent child component communication
- [x] Type definitions with Typescript interfaces
- [x] Fetching data with HTTP Client
- [x] Sharing data between components
- [x] RxJS streams
- [x] Routing and navigation



## Task materials: 
You're going to use the free public API JSONPlaceholder - `https://jsonplaceholder.typicode.com/` and the idea is to use two of api's resources: `users` and `posts`.

Users are to be displayed in a material-table ( i'm leaving the layout and styling in your hands ) with each of the listed properties displaying in table column like so:
```
username, 
email, 
name, 
address.street, 
address.suite, 
address.city, 
address.zipcode, 
phone, 
website, 
company.name, 
company.catchPhrase
```

Each row should have the following fields editable with a pop-up modal or in the table's row on a button click: 
```
name, 
address.street, 
address.suite, 
address.city, 
address.zipcode, 
phone, 
website
```

Each row should contain a button which expands that current table row, displaying the user's posts below the row data (in the expanded area)

---
### Endpoint for users: 
https://jsonplaceholder.typicode.com/users

### Endpoint for user's posts:
 https://jsonplaceholder.typicode.com/posts?userId={userId}

*After getting the posts for a given user, you must attach the posts as a property on that user.*

---
**To summarize the task:**
1. List all the users in a table with option to edit the listed fields and display user's posts on a button in a expandable row below using NgRx flow.


1. *Bonus requirements:* Show a loader while loading response, show notification on edit or getting user's posts
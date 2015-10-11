#Challenge2

For this challenge you have the opportunity to showcase your front end engineering skills.

The task is to implement a product search.

You're being provided with an API end point and your task is to display the returned list of products.

This gif gives you an example on how you could do it.

![example](https://cloud.githubusercontent.com/assets/5065940/10415123/5757785a-6fa0-11e5-991f-f8e76fc2e077.gif)

##Key points

The url should update as shown:

- when the API call returns with a response
- paginating through the results

You keep state in your front end application, so that a page refresh doesn't kick the user back to a homepage, but the results of the search are still visible.


##API point

**GET** http://api.vip.supplyhub.com:9000/products

|query param|description               |notes                                       |
|-----------|--------------------------|--------------------------------------------|
|search     |search string             |required                                    |
|limit      |max results returned      |optional number (if set, minimum value is 1)|
|skip       |skips *value* results     |optional number (if set, minimum value is 0)|
|count      |returns count, not results|optional                                    |

##Resources
- [https://angularjs.org/](https://angularjs.org/)
- [https://material.angularjs.org](https://material.angularjs.org)
- [https://www.polymer-project.org/1.0/](https://www.polymer-project.org/1.0/)
- [https://facebook.github.io/react/](https://facebook.github.io/react/)


##Notes for candidates
If you're using this challenge as part of your technical evaluation, please fork this repository, create your solution as an AngularJS, Polymer, or React app and sent your repository url to matthias@supplyhub.com. Private repositories are also accepted, in that case give access to the GitHub username *manonthemat*.

##Bonus points

- when using AngularJS, use ngTable or if chosen not to, tell us why
- code coverage
- written in a reuasable way
- meaningful commits
- responsive design
- completed within a few hours
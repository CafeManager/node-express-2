### Conceptual Exercise

Answer the following questions below:

- What is a JWT?

  JWT means json web token. It's a method of autheticating data that comes from the person who's allowed to send data.

- What is the signature portion of the JWT?  What does it do?

  The signature portion is a unique string that can only be interpreted if the person JWT token and the web server JWT decoder use the same secret in the hashing function. The purpose of it is authetication.

- If a JWT is intercepted, can the attacker see what's inside the payload?

  The attacker can see what's inside the payload if it's intercepted.

- How can you implement authentication with a JWT?  Describe how it works at a high level.

  You can install jsonwebtoken on npm. 
  Use jsonwebtoken the encode login data to return username on login.
  Add middleware to add authentification 
  use jsonwebtoken to decode token 

- Compare and contrast unit, integration and end-to-end tests.

  Unit test tests individual tests.
  Integration tests test how blocks of code interact with each other.
  End-to-End tests test how the application from start to finish.

- What is a mock? What are some things you would mock?

  A mock is data is independent of any other module. You can mock data database data, function arguments, api data. 

- What is continuous integration?

  Continuous Integration is merging in code in small increments amd running tests in between each increment.

- What is an environment variable and what are they used for?

  An environment variable is a variable set at the start of the program that is used to define settings within a program.

- What is TDD? What are some benefits and drawbacks?

  TDD is test driven development. It can very costly with respect to time, but makes it easier to find the error in your program.

- What is the value of using JSONSchema for validation?

  JSONSchema ensures that the data appears as it is supposed to. It can also assist with keeping out malicious data.

- What are some ways to decide which code to test?

  End to end testing
  unit testing
  Integration Testing


- What does `RETURNING` do in SQL? When would you use it?

  `RETURNING` gets you the columns after an `INSERT`, `DELETE`, or `UPDATE`
    
    Example: `INSERT INTO table VALUES (1, 'tomato') RETURNING fruit;`

- What are some differences between Web Sockets and HTTP?

  HTTP is stateless. 
  It's a little harder to have constant updates with HTTP without sending a lot of requests.

  Web Sockets stay connected.
    A server can send updates to a client.
  

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?

  I prefer Flask over Express because it is a lot easier to set up the database. 

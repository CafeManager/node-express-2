when no arguments

localhost:3000/auth/register

responds with {
    "message": "data and salt arguments required"
}


// test body 
{ "username": "testuser", "password":"testuser", "first_name":"test", "last_name":"user", "email":"test@gmail.com", "phone":"232-321-4913"
}

- BUG #1:  GET /users/ doesn't show data as  {users: [{username, first_name, last_name}, ...]}.

- BUG #2:  POST /auth/login doesn't raise a 401 on invalid credentials

- BUG #3: GET  /users/:username doesn't raise a 404 on invalid user

- BUG #4: PATCH /users/:username doesn't work when a user tries editing their own user 


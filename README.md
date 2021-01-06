<h1>User</h1> 
<p>All Fields: ['name', 'email', 'age', 'password', 'tokens', 'avatar', 'createAt', 'updatedAt', '__v']</p>
<h2>1. Create user</h2> 
<b>post <i>/users</i></b>
<p>user:{
    "name":"Mike",[required]
    "email":"mike@gmail.com",[required]
    "password":"mike123",[required]
    "age":"20"
}</p>

<h2>2. Login</h2>
<b>post <i>/users/login</i></b>
<p>Fields: ['email', 'password']</p>

<h2>3. Logout</h2>
<b>post <i>/users/logout</i></b>
<p>Delete current token of the user</p>

<h2>4. LogoutAll</h2>
<b>post <i>/users/logoutAll</i></b>
<p>Delete all tokens of the user</p>

<h2>5. Get Profile</h2>
<b>get <i>/users/me</i></b>
<p>Fields: ['name', 'email', 'age']</p>

<h2>6. Update Profile</h2>
<b>patch <i>/users/me</i></b>
<p>Fields: ['name', 'email', 'age', 'password']</p>

<h2>7. Delete Profile</h2>
<b>delete <i>/users/me</i></b>
<p>PS: The users' tasks will be deleted as well</p>

<h2>8. Upload avatar</h2>
<b>post <i>/users/me/avatar</i></b>

<h2>9. Delete avatar</h2>
<b>delete <i>/users/me/avatar</i></b>

<h2>10. Get avatar</h2>
<b>get <i>/users/:userId/avatar</i></b>

<h1>Task</h1>
<p>All fields: ['description', 'completed', 'owner', 'createdAt', 'updatedAt', '__v']</p>
<h2>1. Create task</h2>
<b>post <i>/tasks</i></b>
<p>Fields: ['description(required)', 'completed(default: false)']</p>

<h2>2. Get tasks</h2>
<b>get <i>/tasks</i></b>
<p>/tasks?completed=true
/tasks?limit=10&skip=10
/tasks?sortBy=createdAt:desc</p>

<h2>3. Get a task</h2>
<b>get <i>/tasks/:id</i></b>

<h2>4. Update a task</h2>
<b>patch <i>/tasks/:id</i></b>

<h2>5. Delete a task</h2>
<b>delete <i>/tasks/:id</i></b>


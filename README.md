# ts-gql-auth
It is a GraphQL and JWT token based authentication application. It is developed using apollo-server, TypeScript and JWT.
I have used mock database (a simple async function and local variable to store data to in-memory).


## How to run
#### install
`yarn` or `npm install`
#### run
`yarn dev` or `npm run dev`


## Queries and Mutations
Login 
```
mutation Mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        token,
        email,
        name
    }
}
```

Register User
```
mutation CreateUser($name: String!, $email: String!, $password: String!) {
    createUser(name: $name, email: $email, password: $password) {
        name
        email
    }
}

Variables
{
    "name": "Alex",
    "email": "alex@mail.com",
    "password": "secured@password123",
}
```

Create Vendor
```
mutation CreateVendor($name: String!, $type: String!, $address: String) {
  createVendor(name: $name, type: $type, address: $address) {
   name 
  }
}

Variables
{
    "name": "Test vendor",
    "type": "supplier",
    "address": "#122, AX, 4th main",
}
```

Get vendors Query
```
query Users {
    vendors {
        name
        address
        type
    }
}
```


## setup vscode debugger
```
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Launch index.ts",
            "type": "node",
            "sourceMaps":true,
            "request": "launch",
            "skipFiles": [
                "<node_internals>/**"
            ],
            "program": "${workspaceFolder}/src/index.ts",
            "outFiles": [
                "${workspaceFolder}/build/src/index.js"
            ]
        }
    ]
}
```

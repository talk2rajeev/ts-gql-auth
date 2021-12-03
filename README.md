# ts-gql-auth
Apollo server with typescript authentication POC

## run
#### install
`yarn`
#### run
`yarn dev`


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

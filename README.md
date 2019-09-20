# Working code:

Change `package.json` to:

```json
{
  "dependencies": {
    "graphql": "14.4.2"
  }
}
```

And run `node index.js`

# Broken code (BC break in minor release):

Change `package.json` to:

```json
{
  "dependencies": {
    "graphql": "14.5.0"
    // "graphql": "^14.5.0"
  }
}
```

And run `node index.js`. Is throws this error:

```text
GraphQLError: Variable "$name" of required type "String!" was not provided.
```

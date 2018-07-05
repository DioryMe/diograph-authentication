# Diograph Authentication

## Usage / Development

```
npm install -g npx
npm install
npm start
```
Then go to: http://localhost:4205/


## Tests

```
npm test
```

## Deploy

```
webpack
cp app/index.html dist/index.html
# Change "../dist/bundle.js" to "bundle.js" in dist/index.html
surge ./dist diograph-authentication.surge.sh
```

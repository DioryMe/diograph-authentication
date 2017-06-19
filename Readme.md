# Diograph-authentication

## Usage

```
npm install diograph-authentication --save
```

```
import { DiographAuthentication } from "diograph-authentication"

let authToken = DiographAuthentication.token

DiographAuthentication.onLogin = () => {
  console.log("I was logged in! :)")
}

DiographAuthentication.onLogin = () => {
  console.log("I was logged out... :(")
}

```

## Using <diograph-login> template

Insert `<diograph-login></diograph-login>` tag where you want the login template to show up.
It has input-field for token and save button when you are logged out.
It has "Logged in as..." text and logout button when you are logged in.


## Logging in with ?token=123345 query string

You can login automatically by offering `?token=my123token345` in the url of the page where the `<diograph-login>` is attached. `<diograph-login>` reads the token from url and saves it and you get logged in automatically.


## Development

```
npm run build
```


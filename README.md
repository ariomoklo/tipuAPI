# tipuAPI 🐒

Fake API 💀 for Quick Frontend Development.

## Dependency

- [`json-server`](https://github.com/typicode/json-server)
- [`faker`](https://github.com/Marak/faker.js)

## Getting Started 🚀

#### Start by cloning this repository

you know how to clone a repo right ?. use `git clone` or just download this repo, It doesn't matter. But remember, we need nodejs to serve the json. So after cloning you need to instal node dependency using `npm install`.

#### Adding Data Model

add model in `/model` folder. I am using [fakerjs](https://github.com/Marak/faker.js) for creating random data. go to [faker api documentation](https://github.com/Marak/faker.js#api-methods) for more info please.

#### Build Database

After you are done creating model, then build your json. **Why you need to build the json?** Well, I think static json is fast and safe rather than randomizing the data every time you sent a request. And with static data json-server can modify the `database.json` everytime you sent a `POST`, `PUT`, `PATCH`, and `DELETE` request.

#### Start Server

easy, just run `npm run start`. If you use [🏨 hotel](https://github.com/typicode/hotel) it will be much simpler, I recommend it 👍.

# formula1-teams backend

## Installing

Use npm for formula1-teams backend

```console
npm install
```

Set up the development environment in a `.env` file in the server root, example
can be found in `.env.example`

|        Variable |                                             Value |
|:----------------|--------------------------------------------------:|
|            PORT |          INT that the server should be running on |
|         DB_USER |   username that has access to the database schema |
|     DB_PASSWORD |            password corresponding to the username |
|         DB_NAME |                       name of the database schema |
|         DB_HOST |                  address of the database database |
|         DB_PORT |             INT where the DB server is running on |
|      DB_DIALECT |                type of database management system |
|    TOKEN_SECRET | STRING used for JWT generation, can be any string |

Create a database schema aligned with the given DB_NAME variable.
Here you can find the RDBMS types that Sequelize ORM is compatible with:
- [Sequelize supported RDBMS](https://sequelize.org/releases/)

Run migrations

```console
npx sequelize-cli db:migrate
```

Run seeds

```console
npx sequelize-cli db:seed:all
```

## Running the project

Development mode

```console
npm run dev
```

Available npm scripts

- `dev`: run the project in development mode
- `test`: run tests using `jest`
- `migrate`: run pending migrations,
- `undo-last-migration`: undo the last migration
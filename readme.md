# Node Service Blueprint

A quick start for using node with babel (preset-env), express, jest and docker.

## Setup

Use [this template](https://github.com/ecodia/node-service-blueprint/generate) or `git clone git@github.com:ecodia/node-service-blueprint.git`.

```shell
npm i
cp example.env .env
npm start
```

## Commands

| Command         | Description                                         |
|-----------------|-----------------------------------------------------|
| `npm start`     | Start the service in development mode.              |
| `npm test`      | Start the test runner in watch mode.                |
| `npm run build` | Creates a production build. Used by the dockerfile. |

## Environment Variables

| Name | Default | Description                      |
|------|---------|----------------------------------|
| PORT | 3000    | The port this service listens on |

## Licence

MIT

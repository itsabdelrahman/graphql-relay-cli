<p align="center">
  <img src="https://cdn.auth0.com/blog/react-js/react.png" width="80"/>
  <img src="https://facebook.github.io/relay/img/logo.svg" width="80"/>
  <img src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/terminal-512.png" width="80"/>
</p>

<h1 align="center">GraphQL Relay CLI</h1>

## Installation

```
npm install --global graphql-relay-cli
```

## Commands

### `toGlobalId`

Takes a type name and an ID specific to that type, and returns a global ID that is unique among all types.

```shell
$ relay toGlobalId User 507f1f77bcf86cd799439011
> Global ID: VXNlcjo1MDdmMWY3N2JjZjg2Y2Q3OTk0MzkwMTE=
```

### `fromGlobalId`

Takes the global ID created by toGlobalID, and returns the type name and ID used to create it.

```shell
$ relay fromGlobalId VXNlcjo1MDdmMWY3N2JjZjg2Y2Q3OTk0MzkwMTE=
> Type: User
> ID: 507f1f77bcf86cd799439011
```

## License

MIT License

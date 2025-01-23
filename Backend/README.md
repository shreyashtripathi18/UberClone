# API Documentation

Base URL: `http://localhost:4000/api`

Authentication: Include JWT token in Authorization header
`Authorization: Bearer <token>`

## Endpoint: `/users/register`

### Description

This endpoint is used to register a new user.

### Method

`POST`

### Request Body

The data required in the request body is as follows:

- `fullname` (object): The full name of the user.
  - `firstname` (string): The first name of the user.
  - `lastname` (string): The last name of the user.
- `email` (string): The email address of the user.
- `password` (string): The password for the user account.

Example:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securepassword123"
}
```

### Response

#### Success (201 Created)

The user has been successfully registered.

Example:

```json
{
  "token": "jwt_token_string",
  "user": {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

#### Error (400 Bad Request)

The request data is invalid.

Example:

```json
{
  "errors": [
    {
      "type": "field",
      "msg": "Email is not valid",
      "path": "email",
      "location": "body"
    }
  ]
}
```

#### Error (409 Conflict)

The email is already in use.

Example:

```json
{
  "error": "Email already in use"
}
```

## Endpoint: `/users/login`

### Description

This endpoint is used to log in an existing user.

### Method

`POST`

### Request Body

The data required in the request body is as follows:

- `email` (string): The email address of the user.
- `password` (string): The password for the user account.

Example:

```json
{
  "email": "john.doe@example.com",
  "password": "securepassword123"
}
```

### Response

#### Success (200 OK)

The user has been successfully logged in.

Example:

```json
{
  "token": "jwt_token_string",
  "user": {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

#### Error (400 Bad Request)

The request data is invalid.

Example:

```json
{
  "errors": [
    {
      "type": "field",
      "msg": "Email is not valid",
      "path": "email",
      "location": "body"
    }
  ]
}
```

#### Error (401 Unauthorized)

The email or password is incorrect.

Example:

```json
{
  "message": "Invalid email or password"
}
```

## Endpoint: `/users/profile`

### Description

This endpoint retrieves the profile information of the authenticated user.

### Method

`GET`

### Authentication

Requires valid JWT token in Authorization header or cookies.

### Response

#### Success (200 OK)

Returns the user profile information.

Example:

```json
{
  "_id": "user_id",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com"
}
```

#### Error (401 Unauthorized)

When the token is missing or invalid.

Example:

```json
{
  "message": "Unauthorized"
}
```

## Endpoint: `/users/logout`

### Description

This endpoint logs out the current user by invalidating their token.

### Method

`GET`

### Authentication

Requires valid JWT token in Authorization header or cookies.

### Response

#### Success (200 OK)

The user has been successfully logged out.

Example:

```json
{
  "message": "Logged out successfully"
}
```

#### Error (401 Unauthorized)

When the token is missing or invalid.

Example:

```json
{
  "message": "Unauthorized"
}



# API Documentation

## Endpoint: `/users/register`

### Description
This endpoint is used to register a new user.

### Method
`POST`

### Request Body
The data required in the request body is as follows:
- `name` (string): The name of the user.
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

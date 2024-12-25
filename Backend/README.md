# Backend API documentation

## `/users/register` endpoint
### Description:
Input full name(first, last name), email, and password for registration 
### HTTP method:
`POST`

### Request body:
The request body should be json format; with included those field
- `fullname`: objects
    -  `firstname`: string, required : at least 3 characters
    -   `lastname`: string, : at least 3 characters
- `email`: string
- `password`: string

### Response :
- `users`: objects
    - `fullname`: objects
        - `firstname`
        -  `lastname`
    - `email`
    - `password`
- `token` : jwt token

## `/users/login` endpoint
### Description:
Input email, and password for sign in 
### HTTP method:
`POST`

### Request body:
The request body should be json format; with included those field
- `email`: string
- `password`: string

### Response :
- `users`: objects
    - `email`
    - `password`
- `token` : jwt token



## `/users/profile` endpoint
### Description:
Showing profile information(-password) based on auth middleware.
### HTTP method:
`GET`

### Request body:
The request body should be json format; with included those field
- `Authorization: Bearer <token>`

### Response :
- `users`: objects
    - `fullname`: objects
        - `firstname`
        -  `lastname`
    - `email`
- `token` : jwt token


## `/users/logout` endpoint
### Description:
Logout the current user and blacklist the token provided in cookies or header. 
### HTTP method:
`GET`

### Request body:
The request body should be json format; with included those field






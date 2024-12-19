# Backend API documentation

`/users/register`
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

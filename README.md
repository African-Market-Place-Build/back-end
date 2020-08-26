End Points

https://african-market-place-bw.herokuapp.com/
GET request to this end point will return {api: "up"}.

https://african-market-place-bw.herokuapp.com/api/auth/register
POST request to this end point adds a new user to the database and returns the newly created user info.

https://african-market-place-bw.herokuapp.com/api/auth/login
POST request to this end point returns a token (expires in 24 hours) and the user info if the username and password are correct.

https://african-market-place-bw.herokuapp.com/api/users
GET request to this end point returns the list of all users in the database if the token in the `Headers.authorization` is valid.

https://african-market-place-bw.herokuapp.com/api/users/allitems 
GET request to this end point returns the list of all items in the database.

https://african-market-place-bw.herokuapp.com/api/users/:userId/items
GET request to this end point returns the list of items posted by the user.

https://african-market-place-bw.herokuapp.com/api/users/:userId/items/:itemId
GET request to this end point returns the item with the provided id.

https://african-market-place-bw.herokuapp.com/api/users/:userId/items
POST request to this end point adds a new item to the database and returns the newly created item.

https://african-market-place-bw.herokuapp.com/api/users/:userId/items/:itemId
PUT request to this end point updates the item with with the provided id and returns the updated item.

https://african-market-place-bw.herokuapp.com/api/users/:userId/items/:itemId
DELETE request to this end point deletes the item with the provided id and returns {message: "The item has been removed!"}.


User Schema

| Property  | Type 	      | Required or not                   |
|:----------|:----------  |:----------------------------------|
| id        |	Integer   | assigned upon successful register |
| username  |	String    | required, unique                  |
| password  |	String    | required                          |
| email	    |   String    | required, unique                  |
| imageLink |	String    | not required                      |

User example

{
    "username": "temtsel",
    "password": "password",
    "email": "temtsel@email.com",
    "imageLink: "link"
}

Item Schema

| Property      | Type 	  | Required or not                             |
|:--------------|:--------|:--------------------------------------------|
| id	        | Integer | assigned upon successful insert             |
| user_id       | Integer | assigned upon successful insert the url     |
| name          | String  | required                                    |
| description   | String  | required                                    |
| location      | String  | required                                    |
| contactInfo   | String  | required                                    |
| price         | String  | required                                    |
| imageLink     | String  | not required                                |  


Item example

{
    "name": "iPad Pro 3rd Gen Wifi",
    "description": "used",
    "location": "Douala, Cameroon",
    "contactInfo": "hayden@gmail.com",
    "price": "$499.99",
    "imageLink": "https://img.letgo.com/images/02/d3/96/a5/02d396a58d92d9fa22ebb1a5ceaaa046.png?impolicy=img_600"
}
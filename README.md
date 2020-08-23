End Points:

https://african-market-place-bw.herokuapp.com/ 
GET request to this end point will return {api: "up"}.

https://african-market-place-bw.herokuapp.com/api/auth/register
POST request to this end point adds a new user to the database and returns the newly created user info.

https://african-market-place-bw.herokuapp.com/api/auth/login
POST request to this end point returns a token and the user info if the username and password are correct.

https://african-market-place-bw.herokuapp.com/api/items
GET request to this end point returns the list of all items in the database if the token in the Headers.authorization is valid.

https://african-market-place-bw.herokuapp.com/api/items/:id
GET request to this end point returns the item with the provided id.

https://african-market-place-bw.herokuapp.com/api/items
POST request to this end point adds a new item to the database and returns the newly created item.

https://african-market-place-bw.herokuapp.com/api/items/:id
PUT request to this end point updates the item with with the provided id and returns the updated item.

https://african-market-place-bw.herokuapp.com/api/items/:id
DELETE request to this end point deletes the item with the provided it and returns {message: "The item has been removed!"}.

User Schema	

| id        |	Integer | assigned upon successful register |
| :---------| :-------| :---------------------------------|
| username  |	String  | required, unique                  |
| password  |	String  | required                          |
| email	    | String  | required, unique                  |
| imageLink |	String  | not required                      |
	
Item Schema	

| id	        | Integer | assigned upon successful insert |
| :-----------| :-------| :-------------------------------|
| user_id     |	Integer | required                        |
| name        |	String  | required                        |
| description |	String  | required                        |
| location    |	String  | required                        |
| contactInfo |	String  | required                        |
| price       |	String  | required                        |
| imageLink   |	String  | not required                    |  












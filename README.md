# Project documentation
This is a simple webservice to manage posts that has root access and uses BasicAuth as authentication method.

## How to start
Define the following environment variables (you can use the ```.env.sample``` file):

- ```HOST``` (```localhost```, by default): The hostname of API server.
- ```PORT``` (```8080```, by default): The TCP port where API server listens.
- ```API_ADMIN_USERNAME```: The username of API root user.
- ```API_ADMIN_PASSWORD```: The password of API root user.
- ```DATABASE_HOST```: The hostname of API's database server.
- ```DATABASE_PORT``` (```5432```, by default): The TCP port of API's database server.
- ```DATABASE_USER```: The user of API's database server.
- ```DATABASE_PASSWORD```: The password of API's database server.
- ```DATABASE_NAME```: The name of API's database server.

Variables that have default values do not need to be defined.

Then install all project dependencies and run the ```start``` _npm_ script. You should be able to see something like:

```
Server listening at tcp://<server-host>:<server-port>...
```

## Response format
**This API is JSON**. It means that all responses are sent by server as JSON data. More specifically, all response bodies have the following format:

```
{ "error": <error-message>, "data": <response-data> }
```

Examples of response bodies:

```
{
    "error": null,
    "data": {
        "id": 5,
        "title": "Lorem ipsum",
        ...
    }
}
```

```
{
    "error": "Post not found",
    "data": null
}
```

```
{
    "error": null,
    "data": [
        {
            "id": 5,
            "title": "Hello, World!",
            ...
        },
        {
            "id": 6,
            "title": "Testing... Testing...",
            ...
        },
        ...
    ]
}
```

## How to use the API
| HTTP Method | Endpoint | Description | Requires authentication |
| - | - | - | - |
| POST | /v1/posts | Create new post. In request's JSON body, the ```title``` and ```content``` fields are required. | false |
| GET | /v1/posts | Get all registered posts. | false |
| GET | /v1/posts/:id | Get an registered post by ID. | false |
| DELETE | /v1/posts/:id | Delete an registered post by ID. | true |
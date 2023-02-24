fetch('https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data')
    .then((response) => response.json())
    .then((data) => {
        const users = data.users;
        console.log(users); // do something with the users data
    })
    .catch((error) => console.error(error));

export const fetchUsers = () => {
    fetch(
        'https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data'
    )
        .then((response) => response.json())
        .then((data) => {
            return data;
        })
        .catch((error) => console.error(error));
};

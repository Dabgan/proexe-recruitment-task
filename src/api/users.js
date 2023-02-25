export const API_URL =
    'https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data';

export const fetchApi = async (url, method, body) => {
    const response = await fetch(url, {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message || 'Ups, something went wrong...');
    }
    return data;
};

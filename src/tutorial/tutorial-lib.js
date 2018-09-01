export const person = {
    name: 'greg',
    age: 24
}

export const getPosts = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts'
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
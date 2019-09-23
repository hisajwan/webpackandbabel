import { person } from './lib';

let test = () => {
    console.log(person.name);
}

test();

async function getPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data;
}

getPosts().then(posts => console.log(posts));
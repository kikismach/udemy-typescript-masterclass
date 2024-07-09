"use strict";
// Define a generic function to fetch data with a default type
async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
// Using the fetchData function with the default type (any)
async function fetchDefault() {
    const data = await fetchData("https://jsonplaceholder.typicode.com/posts/1");
    console.log(data); // Output: any data structure, depends on the response
}
fetchDefault();
async function fetchPost() {
    const post = await fetchData("https://jsonplaceholder.typicode.com/posts/1");
    console.log(post); // Output: { userId: 1, id: 1, title: "...", body: "..." }
}
fetchPost();

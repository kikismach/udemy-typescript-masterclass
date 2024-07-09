// Define a generic function to fetch data with a default type
async function fetchData<T = any>(url: string): Promise<T> {
  const response = await fetch(url);
  const data: T = await response.json();
  return data;
}

// Using the fetchData function with the default type (any)
async function fetchDefault() {
  const data = await fetchData("https://jsonplaceholder.typicode.com/posts/1");
  console.log(data); // Output: any data structure, depends on the response
}

fetchDefault();

// Using the fetchData function with a specified type
// Lets declare a type based on the response that we get from the above fake API
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function fetchPost() {
  const post = await fetchData<Post>("https://jsonplaceholder.typicode.com/posts/1");
  console.log(post); // Output: { userId: 1, id: 1, title: "...", body: "..." }
}

fetchPost();

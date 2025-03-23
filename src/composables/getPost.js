export default async function getPosts() {
    const res = await fetch('http://localhost:3000/posts');
    return await res.json();
  }
  
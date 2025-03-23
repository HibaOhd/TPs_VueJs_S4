export default async function getPost(id) {
    const res = await fetch(`http://localhost:3000/posts/${id}`);
    return await res.json();
  }
  
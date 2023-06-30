import Image  from 'next/image'

const fetchComments = async (id) => {
  await new Promise(resolve => setTimeout(resolve, 3000))
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json());
};
export default async function Comments({ params }) {
  const { id } = params;
  const comments = await fetchComments(id);
  return (
    <ul style={{fontSize : '13px'}}>
        {comments?.map( comment => (
            <li key={comment.id}>
                <Image alt='avatar'
                width={100}
                height={100}
                src={`https://api.dicebear.com/6.x/pixel-art/svg?seed=${comment.email}` }/> 
                <h2>{comment.name}</h2>
                <p>{comment.body}</p>
            </li>
        ))}
    </ul>
  );
}
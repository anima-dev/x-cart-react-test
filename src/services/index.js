const getPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        if (!response.ok) {
        throw new Error (`Could not fetch Posts with status ${response.status}`)
        }

        const result = await response.json()

        const _transformPost = ({id, title, body}) => {
            return {
                id,
                title, 
                body,
                liked: false
            };
        };

        return result.map((post) => _transformPost(post));
};

export default getPosts;
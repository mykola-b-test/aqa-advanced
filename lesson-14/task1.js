import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    validateStatus: () => true,
});

// Interceptor for requests
axiosInstance.interceptors.request.use(
    function (request) {
        console.log(
            `sending ${request.method.toUpperCase()} to ${request.url}`,
        );
        if (request.data) console.log('Payload:', request.data);
        return request;
    },
    function (error) {
        return Promise.reject(error);
    },
);

// Interceptor for responses
axiosInstance.interceptors.response.use(
    function (response) {
        console.log(
            `received status: ${response.status} from ${response.config.url}`,
        );
        return response;
    },
    function (error) {
        console.log(`${error.message}`);
        return Promise.reject(error);
    },
);

// Test Request #1 - get user data by id
export async function getUserById(id) {
    return axiosInstance.request({
        method: 'GET',
        url: `/users/${id}`,
    });
}
// getUserById(2);

// Test Request #2 - create new post for user
export async function createNewPost(postData) {
    return axiosInstance.request({
        method: 'POST',
        url: '/posts',
        data: postData,
    });
}

// createNewPost({
//     title: 'My New Post 1',
//     body: 'This is the content of my new post.',
//     userId: 2,
// });

// Test Request #3 - get post by id
export async function getPostById(postId) {
    return axiosInstance.request({
        method: 'GET',
        url: `/posts/${postId}`,
    });
}

// getPostById(77);

// Test Request #4 - update existing post
export async function updatePost(postId, updatedData) {
    return axiosInstance.request({
        method: 'PUT',
        url: `/posts/${postId}`,
        data: updatedData,
    });
}

// updatePost(77, {
//     title: 'Updated Post Title 33',
//     body: 'This is the updated content of the post.',
//     userId: 8,
// });

// Test Request #5 - delete existing post
export async function deletePost(postId) {
    return axiosInstance.request({
        method: 'DELETE',
        url: `/posts/${postId}`,
    });
}
// deletePost(77);

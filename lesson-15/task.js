import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    validateStatus: () => true,
});

axiosInstance.interceptors.request.use(
    function (config) {
        console.log(`Request on: ${config.url}`);
        return config;
    },
    function (error) {
        return Promise.reject(error);
    },
);

axiosInstance.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        console.log(`Response error: ${error.message}`);
        return Promise.reject(error);
    },
);

// Test request on fake domain to trigger error
export async function getInvalidRequest() {
    return axiosInstance.request({
        method: 'GET',
        url: 'https://wrong-domain1.com/wrong-path',
    });
}

// Test custom get params and headers send with request
export async function getRequestWithCustomParamsAndHeaders(postId) {
    return await axiosInstance.request({
        method: 'GET',
        url: '/comments',
        params: {
            postId: postId,
        },
        headers: {
            'My-Custom-Header': 'CustomHeaderValue',
        },
    });
}
// getRequestWithCustomParamsAndHeaders(2);

// Test to get comments
export const getCommentsByPostId = async (postId) => {
    return await axiosInstance.request({
        method: 'GET',
        url: '/comments',
        params: {
            postId: postId,
        },
    });
};
// getCommentsByPostId(2);

import {
    getUserById,
    createNewPost,
    getPostById,
    updatePost,
    deletePost,
} from '../task1.js';

describe('API Tests for JSONPlaceholder', () => {
    test('Get user by ID - success scenario', async () => {
        const response = await getUserById(2);
        expect(response.status).toBe(200);
        expect(response.data.id).toBe(2);
    });

    test('Create new post - success scenario', async () => {
        const newPostData = {
            title: 'My New Post 1',
            body: 'This is the content of my new post.',
            userId: 2,
        };
        const response = await createNewPost(newPostData);
        expect(response.status).toBe(201);
        expect(response.data).toMatchObject(newPostData);
    });

    test('Get post by ID - success scenario', async () => {
        const response = await getPostById(77);
        expect(response.status).toBe(200);
        expect(response.data).toHaveProperty('id', 77);
    });

    test('Update existing post - success scenario', async () => {
        const updatedPostData = {
            title: 'Updated Post Title 33',
            body: 'This is the updated content of the post.',
            userId: 8,
        };
        const response = await updatePost(77, updatedPostData);
        expect(response.status).toBe(200);
        expect(response.data).toMatchObject(updatedPostData);
    });

    test('Delete existing post - success scenario', async () => {
        const response = await deletePost(77);
        expect(response.status).toBe(200);
        expect(response.data).toEqual({});
    });
});

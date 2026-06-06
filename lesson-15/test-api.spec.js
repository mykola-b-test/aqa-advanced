import {
    getInvalidRequest,
    getRequestWithCustomParamsAndHeaders,
    getCommentsByPostId,
    axiosInstance,
} from './task.js';
import { jest } from '@jest/globals';

describe('Error Handling with Axios', () => {
    test('check error handling for invalid requests', async () => {
        try {
            await getInvalidRequest();
        } catch (error) {
            expect(error).not.toBeNull();
            expect(error.message).toMatch(/ENOTFOUND/);
        }
    });
    test('check custom params and headers send with request', async () => {
        const response = await getRequestWithCustomParamsAndHeaders(2);
        expect(response.status).toBe(200);
        expect(response.config.params).toHaveProperty('postId', 2);
        expect(response.config.headers).toHaveProperty(
            'My-Custom-Header',
            'CustomHeaderValue',
        );
    });
    test('mocking response data for getCommentsByPostId', async () => {
        const mockStatus = 200;
        const mockComments = [
            {
                postId: 2,
                id: 1,
                name: 'Comment 1',
                email: 'test@gmail.com',
                body: 'This is a test comment 1.',
            },
            {
                postId: 2,
                id: 2,
                name: 'Comment 2',
                email: 'test2@gmail.com',
                body: 'This is a test comment 2.',
            },
        ];
        const axiosSpy = jest
            .spyOn(axiosInstance, 'request')
            .mockResolvedValue({
                status: mockStatus,
                data: mockComments,
            });

        const response = await getCommentsByPostId(2);
        expect(response.status).toBe(200);
        expect(response.data).toEqual(mockComments);

        axiosSpy.mockRestore();
    });
    test('mocking failed request for getCommentsByPostId', async () => {
        const mockErrorMessage = new Error('500:Network Error');
        const axiosSpy = jest
            .spyOn(axiosInstance, 'request')
            .mockRejectedValue(mockErrorMessage);

        try {
            await getCommentsByPostId(2);
        } catch (error) {
            expect(error).not.toBeNull();
            expect(error.message).toBe('500:Network Error');
        }

        axiosSpy.mockRestore();
    });
});

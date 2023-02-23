import { defineMock } from 'vite-plugin-mock-dev-server'
import { successResponse } from './shared'
import md5Encryption from "../src/utils/md5Encryption"

// login
export default defineMock({
    url: '/api/user/login',
    method: 'POST',
    body({ body }) {
        const user: Record<string, any> = {};
        user.username = body.username;
        const token = md5Encryption(body.username)
        return successResponse({
            token,
            user
        })
    }
})


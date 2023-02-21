import { defineMock } from 'vite-plugin-mock-dev-server'
import { successResponse } from './shared'

// login
export default defineMock({
    url: '/api/user/login',
    method: 'POST',
    body({ body }) {
        debugger
        const user: Record<string, any> = {};
        user.username = body.username;
        return successResponse(user)
    }
})
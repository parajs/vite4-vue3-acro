import { defineMock } from 'vite-plugin-mock-dev-server'
import { successResponse } from './shared'
import homeList from './data/home'


// home list
export default defineMock({
    url: '/api/mock/list',
    method: 'GET',
    body: successResponse(homeList)
})


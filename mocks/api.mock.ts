import { defineMock } from 'vite-plugin-mock-dev-server'
import { successResponseWrap } from './shared'
import homeList from './data/home'
export default defineMock({
    url: '/api/home/list',
    body: successResponseWrap(homeList)
})
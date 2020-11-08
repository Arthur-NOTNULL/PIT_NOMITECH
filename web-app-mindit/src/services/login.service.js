import http from './http'

export const isLoggged = () => {
    return !!localStorage.getItem('token');
}
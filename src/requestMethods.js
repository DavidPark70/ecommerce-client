import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMWJkM2UyMGU4MjVmYjI1Yjc4YzYxNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MzYzMjU1NCwiZXhwIjoxNjYzODkxNzU0fQ.NG4MwP4Sr4u5XlY6vCO4oZe25BCAk_uP2VcAy-wB07Q';

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
});
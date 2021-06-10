import axios from 'axios';
import { BASE_URL } from '@constants/config';

const headers = {
	Accept: 'application/json, text/plain, */*',
};

// get
const _sendRequest = async (url: string, method: string, params?: any[]) => {
	try {
		const res = await axios[method](`${BASE_URL}${url}`, {
			headers: headers,
			params,
		});

		if (res.status === 200) {
			return res.data;
		}
	} catch (error) {
		console.log(error);
	}
};

const _sendRequestForData = async (url: string, data: any[], method: string) => {
	try {
		const res = await axios[method](BASE_URL + url, data);
		if (res.status === 200) {
			return res.data;
		}
	} catch (error) {
		console.log(error);
	}
};

const _get = (url: string, params?: any[]) => _sendRequest(url, 'get', params);

const _post = (url: string, data: any[]) => _sendRequestForData(url, data, 'post');

const _delete = (url: string, params: any[]) => _sendRequest(url, 'delete', params);

const _put = (url: string, data: any[]) => _sendRequestForData(url, data, 'put');

export const api = {
	getAllPosts: () => _get('/posts'),
};

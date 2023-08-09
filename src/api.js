import axios from 'axios';

const backendBaseUrl = 'http://localhost:5000'; // Your backend server's URL

const api = {
	getUsers: () => {
		return axios.get(`${backendBaseUrl}/api/users`);
	},
	getUserGroups: (userId) => {
		return axios.get(`${backendBaseUrl}/api/user/${userId}/groups`);
	},
	updateUserGroups: (userId, groups) => {
		return axios.post(`${backendBaseUrl}/api/user/${userId}/update-groups`, {
			groups,
		});
	},
};

export default api;

import api from '../api';

export const fetchUsers = () => {
	return async (dispatch) => {
		try {
			const response = await api.getUsers();
			dispatch({ type: 'FETCH_USERS_SUCCESS', payload: response.data });
		} catch (err) {
			dispatch({
				type: 'FETCH_USERS_ERROR',
				payload: err.response.msg,
			});
		}
	};
};

export const fetchUserGroups = (userId) => {
	return async (dispatch) => {
		try {
			const response = await api.getUserGroups(userId);
			dispatch({ type: 'FETCH_USER_GROUPS_SUCCESS', payload: response.data });
		} catch (err) {
			dispatch({
				type: 'FETCH_USER_GROUPS_ERROR',
				payload: err.response.msg,
			});
		}
	};
};

export const updateUserGroups = (userId, groups) => {
	return async (dispatch) => {
		try {
			await api.updateUserGroups(userId, groups);
			dispatch({ type: 'UPDATE_USER_GROUPS_SUCCESS', payload: groups });
		} catch (err) {
			dispatch({
				type: 'UPDATE_USER_GROUPS_ERROR',
				payload: err.response.msg,
			});
		}
	};
};

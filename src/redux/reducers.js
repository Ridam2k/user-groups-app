const initialState = {
	users: [],
	selectedUser: '',
	selectedGroups: [],
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'FETCH_USERS_SUCCESS':
			return { ...state, users: action.payload };
		case 'FETCH_USER_GROUPS_SUCCESS':
			return { ...state, selectedGroups: action.payload };
		case 'UPDATE_USER_GROUPS_SUCCESS':
			return { ...state, selectedGroups: action.payload };
		default:
			return state;
	}
};

export default userReducer;

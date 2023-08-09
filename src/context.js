// src/context.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { fetchUsersAndGroups } from './api';

const DataContext = createContext();

export function DataProvider({ children }) {
	const [users, setUsers] = useState([]);
	const [groups, setGroups] = useState([]);

	useEffect(() => {
		fetchUsersAndGroups()
			.then((data) => {
				setUsers(data.users);
				setGroups(data.groups);
			})
			.catch((error) => console.error('Error fetching data:', error));
	}, []);

	const updateUser = (updatedUser) => {
		setUsers((prevUsers) => {
			const updatedUsers = prevUsers.map((user) =>
				user.id === updatedUser.id ? updatedUser : user
			);
			return updatedUsers;
		});
	};

	const updateGroup = (updatedGroup) => {
		setGroups((prevGroups) => {
			const updatedGroups = prevGroups.map((group) =>
				group.id === updatedGroup.id ? updatedGroup : group
			);
			return updatedGroups;
		});
	};

	const value = {
		users,
		groups,
		updateUser,
		updateGroup,
	};

	return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

// ...

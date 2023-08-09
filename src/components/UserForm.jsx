import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, fetchUserGroups, updateUserGroups } from '../redux/actions';

const UserForm = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const selectedUser = useSelector((state) => state.user.selectedUser);
  const selectedGroups = useSelector((state) => state.user.selectedGroups);
  const [selectedGroupsLocal, setSelectedGroupsLocal] = useState([]);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleUserChange = (event) => {
    const userId = event.target.value;
    dispatch(fetchUserGroups(userId));
  };

  const handleGroupsChange = (event) => {
    const selectedOptions = Array.from(event.target.selectedOptions, (option) => option.value);
    setSelectedGroupsLocal(selectedOptions);
  };

  const handleUpdateGroups = () => {
    dispatch(updateUserGroups(selectedUser, selectedGroupsLocal));
  };

  return (
    <div>
      <h1>User Group Management</h1>
      <div>
        <label htmlFor="userId">User ID:</label>
        <select id="userId" value={selectedUser} onChange={handleUserChange}>
          <option value="">Select User</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="groups">Groups:</label>
        <select id="groups" multiple value={selectedGroupsLocal} onChange={handleGroupsChange}>
          {selectedGroups.map((group) => (
            <option key={group} value={group}>
              {group}
            </option>
          ))}
        </select>
      </div>
      <button onClick={handleUpdateGroups}>Update Groups</button>
    </div>
  );
};

export default UserForm;

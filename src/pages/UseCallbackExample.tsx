import React, { useState, useCallback } from "react";

interface User {
  firstName: string;
  lastName: string;
}

const UseCallbackExample: React.FC = () => {
  const [users, setUser] = useState<[User]>();

  const greeting = useCallback(
    (user: User) => alert(`Olá ${user.firstName}`),
    []
  );

  return (
    <div>
      {users?.map(user => (
        <div>{user.firstName}</div>
      ))}
    </div>
  );
};

export default UseCallbackExample;

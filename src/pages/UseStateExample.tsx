import React, { useState } from "react";

interface User {
  firstName: string;
  lastName: string;
}

const UseStateExample: React.FC = () => {
  const [users, setUser] = useState<[User]>();
  return (
    <div>
      {users?.map(user => (
        <div>{user.firstName}</div>
      ))}
    </div>
  );
};

export default UseStateExample;

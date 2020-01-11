import React, { useState, useMemo } from "react";

interface User {
  firstName: string;
  lastName: string;
}

const UseMemoExample: React.FC = () => {
  const [users, setUser] = useState<[User]>();

  const names = useMemo(
    () => users?.map(user => user.firstName).join(", ") || "",
    [users]
  );
  return (
    <div>
      {users?.map(user => (
        <div>{user.firstName}</div>
      ))}
    </div>
  );
};

export default UseMemoExample;

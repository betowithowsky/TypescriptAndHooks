import React, { useState, useRef } from "react";

interface User {
  firstName: string;
  lastName: string;
}

const UseRefExample: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  inputRef.current?.focus();

  return (
    <form action="">
      <input type="text" ref={inputRef} />
    </form>
  );
};

export default UseRefExample;

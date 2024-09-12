import React from "react";

import { Button } from "@bigbinary/neetoui";

const Header = ({ heading, buttonText }) => (
  <header className="fixed inset-x-0 top-0 z-10 bg-white p-4 shadow-md">
    <div className="flex items-center justify-between">
      <h1 className="text-xl font-bold">{heading}</h1>
      {buttonText && ( // Add check for buttonText to prevent errors if it's missing
        <Button
          className="rounded-md bg-blue-500 px-4 py-2 text-white"
          label={buttonText}
        />
      )}
    </div>
  </header>
);

export default Header;

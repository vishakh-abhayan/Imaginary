import React from "react";

function Header({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <>
      <h2 className="h2-blod text-dark-600">{title}</h2>
      {subtitle && <p className="p-16-regular mt-4">{subtitle}</p>}
    </>
  );
}

export default Header;

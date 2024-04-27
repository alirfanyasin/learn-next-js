import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h4>Inner Layout</h4>
      <div>{children}</div>
    </div>
  );
}

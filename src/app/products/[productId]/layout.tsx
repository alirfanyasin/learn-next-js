import React from "react";

export default function ProductDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <h1>Ini adalah nested layout</h1>
    </div>
  );
}

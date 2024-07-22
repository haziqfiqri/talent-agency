import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return <main className="min-h-dvh">{children}</main>;
}

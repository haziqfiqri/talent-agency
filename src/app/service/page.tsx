import Link from "next/link";
import React from "react";

export default function Service() {
  return (
    <React.Fragment>
      <h1 className="text-5xl">/service</h1>
      <Link href={"/service/talent"}>/talents</Link>
    </React.Fragment>
  );
}

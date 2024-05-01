// Static Metadata
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Page",
};

export default function AboutPage() {
  return (
    <div>
      <h3>About Page</h3>
      <Link href="/">Home</Link>
    </div>
  );
}

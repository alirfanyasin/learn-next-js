import { Metadata } from "next";

export const metadata: Metadata = {
  // title: "Next.js",
  title: {
    absolute: "",
    default: "Belajar Next JS 14",
    template: "%s | Next JS",
  },
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header style={{ backgroundColor: "lightblue", padding: "1rem" }}>
          <p>Header</p>
        </header>

        <div>{children}</div>

        <footer style={{ backgroundColor: "skyblue", padding: "1rem" }}>
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}

import "./globals.css";
import Navbar from "../components/navbar";
import { ubuntu } from "./fonts";

export const metadata = {
  title: {
    default: "Next.js Fundamental Learning",
    template: "%s | Next.js Fundamental Learning",
  },
  description: "Next.js Fundamental Learning",
};

export default function ({ children }) {
  return (
    <html lang="en" className={ubuntu.variable}>
      <head></head>
      <body className="pl-4 pt-4 flex flex-col min-h-screen">
        <header>
          <Navbar />
        </header>
        <main className="py-3 grow">{children}</main>
        <footer className="py-3 text-center">[footer]</footer>
      </body>
    </html>
  );
}

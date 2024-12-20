import Link from "next/link";
const Navbar = () => {
  return (
    <nav>
      <ul className="flex gap-2">
        <li>
          <Link href="/" className="font-ubuntu hover:underline">
            Home
          </Link>
        </li>
        <li className="ml-auto">
          <Link href="/blog" className="hover:underline">
            Blog
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:underline" prefetch={false}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

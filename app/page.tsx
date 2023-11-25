import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <Link href="/users">
        <p className="bg-cyan-300">User Page</p>
      </Link>
      <Link href="/users/new">
        <p className="bg-cyan-500">new user</p>
      </Link>
    </main>
  );
}

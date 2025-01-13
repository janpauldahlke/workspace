"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  const routeTest = () => {
    router.push("/posts");
  };

  return (
    <main>
      <div>
        <Image src="/logo.jpg" alt="Logo" width={200} height={100} />
      </div>
      <h1>nextjs playground</h1>
      <p>weiterbildung mit der one</p>

      <button className="myButton" onClick={routeTest}>
        See and Create Postings
      </button>
    </main>
  );
}

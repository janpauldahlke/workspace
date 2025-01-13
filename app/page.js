"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const routeTest = () => {
    router.push("/posts");
  };

  return (
    <main>
      <img src="/logo.png" alt="A server surrounded by magic sparkles." />
      <h1>nextjs playground</h1>
      <p>weiterbildung mit der one</p>

      <button onClick={routeTest}>See Posts</button>
    </main>
  );
}

"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const routeTest = () => {
    router.push("/test");
  };

  return (
    <main>
      <img src="/logo.png" alt="A server surrounded by magic sparkles." />
      <h1>nextjs playground</h1>
      <p>🔥 rock it 🔥</p>

      <button onClick={routeTest}>goto test</button>
    </main>
  );
}

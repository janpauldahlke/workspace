"use client";

import { useRouter } from "next/navigation";
import PostsList from "../components/PostsList";

export default function TestPage() {
  const router = useRouter();

  const back = () => {
    router.push("/");
  };

  return (
    <main>
      <h1>Feed:</h1>
      <PostsList></PostsList>
      <button onClick={back}>go back</button>
    </main>
  );
}

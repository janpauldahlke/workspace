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
      <PostsList></PostsList>
      <button className="myButton" onClick={back}>
        go back
      </button>
    </main>
  );
}

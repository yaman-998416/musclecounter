import { useState } from "react";
import { compliments } from "../data/ListOfCompliments";

export function useCompliment() {
  const [compliment, setCompliment] = useState("");

  function pickRandomCompliment() {
    const random =
      compliments[Math.floor(Math.random() * compliments.length)];
    setCompliment(random);
  }

  return {
    compliment,
    // 状態と、操作（関数）を返す！
    pickRandomCompliment,
  };
}

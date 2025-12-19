export function Compliment({ text, isVisible }) {
  return (
    <h2
      className={`
        mt-4
        text-2xl
        font-bold
        text-yellow-400
        transition-all
        duration-500
        ${
          isVisible
            ? "visible opacity-100 animate-[glow_0.8s_ease-out]"
            : "invisible opacity-0"
        }
      `}
    >
      {text}
    </h2>
  );
}
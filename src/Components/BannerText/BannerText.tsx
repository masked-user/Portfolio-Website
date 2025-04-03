import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const name = "ADITYA SRIRAM";
const chineseCharacters = "你好世界编程未来智能代码创新设计"; // Random Chinese characters

export const BannerText = () => {
  const [letters, setLetters] = useState(() =>
    name.split("").map((char) =>
      char === " " ? " " : chineseCharacters[Math.floor(Math.random() * chineseCharacters.length)]
    )
  );
  const [lockedLetters, setLockedLetters] = useState(0); // Tracks how many letters are finalized

  useEffect(() => {
    const intervals = name.split("").map((_) =>
      setInterval(() => {
        setLetters((prev) =>
          prev.map((_char, i) =>
            i < lockedLetters // Keep previous letters locked
              ? name[i]
              : chineseCharacters[Math.floor(Math.random() * chineseCharacters.length)]
          )
        );
      }, Math.random() * 150 + 50) // Random interval per letter
    );

    // Lock each letter one by one with a delay
    const lockInterval = setInterval(() => {
      setLockedLetters((prev) => {
        if (prev < name.length) {
          return prev + 1; // Progressively lock each letter
        } else {
          clearInterval(lockInterval);
          intervals.forEach(clearInterval);
          return prev;
        }
      });
    }, 200); // Locks one letter every 200ms

    return () => {
      intervals.forEach(clearInterval);
      clearInterval(lockInterval);
    };
  }, [lockedLetters]); // Added dependency to prevent unnecessary re-renders

  return (
    <div className="text-2xl opacity-50 font-bold flex gap-x-1">
      {letters.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: i * 0.1 }}
          className="text-white min-w-[2ch] text-3xl text-center"
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};

import { useState, useEffect, useRef } from 'react';

export function useTypingAnimation(
  texts: string[],
  {
    typeSpeed = 80,
    deleteSpeed = 40,
    pauseDuration = 2000,
  } = {}
) {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const currentText = texts[textIndex];

    if (isPaused) {
      timeout.current = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);
      return;
    }

    if (isDeleting) {
      if (displayText.length === 0) {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
        return;
      }
      timeout.current = setTimeout(() => {
        setDisplayText(displayText.slice(0, -1));
      }, deleteSpeed);
    } else {
      if (displayText === currentText) {
        setIsPaused(true);
        return;
      }
      timeout.current = setTimeout(() => {
        setDisplayText(currentText.slice(0, displayText.length + 1));
      }, typeSpeed);
    }

    return () => clearTimeout(timeout.current);
  }, [displayText, isDeleting, isPaused, textIndex, texts, typeSpeed, deleteSpeed, pauseDuration]);

  return displayText;
}

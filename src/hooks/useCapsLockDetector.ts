import { useEffect, useRef, useState } from "react";

export const useCapsLockDetector = () => {

  const ref = useRef<HTMLInputElement | null>(null);
  const [isCapsLockActive, setIsCapsLockActive] = useState<boolean>(false);

  useEffect(() => {
    const capslockdetect = (e: KeyboardEvent) => {
      if (e.getModifierState("CapsLock")) {
        setIsCapsLockActive(true);
      } else setIsCapsLockActive(false);
    };
    ref.current?.addEventListener("keyup", capslockdetect);
    return ()=>ref.current?.removeEventListener("keyup", capslockdetect);
  }, []);

  return { ref, isCapsLockActive, setIsCapsLockActive}
}
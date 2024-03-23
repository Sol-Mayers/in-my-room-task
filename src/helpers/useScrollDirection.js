import { useEffect, useState } from "react";

//Функция распознавания направления скролла
export default function useScrollDirection(setScrollCount, lastScrollY) {
    const [scrollDirection, setScrollDirection] = useState(null);
    useEffect(() => {
        const updateScrollDirection = () => {
            const scrollY = window.scrollY;
            setScrollCount(scrollY);
            if (scrollY > 200) {
                let direction = scrollY > lastScrollY ? "down" : "up";
                if (
                    direction !== scrollDirection &&
                    (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)
                ) {
                    setScrollDirection(direction);
                }
                lastScrollY = scrollY > 0 ? scrollY : 0;
            }
        };
        window.addEventListener("scroll", updateScrollDirection);
        return () => {
            window.removeEventListener("scroll", updateScrollDirection);
        };
    }, [scrollDirection]);

    return scrollDirection;
}

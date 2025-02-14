import { useEffect } from "react";

function useOnClickOutside(
    ref: React.RefObject<HTMLElement | null>,
    callback: Function
) {
    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callback();
            }
        };

        document.addEventListener("mousedown", handleClick);

        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, [ref, callback]);
}

export default useOnClickOutside;

import { cn } from "@/lib/utils";
import { useRef } from "react";
import gsap from "gsap";
import useIsomorphicLayoutEffect from "@/providers/useIsoMorphicLayout";

interface PreloadProps {
  endedLoading: boolean;
}

export default function Preload({ endedLoading }: PreloadProps) {
  const counterRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const counter = counterRef.current;

    if (counter) {
      gsap.to(counter, {
        innerHTML: 100,
        duration: 3,
        ease: "power1.out",
        onUpdate: () => {
          counter.innerHTML = counter.innerHTML;
          counter.innerHTML = `${Math.floor(parseInt(counter.innerHTML))}%`;
        },
      });
    }
  }, [endedLoading]);

  return (
    <div
      className={cn(
        "absolute top-0 left-0 right-0 bottom-0 z-[100] flex min-h-screen w-full items-center justify-center opacity-100 transition-all duration-700 ease-in-out bg-background",
        endedLoading && "opacity-0"
      )}
    >
      <div className="text-center font-semibold" ref={counterRef}>
        0%
      </div>
    </div>
  );
}

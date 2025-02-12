import { memo } from "react";

const AnimatedGradientTextComponent = ({ text }: { text: string }) => {
    return (
        <span className="inline-flex animate-text-gradient bg-gradient-to-r from-first-accent via-second-accent to-first-accent bg-[200%_auto] text-sm text-transparent font-bold bg-clip-text">
            {text}
        </span>
    );
};

// Menambahkan displayName secara eksplisit
const AnimatedGradientText = memo(AnimatedGradientTextComponent);

AnimatedGradientText.displayName = 'AnimatedGradientText';

export { AnimatedGradientText };

export const AnimatedGradientText = ({ text }: { text: string }) => {
    return (
        <span className="inline-flex animate-text-gradient bg-gradient-to-r from-first-accent via-second-accent to-first-accent bg-[200%_auto] text-sm text-transparent font-bold bg-clip-text">
            {text}
        </span>
    );
}

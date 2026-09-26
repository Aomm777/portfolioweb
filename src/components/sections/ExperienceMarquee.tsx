import React, { useRef, useState, useEffect, useCallback } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame,
} from "framer-motion";
import Image from "next/image";
import { usePerformance } from "@/hooks/usePerformance";
import { cn } from "@/lib/utils";

interface ParallaxProps {
    children: React.ReactNode;
    baseVelocity: number;
    isLowPowerMode?: boolean;
}

function ParallaxText({ children, baseVelocity = 100, isLowPowerMode = false }: ParallaxProps) {
    const baseX = useMotionValue(0);
    const contentRef = useRef<HTMLDivElement>(null);
    const [contentWidth, setContentWidth] = useState(0);

    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400,
    });

    // Always positive acceleration factor — direction is handled separately
    const velocityFactor = useTransform(smoothVelocity, (latest) => {
        return (Math.abs(latest) / 1000) * 5;
    });

    // Measure actual pixel width of one content copy
    const measure = useCallback(() => {
        if (contentRef.current) {
            setContentWidth(contentRef.current.scrollWidth);
        }
    }, []);

    useEffect(() => {
        measure();
        window.addEventListener("resize", measure);
        // Re-measure after images may have loaded
        const t1 = setTimeout(measure, 300);
        const t2 = setTimeout(measure, 1000);
        return () => {
            window.removeEventListener("resize", measure);
            clearTimeout(t1);
            clearTimeout(t2);
        };
    }, [measure]);

    /**
     * Pixel-based transform with modulo wrapping.
     *
     * baseX accumulates upward continuously. The transform converts it
     * to a translateX value that cycles seamlessly over one content width.
     *
     * - baseVelocity > 0 (row1): logos move LEFT → RIGHT
     *   translateX cycles: -contentWidth → 0 → -contentWidth → 0 ...
     *
     * - baseVelocity < 0 (row2): logos move RIGHT → LEFT
     *   translateX cycles: 0 → -contentWidth → 0 → -contentWidth ...
     */
    const x = useTransform(baseX, (v) => {
        if (contentWidth <= 0) return "0px";
        const mod = ((v % contentWidth) + contentWidth) % contentWidth;

        if (baseVelocity > 0) {
            // Left-to-right: start at -contentWidth, move toward 0
            return `${-contentWidth + mod}px`;
        } else {
            // Right-to-left: start at 0, move toward -contentWidth
            return `${-mod}px`;
        }
    });

    const isHovered = useRef(false);

    useAnimationFrame((_t, delta) => {
        if (isHovered.current || isLowPowerMode) return;

        // Clamp delta to prevent large jumps when returning from background tab
        const clampedDelta = Math.min(delta, 50);

        let moveBy = Math.abs(baseVelocity) * (clampedDelta / 1000);

        const vf = velocityFactor.get();
        if (vf > 0) {
            moveBy += moveBy * vf;
        }

        // Always accumulate forward — direction is handled in the transform
        baseX.set(baseX.get() + moveBy);
    });

    if (isLowPowerMode) {
        return (
            <div className="overflow-hidden whitespace-nowrap w-full py-1">
                <div
                    className={cn(
                        "flex",
                        baseVelocity > 0
                            ? "animate-marquee-reverse"
                            : "animate-marquee"
                    )}
                >
                    <div className="flex gap-4 shrink-0 pr-4">{children}</div>
                    <div className="flex gap-4 shrink-0 pr-4">{children}</div>
                    <div className="flex gap-4 shrink-0 pr-4">{children}</div>
                </div>
            </div>
        );
    }

    return (
        <div
            className="overflow-hidden whitespace-nowrap w-full py-1"
            onMouseEnter={() => (isHovered.current = true)}
            onMouseLeave={() => (isHovered.current = false)}
        >
            <motion.div
                className="flex"
                style={{ x, willChange: "transform" }}
            >
                {/* First copy — ref attached for measuring pixel width */}
                <div ref={contentRef} className="flex gap-4 shrink-0 pr-4">
                    {children}
                </div>
                <div className="flex gap-4 shrink-0 pr-4">{children}</div>
                <div className="flex gap-4 shrink-0 pr-4">{children}</div>
            </motion.div>
        </div>
    );
}

const GalleryItem = ({ image }: { image: { src: string; alt: string; title: string } }) => {
    return (
        <div className="relative shrink-0 w-[clamp(180px,38vw,280px)] h-[clamp(110px,22vw,160px)] md:w-[280px] md:h-[160px] overflow-hidden rounded-xl border border-neutral-200/70 dark:border-neutral-700/70 bg-neutral-100 dark:bg-neutral-900 group transition-all duration-300 hover:scale-[1.03] hover:shadow-xl">
            <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 160px, 280px"
                unoptimized
                className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-3 pb-2 pt-7 text-xs font-semibold text-white opacity-90">
                {image.title}
            </div>
        </div>
    );
};

export default function ExperienceMarquee() {
    const { isLowPowerMode } = usePerformance();
    const featuredWorks = [
        { src: "/images/bronopoly.png", alt: "Bronopoly Roblox game cover", title: "Bronopoly" },
        { src: "/images/heatthieves.png", alt: "HEAT THIEVES Roblox game cover", title: "HEAT THIEVES" },
        { src: "/images/anime-royale.png", alt: "Anime Royale Roblox game cover", title: "Anime Royale" },
        { src: "/images/escape-lab.png", alt: "Escape Lab Roblox game cover", title: "Escape Lab" },
        { src: "/experience/ai-camp-timeline.png", alt: "HamsterHub AI Camp poster", title: "HamsterHub AI Camp" },
        { src: "/experience/gamepee-camp-timeline.png", alt: "GamePee Camp poster", title: "GamePee Camp" },
    ];
    const workDetails = [
        { src: "/project/bronopoly1.png", alt: "Bronopoly gameplay screenshot", title: "Bronopoly Gameplay" },
        { src: "/project/bronopoly2.png", alt: "Bronopoly game development screenshot", title: "Bronopoly Development" },
        { src: "/project/bronopoly3.png", alt: "Bronopoly game feature screenshot", title: "Bronopoly Features" },
        { src: "/project/animeroyale1.png", alt: "Anime Royale gameplay screenshot", title: "Anime Royale Gameplay" },
        { src: "/project/escapelab1.png", alt: "Escape Lab gameplay screenshot", title: "Escape Lab Gameplay" },
        { src: "/experience/ai-camp-project-setup.png", alt: "AI Camp participant project setup", title: "AI Camp Projects" },
        { src: "/experience/ai-camp-gameplay.png", alt: "AI Camp game project gameplay", title: "AI Camp Gameplay" },
        { src: "/experience/gamepee-camp-detail-1.png", alt: "GamePee Camp Roblox Studio project", title: "GamePee Camp Project" },
        { src: "/experience/gamepee-camp-detail-2.png", alt: "GamePee Camp game development view", title: "GamePee Camp Development" },
    ];
    const repeatToFillRow = (items: typeof featuredWorks) => [...items, ...items];

    return (
        <section className="py-2 md:py-8 bg-background relative z-10 overflow-hidden">
            {/* Fog/Blur Blending */}
            <div className="absolute top-0 left-0 w-full h-16 md:h-32 bg-gradient-to-b from-background via-background/80 to-transparent z-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-16 md:h-32 bg-gradient-to-t from-background via-background/80 to-transparent z-20 pointer-events-none" />

            <div className="flex flex-col gap-2">
                {/* Row 1: LEFT → RIGHT */}
                <ParallaxText baseVelocity={40} isLowPowerMode={isLowPowerMode}>
                    {repeatToFillRow(featuredWorks).map((image, idx) => (
                        <GalleryItem key={`r1-${idx}`} image={image} />
                    ))}
                </ParallaxText>

                {/* Row 2: RIGHT → LEFT */}
                <ParallaxText baseVelocity={-40} isLowPowerMode={isLowPowerMode}>
                    {repeatToFillRow(workDetails).map((image, idx) => (
                        <GalleryItem key={`r2-${idx}`} image={image} />
                    ))}
                </ParallaxText>
            </div>
        </section>
    );
}

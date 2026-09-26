'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePortfolioData } from '@/hooks/usePortfolioData';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useState } from 'react';
import { SoftSkill } from '@/types';

const skillVisuals: Record<string, string> = {
    'Team Leadership': '/experience/bronopoly-team-leadership.png',
    'Teamwork': '/images/heatthieves.png',
    'Time Management': '/images/heat-thieves-gameplay.jpg',
    'Mentorship': '/experience/gamepee-camp-detail-1.png',
    'Problem Solving': '/experience/gamepee-camp-detail-2.png',
    'More': 'https://illustrations.popsy.co/white/abstract-art-6.svg',
};

const EXTRA_SKILLS = [
    'Problem-Solving',
    'Analytical Thinking',
    'Critical Thinking',
    'Communication',
    'Teamwork & Collaboration',
    'Adaptability',
    'Attention to Detail',
    'Leadership'
];

export const SoftSkills = () => {
    const portfolioData = usePortfolioData();
    const skills = portfolioData.softSkills;

    return (
        <section id="soft-skills" className="py-32 px-6 relative overflow-hidden bg-background">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header - Refined Theme-Aware Layout */}
                <div className="mb-24 flex flex-col items-start gap-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-6xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.05] max-w-5xl"
                    >
                        Strategic <br /> Directives
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 0.5 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-foreground text-lg font-sans max-w-2xl pt-6 leading-relaxed border-t border-border mt-4"
                    >
                        Interpersonal capabilities engineered for high-impact
                        leadership and systemic problem solving in complex environments.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((skill, index) => (
                        <BentoSkillCard
                            key={skill.name}
                            skill={skill}
                            index={index + 1}
                            illustration={skillVisuals[skill.name]}
                        />
                    ))}

                    {/* Item 08: More (Interactive) */}
                    <BentoMoreCard index={skills.length + 1} />
                </div>
            </div>

            {/* Subtle background decoration */}
            <div className="absolute top-1/4 -right-24 w-96 h-96 bg-primary/2 rounded-full blur-[120px] pointer-events-none opacity-20" />
        </section>
    );
};

const BentoSkillCard = ({
    skill,
    index,
    className,
    illustration,
    isWide
}: {
    skill: SoftSkill,
    index: number,
    className?: string,
    illustration?: string,
    isWide?: boolean
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={cn(
                "group relative bg-card/10 hover:bg-card/20 border border-border/80 rounded-[32px] p-10 flex flex-col justify-between transition-all duration-500 overflow-hidden shadow-sm hover:shadow-md hover:border-border",
                isWide ? "min-h-[450px]" : "min-h-[520px]",
                className
            )}
        >
            {/* Top Area */}
            <div className="space-y-2 relative z-10 flex justify-between items-start">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground transition-colors duration-500">
                    {skill.name}
                </h3>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/30 group-hover:text-muted-foreground/60 transition-colors">#{String(index).padStart(2, '0')}</span>
            </div>

            {/* Illustration Area */}
            <div className={cn(
                "relative z-0 flex items-center justify-center transition-all duration-700 ease-out",
                isWide ? "w-full h-64 -mt-8" : "w-full h-60 my-10"
            )}>
                {illustration ? (
                    <div className="relative w-full h-full flex items-center justify-center">
                        <div className="absolute inset-0 bg-primary/5 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                        <Image
                            src={illustration}
                            alt={skill.name}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className={cn(
                                "relative z-10 group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100",
                                illustration.startsWith('/') ? "object-cover rounded-2xl" : "object-contain invert dark:invert-0"
                            )}
                        />
                    </div>
                ) : null}
            </div>

            {/* Bottom: Description & Terminology */}
            <div className="relative z-10 space-y-4">
                <div className="h-[1px] w-8 bg-border group-hover:w-24 transition-all duration-500" />
                <p className="text-muted-foreground leading-relaxed text-[15px] group-hover:text-foreground transition-colors duration-500">
                    {skill.description}
                </p>
                <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary/50 transition-colors" />
                    <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-muted-foreground/40 group-hover:text-muted-foreground/80 transition-colors">Core Capability</span>
                </div>
            </div>

            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-primary/[0.02] pointer-events-none" />
        </motion.div>
    );
};

const BentoMoreCard = ({ index }: { index: number }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative bg-card/10 hover:bg-card/20 border border-border/80 rounded-[32px] p-10 flex flex-col justify-between transition-all duration-500 overflow-hidden min-h-[520px] shadow-sm hover:shadow-md hover:border-border"
        >
            <AnimatePresence mode="wait">
                {!isHovered ? (
                    <motion.div
                        key="normal"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="h-full flex flex-col justify-between"
                    >
                        <div className="space-y-2 relative z-10 flex justify-between items-start">
                            <h3 className="text-4xl font-bold text-foreground italic">Read More</h3>
                            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/30 group-hover:text-muted-foreground/60 transition-colors">#{String(index).padStart(2, '0')}</span>
                        </div>

                        <div className="relative z-0 flex items-center justify-center w-full h-60 my-10">
                            <Image
                                src={skillVisuals['More']}
                                alt="More skills"
                                width={320}
                                height={320}
                                className="object-contain relative z-10 group-hover:scale-105 transition-transform duration-700 dark:invert-0 invert opacity-80 group-hover:opacity-100"
                            />
                        </div>

                        <div className="relative z-10 space-y-4">
                            <p className="text-muted-foreground leading-relaxed text-[15px]">
                                Exploring a broader set of professional capabilities and tactical expertise.
                            </p>
                            <div className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary/60 transition-colors" />
                                <span className="text-[8px] font-mono uppercase tracking-[0.2em] text-muted-foreground/30 group-hover:text-muted-foreground/60 transition-colors">Hover to reveal catalog</span>
                            </div>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="hover"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="h-full flex flex-col justify-between"
                    >
                        <div className="space-y-4 pt-4">
                            <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground/40 border-b border-border pb-2">Skill Expansion</h4>
                            <div className="grid grid-cols-1 gap-y-3">
                                {EXTRA_SKILLS.map((skill, i) => (
                                    <motion.div
                                        key={skill}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.04 }}
                                        className="flex items-center gap-3 text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
                                    >
                                        <div className="w-1 h-1 bg-primary/40 rounded-full" />
                                        {skill}
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="pt-8 opacity-40">
                            <p className="text-[10px] font-mono leading-relaxed italic text-foreground">
                                & systematically expanding the directive framework...
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-primary/[0.02] pointer-events-none" />
        </motion.div>
    );
};

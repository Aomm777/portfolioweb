'use server';

import { portfolioData } from '@/data/portfolio';

export interface GalleryImage {
    id: string;
    src: string;
    poster?: string;
    title: string;
    category: string;
    type: 'image' | 'video';
}

export async function getAllGalleryImages(): Promise<GalleryImage[]> {
    const projectImages = portfolioData.projects.flatMap((project) => [
        ...(project.image
            ? [{
                id: `${project.id}-cover`,
                src: project.image,
                title: `${project.title} — Cover`,
                category: project.title,
                type: 'image' as const,
            }]
            : []),
        ...(project.galleryImages ?? []).map((src, index) => ({
            id: `${project.id}-detail-${index + 1}`,
            src,
            title: `${project.title} — Detail ${index + 1}`,
            category: project.title,
            type: 'image' as const,
        })),
        ...(project.videoUrl
            ? [{
                id: `${project.id}-gameplay-video`,
                src: project.videoUrl,
                poster: project.galleryImages?.[0] ?? project.image,
                title: `${project.title} — Gameplay Video`,
                category: project.title,
                type: 'video' as const,
            }]
            : []),
    ]);

    const experienceImages = portfolioData.experiences.flatMap((experience) =>
        [experience.timelineImage, ...(experience.galleryImages ?? [])]
            .filter((src): src is string => Boolean(src))
            .map((src, index) => ({
                id: `${experience.id}-photo-${index + 1}`,
                src,
                title: `${experience.company} — Photo ${index + 1}`,
                category: experience.company,
                type: 'image' as const,
            }))
    );

    const certificateImages = portfolioData.achievements
        .filter((achievement) => achievement.image)
        .map((achievement) => ({
            id: `${achievement.id}-certificate`,
            src: achievement.image as string,
            title: achievement.title,
            category: 'Certificates',
            type: 'image' as const,
        }));

    const extraImages = portfolioData.gallery.map((item) => ({
        id: item.id,
        src: item.url,
        title: item.title,
        category: item.category,
        type: item.type,
    }));

    // The same photo can appear in several sources; keep its first occurrence only.
    const seen = new Set<string>();
    return [...projectImages, ...experienceImages, ...certificateImages, ...extraImages].filter((image) => {
        if (seen.has(image.src)) return false;
        seen.add(image.src);
        return true;
    });
}

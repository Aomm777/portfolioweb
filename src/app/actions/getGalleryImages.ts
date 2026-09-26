'use server';

import { portfolioData } from '@/data/portfolio';

export interface GalleryImage {
    id: string;
    src: string;
    title: string;
    category: string;
}

export async function getAllGalleryImages(): Promise<GalleryImage[]> {
    return portfolioData.projects.flatMap((project) =>
        (project.galleryImages ?? []).map((src, index) => ({
            id: `${project.id}-detail-${index + 1}`,
            src,
            title: `${project.title} — Detail ${index + 1}`,
            category: project.title,
        }))
    );
}


import { notFound } from 'next/navigation';
import { getPortfolioData, portfolioData } from '@/data/portfolio';
import { ProjectPageContent } from '@/components/projects/ProjectPageContent';
import { getLocale } from 'next-intl/server';

export async function generateStaticParams() {
    return portfolioData.projects.map((project) => ({
        slug: project.slug,
    }));
}

import { getProjectImages } from '@/app/actions/getProjectImages'; // Import server action

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const locale = await getLocale();
    const localizedPortfolioData = getPortfolioData(locale);
    const project = localizedPortfolioData.projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    // Fetch dynamic images from public/project folder
    const galleryImages = await getProjectImages(slug, project.title);

    // Keep the project cover separate from supporting gallery screenshots.
    const updatedProject = {
        ...project,
        galleryImages: galleryImages.length > 0 ? galleryImages : project.galleryImages
    };

    return <ProjectPageContent project={updatedProject} />;
}

'use client';

import { useLocale } from 'next-intl';
import { useMemo } from 'react';
import { getPortfolioData } from '@/data/portfolio';

export function usePortfolioData() {
    const locale = useLocale();
    return useMemo(() => getPortfolioData(locale), [locale]);
}

import { getRequestConfig } from 'next-intl/server';
import { locales, defaultLocale, Locale } from './settings';
import { cookies, headers } from 'next/headers';

function isMessageObject(value: unknown): value is Record<string, unknown> {
    return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function mergeMessages<T extends object>(base: T, overrides: unknown): T {
    if (!isMessageObject(base) || !isMessageObject(overrides)) {
        return overrides as T;
    }

    const merged = { ...base };
    const mergedMessages = merged as Record<string, unknown>;
    for (const [key, value] of Object.entries(overrides)) {
        const baseValue = mergedMessages[key];
        mergedMessages[key] = key in mergedMessages
            ? mergeMessages(baseValue as object, value)
            : value;
    }
    return merged;
}

export default getRequestConfig(async () => {
    const cookieStore = await cookies();
    const headerStore = await headers();

    let locale: Locale = defaultLocale;

    const cookieLocale = cookieStore.get('locale')?.value;
    if (cookieLocale && locales.includes(cookieLocale as Locale)) {
        locale = cookieLocale as Locale;
    } else {
        const acceptLanguage = headerStore.get('accept-language');
        if (acceptLanguage) {
            const preferredLocale = acceptLanguage.split(',')[0].split('-')[0];
            if (locales.includes(preferredLocale as Locale)) {
                locale = preferredLocale as Locale;
            }
        }
    }

    const englishMessages = (await import('../../messages/en.json')).default;
    const messages = locale === 'th'
        ? mergeMessages(englishMessages, (await import('../../messages/th.json')).default)
        : englishMessages;

    return {
        locale,
        messages,
        timeZone: 'Asia/Bangkok'
    };
});

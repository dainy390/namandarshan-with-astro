import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getApiUrl } from '@/utils/api';

interface AppLink {
    keyword: string;
    url: string;
}

let cachedLinks: AppLink[] | null = null;
let fetchPromise: Promise<AppLink[]> | null = null;

const fetchLinks = async (): Promise<AppLink[]> => {
    if (cachedLinks) return cachedLinks;
    if (fetchPromise) return fetchPromise;

    fetchPromise = Promise.all([
        fetch(getApiUrl('/api/darshan')).then(res => res.json()).catch(() => []),
        fetch(getApiUrl('/api/pujas')).then(res => res.json()).catch(() => []),
        fetch(getApiUrl('/api/blogs')).then(res => res.json()).catch(() => [])
    ]).then(([darshans, pujas, blogs]) => {
        const links: AppLink[] = [];

        if (Array.isArray(darshans)) {
            darshans.forEach((d: any) => {
                if (d.name && d.slug) links.push({ keyword: d.name, url: `/darshan/${d.slug}` });
            });
        }
        if (Array.isArray(pujas)) {
            pujas.forEach((p: any) => {
                if (p.title && p.slug) links.push({ keyword: p.title, url: `/puja/${p.slug}` });
            });
        }
        if (Array.isArray(blogs)) {
            blogs.forEach((b: any) => {
                if (b.title && b.slug) links.push({ keyword: b.title, url: `/blogs/${b.slug}` });
            });
        }

        // Sort by length descending, so longest phrases are matched first
        links.sort((a, b) => b.keyword.length - a.keyword.length);

        // Ensure no empty keywords are added
        cachedLinks = links.filter(l => l.keyword && l.keyword.trim().length > 0);
        return cachedLinks;
    });

    return fetchPromise;
};

interface LinkifiedTextProps {
    text: string;
    className?: string;
}

const LinkifiedText = ({ text, className }: LinkifiedTextProps) => {
    const [links, setLinks] = useState<AppLink[]>(cachedLinks || []);
    const { slug } = useParams();

    useEffect(() => {
        if (!cachedLinks) {
            fetchLinks().then(setLinks);
        }
    }, []);

    if (!text) return null;
    if (links.length === 0) return <div className={className}>{text}</div>;

    // Filter out the current page link so it doesn't link to itself
    const activeLinks = links.filter(l => !l.url.endsWith(`/${slug}`));

    if (activeLinks.length === 0) return <div className={className}>{text}</div>;

    // Escape regex characters
    const escapeRegex = (string: string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    // Build the regex for replacement. 
    // We use \b boundary to make sure we don't match partial words
    const regexSrc = activeLinks.map(l => escapeRegex(l.keyword)).join('|');
    const regex = new RegExp(`\\b(${regexSrc})\\b`, 'gi');

    // Split text naturally retains the capture group matches in the array
    const parts = text.split(regex);

    return (
        <div className={className}>
            {parts.map((part, i) => {
                // Check if this part matches any of our keywords
                const linkMatch = activeLinks.find(l => l.keyword.toLowerCase() === part?.toLowerCase());
                if (linkMatch) {
                    return (
                        <Link
                            key={i}
                            to={linkMatch.url}
                            className="text-orange-600 hover:text-orange-700 underline underline-offset-2 font-semibold transition-colors"
                        >
                            {part}
                        </Link>
                    );
                }
                return <React.Fragment key={i}>{part}</React.Fragment>;
            })}
        </div>
    );
};

export default LinkifiedText;

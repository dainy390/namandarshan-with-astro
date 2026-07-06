import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string | string[];
    image?: string;
    url?: string;
    schemas?: any[];
    structuredData?: any;
}

const SEO = ({
    title,
    description,
    keywords,
    image = '/og-image.png',
    url,
    schemas,
    structuredData
}: SEOProps) => {
    const siteTitle = "Namandarshan - Your Gateway to Divine India";
    const defaultDescription = "Book verified online darshan, puja, and offerings at India's most sacred temples. Experience spiritual journeys with ease and trust.";
    const defaultKeywords = "temple darshan booking, online puja booking, india pilgrimage, namandarshan, chadhava, prasadam";

    const fullTitle = title ? `${title}` : siteTitle;
    const metaDescription = description || defaultDescription;
    const metaKeywords = Array.isArray(keywords) ? keywords.join(', ') : (keywords || defaultKeywords);

    // Advanced Canonical Logic
    const getCanonicalUrl = (): string | null => {
        if (typeof window === 'undefined') return null;

        const urlParams = new URLSearchParams(window.location.search);
        let path = window.location.pathname;

        // Clean path of multiple dashes and leading/trailing dashes in segments
        path = path.replace(/-+/g, '-');
        path = path.split('/').map(segment => {
            return segment.replace(/^-+/, '').replace(/-+$/, '');
        }).join('/');

        const normPath = path.endsWith('/') ? path : `${path}/`;

        // 1. Tracking Rule: If 'trk' parameter is present, canonical is the homepage
        if (urlParams.has('trk')) {
            return 'https://namandarshan.com/';
        }

        // 2. WordPress ID Rule: Omit canonical for numeric slugs (e.g., /temples/50)
        if (/\/\d+\/?$/.test(path)) {
            return null;
        }

        // 3. Mapping Rules from User Table
        
        // Root Pages
        if (normPath === '/live-darshan/') return 'https://namandarshan.com/';

        // Darshan -> Temple Mappings
        const darshanMappings: Record<string, string> = {
            '/darshan/baidyanath-dham-temple-darshan/': '/temples/baidyanath-temple',
            '/darshan/dwarkadhish-darshan/': '/temples/dwarkadhish-temple',
            '/darshan/simhachalam-temple-vipdarshan/': '/temples/simhachalam-temple',
            '/darshan/mahakaleshwar-vipdarshan/': '/temples/mahakaleshwar-temple',
            '/darshan/kedarnath-dham-vipdarshan/': '/temples/kedarnath-temple',
            '/darshan/jagannath-temple-vipdarshan/': '/temples/jagannath-temple',
            '/darshan/vontimitta-kodandarama-swamy-temple-vipdarshan/': '/temples/vontimitta-kodandarama-swamy-temple',
            '/darshan/shri-siddhivinayak-ganapati-temple-vipdarshan/': '/temples/siddhivinayak-temple',
            '/darshan/yaganti-uma-maheswara-temple-vipdarshan/': '/temples/yaganti-uma-maheswara-temple',
            '/darshan/shahji-temple-vipdarshan/': '/temples/shahji-temple',
            '/darshan/divine-darshan-at-shree-krishna-janmabhoomi-vipdarshan/': '/temples/shree-krishna-janmabhoomi-temple',
            '/darshan/rangji-temple-vipdarshan/': '/temples/rangji-temple',
            '/darshan/sabarimala-sastha-temple-pathanamthitta-vipdarshan/': '/temples/sabarimala-temple',
            '/darshan/mahakaleshwar-jyotirlinga-ujjain-vipdarshan/': '/temples/mahakaleshwar-jyotirlinga-temple',
            '/darshan/trimbakeshwar-jyotirlinga-vipdarshan/': '/temples/trimbakeshwar-jyotirlinga-temple',
            '/darshan/jagannath-temple-darshan-vipdarshan/': '/temples/jagannath-temple',
            '/darshan/jagannath-temple-darshan/': '/temples/jagannath-temple'
        };

        if (darshanMappings[normPath]) {
            return `https://namandarshan.com${darshanMappings[normPath]}`;
        }

        // Live Darshan -> Temple Mappings
        const liveMappings: Record<string, string> = {
            '/live-darshan/somnath-temple/': '/temples/somnath-temple',
            '/live-darshan/kedarnath-temple/': '/temples/kedarnath-temple',
            '/live-darshan/tirupati-balaji/': '/temples/tirupati-balaji-temple',
            '/live-darshan/ram-mandir/': '/temples/ram-mandir',
            '/live-darshan/mahakaleshwar/': '/temples/mahakaleshwar-temple',
            '/live-darshan/badrinath-temple/': '/temples/badrinath-temple',
            '/live-darshan/salasar-dham/': '/temples/salasar-dham-temple'
        };

        if (liveMappings[normPath]) {
            return `https://namandarshan.com${liveMappings[normPath]}`;
        }

        // 4. Default Clean URL Rule: Remove trailing slashes for all paths except root
        let cleanPath = path;
        
        if (cleanPath !== '/' && cleanPath.endsWith('/')) {
            cleanPath = cleanPath.slice(0, -1);
        }

        return `https://namandarshan.com${cleanPath}`;
    };

    let canonicalUrl = url || getCanonicalUrl();
    if (canonicalUrl && canonicalUrl !== 'https://namandarshan.com/' && canonicalUrl.endsWith('/')) {
        canonicalUrl = canonicalUrl.slice(0, -1);
    }

    const renderStructuredData = (data: any) => {
        if (!data) return null;

        if (typeof data === 'object') {
            try {
                return (
                    <script type="application/ld+json">
                        {JSON.stringify(data)}
                    </script>
                );
            } catch (e) {
                console.error("Failed to stringify structured data object", e);
                return null;
            }
        }

        if (typeof data === 'string' && data.trim()) {
            if (data.includes('<script')) {
                const regex = /<script\b[^>]*>([\s\S]*?)<\/script>/gi;
                const matches = [];
                let match;
                while ((match = regex.exec(data)) !== null) {
                    if (match[1] && match[1].trim()) {
                        matches.push(match[1].trim());
                    }
                }

                if (matches.length > 0) {
                    return matches.map((content, idx) => (
                        <script key={idx} type="application/ld+json">
                            {content}
                        </script>
                    ));
                }
            }

            return (
                <script type="application/ld+json">
                    {data.trim()}
                </script>
            );
        }

        return null;
    };

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{fullTitle}</title>
            <meta name="description" content={metaDescription} />
            <meta name="keywords" content={metaKeywords} />

            {/* Performance Optimizations */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

            <link
                rel="preload"
                as="style"
                href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Poppins:wght@300;400;500;600;700&family=Tangerine:wght@400;700&display=swap"
            />
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Poppins:wght@300;400;500;600;700&family=Tangerine:wght@400;700&display=swap"
                media="print"
                onLoad={(e: any) => {
                    if (e.target.media !== 'all') e.target.media = 'all';
                }}
            />
            <noscript>
                {`
                    <link 
                        rel="stylesheet" 
                        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Poppins:wght@300;400;500;600;700&family=Tangerine:wght@400;700&display=swap" 
                    />
                `}
            </noscript>

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={canonicalUrl || 'https://namandarshan.com/'} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={canonicalUrl || 'https://namandarshan.com/'} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={metaDescription} />
            <meta property="twitter:image" content={image} />

            {/* Canonical Tag - Dynamic Rules from Checklist */}
            {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

            {/* JSON-LD Schemas */}
            {schemas && schemas.map((schema, index) => (
                <script key={index} type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            ))}

            {renderStructuredData(structuredData)}
        </Helmet>
    );
};

export default SEO;

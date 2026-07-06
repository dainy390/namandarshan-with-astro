import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight } from 'lucide-react';
import BlogShare from './BlogShare';

interface BlogBreadcrumbProps {
    pageTitle: string;
    description?: string;
}

const BlogBreadcrumb: React.FC<BlogBreadcrumbProps> = ({ pageTitle, description }) => {
    return (
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 py-2 border-b border-slate-100/50">
            {/* Left side: Breadcrumb links */}
            <div className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
                <Link to="/" className="hover:text-primary flex items-center gap-1 transition-colors">
                    <Home className="w-4 h-4" /> Home
                </Link>
                <ChevronRight className="w-4 h-4" />
                <Link to="/blogs" className="hover:text-primary transition-colors">Blog</Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-primary font-medium truncate max-w-[200px] sm:max-w-none">{pageTitle}</span>
            </div>

            {/* Right side: Share buttons */}
            <div className="w-full flex justify-center md:w-auto md:justify-end mt-2.5 md:mt-0">
                <BlogShare pageTitle={pageTitle} description={description} />
            </div>
        </div>
    );
};

export default BlogBreadcrumb;

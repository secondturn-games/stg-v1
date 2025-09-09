import { readFileSync } from 'fs';
import { join } from 'path';
import Link from 'next/link';

export default function CookiePolicy() {
  const content = readFileSync(join(process.cwd(), 'public', 'legal', 'cookie-policy.md'), 'utf8');

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-surface rounded-md shadow-sm p-2">
          <div 
            className="text-primary leading-relaxed prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ 
              __html: content
                .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold text-primary mb-6 mt-8">$1</h1>')
                .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-semibold text-vibrant-orange mb-4 mt-8">$1</h2>')
                .replace(/^### (.*$)/gim, '<h3 class="text-xl font-semibold text-vibrant-orange mb-3 mt-6">$1</h3>')
                .replace(/\*\*(.*)\*\*/gim, '<strong class="font-semibold text-primary">$1</strong>')
                .replace(/\*(.*)\*/gim, '<em class="italic text-secondary">$1</em>')
                .replace(/^\* (.*$)/gim, '<li class="mb-2">$1</li>')
                .replace(/^- (.*$)/gim, '<li class="mb-2">$1</li>')
                .replace(/\n\n/gim, '</p><p class="mb-2">')
                .replace(/^(.*)$/gim, '<p class="mb-2">$1</p>')
            }}
          />
          <div className="mt-12 pt-6 border-t border-gray-200">
            <Link href="/" className="text-secondary hover:text-primary transition-colors duration-200 text-sm">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

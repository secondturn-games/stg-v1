import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-dark-green-600 text-white py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-2 mb-4">
          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-vibrant-orange">Contact Us</h3>
            <div className="space-y-1">
              <p className="text-surface-100 text-sm">
                <span className="font-medium">Email:</span>{' '}
                <a 
                  href="mailto:info@secondturn.games" 
                  className="text-vibrant-orange hover:text-vibrant-orange-300 transition-colors duration-200"
                >
                  info@secondturn.games
                </a>
              </p>
            </div>
          </div>

          {/* Documents Section */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-vibrant-orange">Legal Documents</h3>
            <div className="grid grid-cols-2 gap-1">
              <Link 
                href="/privacy-policy" 
                className="text-surface-100 hover:text-vibrant-orange transition-colors duration-200 text-sm"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms-of-service" 
                className="text-surface-100 hover:text-vibrant-orange transition-colors duration-200 text-sm"
              >
                Terms of Service
              </Link>
              <Link 
                href="/cookie-policy" 
                className="text-surface-100 hover:text-vibrant-orange transition-colors duration-200 text-sm"
              >
                Cookie Policy
              </Link>
              <Link 
                href="/code-of-conduct" 
                className="text-surface-100 hover:text-vibrant-orange transition-colors duration-200 text-sm"
              >
                Code of Conduct
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-dark-green-500 pt-2">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-surface-200 text-xs">
              © 2025 Second Turn Games SIA. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

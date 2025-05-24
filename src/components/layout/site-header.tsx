import Link from 'next/link';
import Image from 'next/image';

export default function SiteHeader() {
  return (
    <header className="bg-black shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-center items-center">
        <Link href="/" className="flex items-center space-x-2 text-2xl font-bold text-primary hover:opacity-80 transition-opacity">
          <Image src="/infonuagix_logo.png" alt="Infonuagix AI Logo" width={450} height={112} />
        </Link>
      </div>
    </header>
  );
}

// Header.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5" >
      <div className="flex items-center space-x-2 text-gray-200">
        <Link href="/" passHref>
          <Image
            className="rounded-full e drop-shadown-xl hover:scale-105 transition-transform duration-200 ease-out"
            src="/mesh_cropped.png"
            width={75}
            height={75}
            alt="logo"
          />
        </Link>
        <h1>MyWebClass.org</h1>
      </div>
    </header>
  );
}





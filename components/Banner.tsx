import Link from "next/link";
import 'app/globals.css';

export default function Banner() {
  return (
    <div className="flex flex-col justify-between font-bold px-10 py-5 mb-10 text-gray-200">
      <div>
        <h1 className="text-5xl">Welcome to MyWebClass.org</h1>
      </div>
      <div className="mt-6 md:mt-6 max-w-sm text-2xl">
        <Link href="#newsletter" scroll={false}>
          <button className="bg-[#008bcc] text-white px-4 py-2 rounded-full shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            Get involved and join now!
          </button>
        </Link>
      </div>
    </div>
  );
}


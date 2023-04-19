import './../globals.css';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import NewsLetterForm from '@/components/NewsLetterForm';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="max-w-6xl mx-auto bg-[#f1f2f4]">
        <div className="header-background">
          <Header />
          <Banner />
        </div>
        {children}
        <div id="newsletter">
          <NewsLetterForm />
        </div>
      </body>
    </html>
  );
}



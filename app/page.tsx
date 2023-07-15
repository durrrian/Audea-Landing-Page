import Image from 'next/image';
import Pages from './lib/Pages';
import Navbar from './lib/Navbar';
import Footer from './lib/Footer';
import Toast from '@/components/Toast';

export default function Page() {
  return (
    <>
      <main className="min-w-screen min-h-screen overflow-x-hidden bg-landingPage-blackPrimary dark:bg-landingPage-blackPrimary">
        <Navbar />

        <Pages />

        <Footer />
      </main>

      <Toast />
    </>
  );
}

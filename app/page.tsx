import Image from 'next/image';
import Client from './client';
import Navbar from './lib/Navbar';
import Footer from './lib/Footer';
import Toast from '@/components/Toast';

export default function Page() {
  return (
    <>
      <main className="min-w-screen min-h-screen overflow-x-hidden bg-landingPage-blackPrimary dark:bg-landingPage-blackPrimary">
        <Navbar />

        <Client />

        <Footer />
      </main>

      <Toast />
    </>
  );
}

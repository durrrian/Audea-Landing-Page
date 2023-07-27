import Features from './Features';
import Integration from './Integration';
import MainSection from './MainSection';
import Pricing from './Pricing';
import Usecase from './Usecase';

export default function Client() {
  return (
    <main className="mt-20 mb-10">
      <MainSection />

      <section className="space-y-20 mt-10">
        <Features />

        <Usecase />

        <Integration />

        <Pricing />
      </section>
    </main>
  );
}

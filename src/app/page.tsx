"use client";
import Benefits from "@/components/Benefits";
import CTA from "@/components/CTA";
import Features from "@/components/Features";
import Header from "@/components/Header";
import Modal from "@/components/Modal";
import Steps from "@/components/Steps";
import Video from "@/components/Video";
import Packages from "@/containers/Packages";
import useModal from "@/hooks/useModal";
import { getPackages } from "@/lib/api";
// import { useGetPackagesQuery } from "@/lib/features/packages/packageApi";
import { Suspense } from "react";

export default function Home() {
  const { openModal, closeModal, isOpen } = useModal();
  const packages = getPackages();

  // Preparación para usar el hook de RTK Query
  // const { data, error, isLoading } = useGetPackagesQuery();

  return (
    <div>
      <main className="container mx-auto">
        <section>
          <Header />
        </section>
        <section className="grid grid-cols-2 gap-2 p-4 md:grid-cols-4">
          <Features />
        </section>
        <section className="flex flex-col gap-4 p-4 md:flex-row">
          <div className="md:w-3/5 mr-10">
            <Video />
          </div>
          <div>
            <Benefits />
          </div>
        </section>
        <section>
          <Steps />
        </section>
        <section>
          <CTA onClick={openModal} />
        </section>
        <section>
          <Modal title="Paquetes" isOpen={isOpen} onClose={closeModal}>
            <Suspense fallback={<div>Loading...</div>}>
              <Packages items={packages} />
            </Suspense>
          </Modal>
        </section>
      </main>
    </div>
  );
}

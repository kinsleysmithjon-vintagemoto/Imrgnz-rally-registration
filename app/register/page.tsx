import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import RegistrationForm from "@/components/Registration/RegistrationForm";

export default function RegisterPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-neutral-100 py-16">
        <RegistrationForm />
      </main>

      <Footer />
    </>
  );
}
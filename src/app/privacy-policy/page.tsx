import Header from "@/components/header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy - Todo Quill",
  description: "Privacy policy for the Todo Quill app",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-neutral-200 text-neutral-400">
      <Header />

      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-neutral-300 bg-neutral-100 p-6 shadow-sm">
            <h1 className="text-3xl font-semibold tracking-tight text-neutral-400">
              Todo Quill - Privacy Policy
            </h1>
            <p className="mt-1 text-sm text-neutral-300">
              <span className="font-medium">Effective Date:</span> September 10,
              2025
            </p>

            <p className="mt-6 leading-relaxed text-neutral-400">
              Todo Quill respects your privacy. This app does not collect,
              store, or share any personal data.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-neutral-400">
              Information Collection
            </h2>
            <p className="mt-2 leading-relaxed text-neutral-400">
              Todo Quill does not collect any personal information, usage data,
              or analytics.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-neutral-400">
              Third-Party Services
            </h2>
            <p className="mt-2 leading-relaxed text-neutral-400">
              Todo Quill does not integrate with any third-party services that
              collect user data.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-neutral-400">
              Data Storage
            </h2>
            <p className="mt-2 leading-relaxed text-neutral-400">
              All tasks and notes you create in Todo Quill are stored locally on
              your device only. They are not transmitted to external servers.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-neutral-400">
              Changes
            </h2>
            <p className="mt-2 leading-relaxed text-neutral-400">
              If this Privacy Policy changes in the future, updates will be
              posted on this page.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-neutral-400">
              Contact
            </h2>
            <p className="mt-2 leading-relaxed text-neutral-400">
              If you have questions about this Privacy Policy, you can contact
              me at:
            </p>
            <p className="mt-1 font-medium text-neutral-400">
              Email: demirtasdurmus@gmail.com
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

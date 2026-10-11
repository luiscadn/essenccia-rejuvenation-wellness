import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ShieldCheck, Phone, Mail, CheckCircle2 } from 'lucide-react';
import { PRIVACY_TERMS_SECTIONS, SPA_POLICIES, CLINIC_INFO } from '@/data/clinic-data';

export const metadata: Metadata = {
  title: 'Terms & Conditions / Privacy Policy | Essenccia Rejuvenation & Wellness',
  description:
    'Official Terms & Conditions and SMS Privacy Policy for Essenccia Rejuvenation & Wellness in Westport, CT. Data protection, SMS messaging consent, and non-sharing privacy guarantee.',
  openGraph: {
    title: 'Terms & Conditions / Privacy Policy | Essenccia Rejuvenation & Wellness',
    description:
      'Official Privacy Policy and SMS Terms & Conditions for Essenccia Rejuvenation & Wellness in Westport, Connecticut.',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#f7f7f4] text-[#484774] flex flex-col">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-30 bg-[#f7f7f4]/90 backdrop-blur-md border-b border-[#484774]/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-medium text-[#484774] hover:text-[#739cd2] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Essenccia</span>
          </Link>

          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/fotos_webp/logo_transparent.png"
              alt="Essenccia Crest"
              width={40}
              height={40}
              className="h-10 w-auto object-contain"
            />
            <span className="flex flex-col leading-none">
              <span className="font-serif text-xl tracking-[0.2em] uppercase font-light text-[#484774]">
                Essenccia
              </span>
              <span className="mt-1 text-[8px] tracking-[0.25em] uppercase text-[#5c6c84] font-medium">
                Westport, CT
              </span>
            </span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Header Title Section */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#484774]/5 border border-[#d7a761]/40 text-[#d7a761] text-[10px] uppercase tracking-[0.22em] font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Official Policy Document</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#484774] leading-[1.08]">
              Terms &amp; Conditions / <span className="italic text-[#739cd2]">Privacy Policy</span>
            </h1>

            <p className="font-sans text-xs uppercase tracking-[0.2em] text-[#5c6c84]">
              Last updated: October 2026 · Essenccia Rejuvenation &amp; Wellness · Westport, Connecticut
            </p>
          </div>

          {/* Privacy Statement Callout */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#484774]/10 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#d7a761]">
              <CheckCircle2 className="w-4 h-4 text-[#d7a761]" />
              <span>Client Confidentiality &amp; Trust</span>
            </div>
            <p className="font-sans text-base sm:text-lg leading-relaxed text-[#484774] font-normal">
              <strong className="font-semibold uppercase tracking-wider">ESSENCCIA REJUVENATION &amp; WELLNESS</strong> respects your privacy. By opting into our SMS messaging service, you agree to the following terms regarding how we handle your information:
            </p>
          </div>

          {/* The 8 Official Clauses */}
          <div className="space-y-6">
            {PRIVACY_TERMS_SECTIONS.map((sec) => (
              <article
                key={sec.number}
                className="p-6 sm:p-8 rounded-3xl bg-white border border-[#484774]/10 shadow-xs space-y-3"
              >
                <div className="flex items-baseline gap-2.5">
                  <span className="font-sans text-sm font-bold text-[#d7a761] tabular-nums">
                    {sec.number}.
                  </span>
                  <h3 className="font-sans text-xl sm:text-2xl font-semibold text-[#484774] tracking-tight">
                    {sec.title}
                  </h3>
                </div>

                <div className="font-sans text-sm sm:text-base leading-relaxed text-[#5c6c84] space-y-2 whitespace-pre-line pt-1">
                  {sec.text}
                </div>

                {/* Direct Actionables for Clause 6 */}
                {sec.number === '6' && (
                  <div className="pt-3 flex flex-wrap items-center gap-3">
                    <a
                      href={`tel:${CLINIC_INFO.phoneClean}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#484774] text-white hover:bg-[#3b3a63] text-xs uppercase tracking-[0.16em] font-medium transition-all shadow-xs"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#d7a761]" />
                      <span>{CLINIC_INFO.phone}</span>
                    </a>
                    <a
                      href="mailto:info@essencciarejuvenationwellness.com"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#484774]/20 hover:border-[#484774] text-xs uppercase tracking-[0.16em] font-medium text-[#484774] transition-all bg-white"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#d7a761]" />
                      <span>info@essencciarejuvenationwellness.com</span>
                    </a>
                  </div>
                )}

                {/* Guarantee callout for Clause 8 */}
                {sec.number === '8' && (
                  <div className="mt-4 p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200/60 flex items-start sm:items-center gap-3 text-xs sm:text-sm text-emerald-800 font-medium">
                    <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5 sm:mt-0" />
                    <span>Non-Sharing Pledge: We never share or sell mobile phone numbers or opt-in data to third parties under any circumstances.</span>
                  </div>
                )}
              </article>
            ))}
          </div>

          {/* Spa Sanctuary Policies Section */}
          <div className="pt-8 border-t border-[#484774]/15 space-y-6">
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-[0.22em] text-[#d7a761] font-semibold">
                Sanctuary Etiquette
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#484774]">
                In-Clinic Etiquette &amp; Cancellation Policies
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {SPA_POLICIES.map((p) => (
                <div
                  key={p.title}
                  className="p-6 rounded-3xl bg-white border border-[#484774]/10 space-y-2"
                >
                  <h3 className="font-sans text-lg font-semibold text-[#484774]">
                    {p.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm leading-relaxed text-[#5c6c84]">
                    {p.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Footer Box */}
          <div className="p-8 rounded-3xl bg-[#484774] text-[#f7f7f4] text-center space-y-4 shadow-lg">
            <h2 className="font-serif text-2xl sm:text-3xl font-light text-white">
              Questions Regarding Your Privacy?
            </h2>
            <p className="font-sans text-xs sm:text-sm text-stone-300 max-w-xl mx-auto leading-relaxed">
              If you have any questions or wish to update your preferences, Ledy and the Essenccia team are available directly by phone or email.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <a
                href={`tel:${CLINIC_INFO.phoneClean}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#d7a761] hover:bg-[#d7a761]/90 text-[#484774] text-xs uppercase tracking-[0.18em] font-semibold transition-all shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>Call {CLINIC_INFO.phone}</span>
              </a>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:border-white text-xs uppercase tracking-[0.18em] font-medium text-white transition-all"
              >
                <span>Return to Homepage</span>
              </Link>
            </div>
          </div>

        </div>
      </main>

      {/* Simple Legal Footer */}
      <footer className="py-8 border-t border-[#484774]/10 text-center text-xs text-[#5c6c84]">
        <p>© 2026 Essenccia Rejuvenation &amp; Wellness. 25 Sylvan Road South, Suite A, Westport, CT 06880.</p>
      </footer>
    </div>
  );
}

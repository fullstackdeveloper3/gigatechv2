"use client";

import WhatsAppButton from "@/components/WhatsAppButton";
import SectionHeading from "@/components/SectionHeading";
import { PHONE_NUMBER, STORE_ADDRESS } from "@/lib/constants";

export default function ContactPage() {
  return (
    <section className="relative min-h-screen">
      <div className="orb orb-1" style={{ opacity: 0.12 }} />
      <div className="orb orb-2" style={{ opacity: 0.1 }} />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeading
          title="اتصل بنا"
          subtitle="نحن هنا لمساعدتك - تواصل معنا بأي طريقة تناسبك"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact info */}
          <div className="space-y-5">
            {/* WhatsApp card */}
            <div className="glass-elevated rounded-2xl p-7 text-center">
              <div className="w-14 h-14 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-green-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">واتساب</h3>
              <p className="text-sm text-foreground/40 mb-5">
                أسرع طريقة للتواصل معنا
              </p>
              <WhatsAppButton size="md" fullWidth />
            </div>

            {/* Phone */}
            <div className="glass glass-interactive rounded-2xl p-6">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-foreground/30 mb-0.5">الهاتف</p>
                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="font-medium hover:text-accent transition-colors"
                    dir="ltr"
                  >
                    {PHONE_NUMBER}
                  </a>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="glass glass-interactive rounded-2xl p-6">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-foreground/30 mb-0.5">العنوان</p>
                  <p className="font-medium">{STORE_ADDRESS}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="glass-elevated rounded-2xl p-8">
            <h2 className="text-xl font-semibold mb-2">أرسل لنا رسالة</h2>
            <p className="text-sm text-foreground/30 mb-6">
              سنرد عليك في أقرب وقت ممكن
            </p>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm text-foreground/50 mb-2">
                  الاسم
                </label>
                <input
                  type="text"
                  id="name"
                  className="input-glass w-full rounded-xl px-4 py-3 text-sm text-foreground placeholder-foreground/20"
                  placeholder="اسمك الكامل"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm text-foreground/50 mb-2">
                  رقم الهاتف
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="input-glass w-full rounded-xl px-4 py-3 text-sm text-foreground placeholder-foreground/20"
                  placeholder="07XX XXX XXXX"
                  dir="ltr"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-foreground/50 mb-2">
                  الرسالة
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="input-glass w-full rounded-xl px-4 py-3 text-sm text-foreground placeholder-foreground/20 resize-none"
                  placeholder="اكتب رسالتك هنا..."
                />
              </div>

              <button
                type="submit"
                className="btn-accent w-full rounded-xl py-3 text-sm"
              >
                إرسال الرسالة
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

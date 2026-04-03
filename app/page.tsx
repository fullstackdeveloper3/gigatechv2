import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";

export default function Home() {
  const featured = products.slice(0, 8);

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden py-24 sm:py-36 px-4">
        {/* Animated background orbs */}
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 badge mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            كركوك، العراق
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold leading-tight mb-8 tracking-tight">
            گيگا تك لتقنيات{" "}
            <span className="text-accent text-glow">الحاسبات</span>
            <br />
            و كاميرات المراقبة والطابعات
          </h1>

          {/* Glass subtitle card */}
          <div className="glass-elevated inline-block rounded-2xl px-8 py-5 mb-10">
            <p className="text-lg sm:text-xl text-foreground/70">
              عروض لابتوبات للألعاب والبرامج الهندسية بأفضل الأسعار
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <WhatsAppButton size="lg" />
            <Link
              href="/products"
              className="btn-ghost rounded-xl px-7 py-3.5 text-base font-medium"
            >
              تصفح المنتجات
            </Link>
          </div>
        </div>
      </section>

      {/* ============ STATS ============ */}
      <section className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 -mt-8 mb-16 z-10">
        <div className="glass-elevated rounded-2xl p-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { value: "+500", label: "منتج متوفر" },
            { value: "+1000", label: "عميل سعيد" },
            { value: "12", label: "شهر ضمان" },
            { value: "24/7", label: "دعم فني" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl sm:text-3xl font-bold text-accent text-glow">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm text-foreground/40 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ FEATURED PRODUCTS ============ */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeading
          title="منتجاتنا المميزة"
          subtitle="أحدث اللابتوبات، الكمبيوترات، كاميرات المراقبة، والطابعات"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/products"
            className="btn-ghost rounded-xl px-8 py-3 text-sm font-medium"
          >
            عرض جميع المنتجات
          </Link>
        </div>
      </section>

      {/* ============ WHY US ============ */}
      <section className="relative overflow-hidden py-20">
        <div className="orb orb-2" style={{ opacity: 0.2 }} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="لماذا گيگا تك؟" />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                ),
                title: "ضمان حقيقي",
                desc: "جميع منتجاتنا تأتي مع ضمان رسمي وخدمة ما بعد البيع.",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                  </svg>
                ),
                title: "أسعار تنافسية",
                desc: "نقدم أفضل الأسعار في كركوك مع عروض مستمرة على جميع المنتجات.",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-3.06a1.5 1.5 0 010-2.58l5.1-3.06a1.5 1.5 0 011.58 0l5.1 3.06a1.5 1.5 0 010 2.58l-5.1 3.06a1.5 1.5 0 01-1.58 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.66 17.66l-5.1 3.06a1.5 1.5 0 01-1.58 0l-5.1-3.06" />
                  </svg>
                ),
                title: "دعم فني متخصص",
                desc: "فريق فني خبير مستعد لمساعدتكم في الاختيار والتركيب والصيانة.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="glass glass-interactive rounded-2xl p-7 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mx-auto mb-5">
                  {item.icon}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-foreground/40 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="glass-elevated rounded-3xl p-10 sm:p-14 text-center relative overflow-hidden">
          <div className="orb orb-1" style={{ width: 300, height: 300, top: "-30%", right: "-10%" }} />
          <div className="relative">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              هل تبحث عن منتج معين؟
            </h2>
            <p className="text-foreground/50 mb-8 max-w-lg mx-auto">
              تواصل معنا عبر الواتساب وسنساعدك في اختيار المنتج المناسب لاحتياجاتك
              وميزانيتك.
            </p>
            <WhatsAppButton size="lg" />
          </div>
        </div>
      </section>
    </>
  );
}

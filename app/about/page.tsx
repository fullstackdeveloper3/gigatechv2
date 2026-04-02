import WhatsAppButton from "@/components/WhatsAppButton";
import SectionHeading from "@/components/SectionHeading";

export default function AboutPage() {
  return (
    <section className="relative min-h-screen">
      <div className="orb orb-2" style={{ opacity: 0.15 }} />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeading
          title="من نحن"
          subtitle="تعرف على گيگا تك وخدماتنا"
        />

        {/* Main about card */}
        <div className="glass-elevated rounded-3xl p-8 sm:p-10 space-y-8 mb-10">
          <p className="text-foreground/70 leading-relaxed text-lg">
            <strong className="text-accent font-semibold">گيگا تك</strong> هو
            متجر متخصص في مجال التقنيات والحاسبات في مدينة كركوك، العراق. نقدم
            مجموعة واسعة من المنتجات التقنية التي تشمل اللابتوبات بجميع أنواعها
            (للألعاب، الهندسة، والاستخدام العام)، الكمبيوترات المكتبية، كاميرات
            المراقبة بأنظمتها المتكاملة، والطابعات بمختلف أنواعها.
          </p>

          <p className="text-foreground/70 leading-relaxed text-lg">
            نحرص على تقديم أفضل المنتجات بأسعار تنافسية مع ضمان حقيقي على جميع
            منتجاتنا. فريقنا المتخصص مستعد دائماً لمساعدتكم في اختيار المنتج
            المناسب لاحتياجاتكم وتقديم الدعم الفني والصيانة.
          </p>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
          {[
            { icon: "💻", title: "لابتوبات وكمبيوترات", desc: "بيع جميع أنواع الحاسبات المحمولة والمكتبية بمختلف المواصفات" },
            { icon: "📹", title: "كاميرات المراقبة", desc: "تركيب وصيانة أنظمة كاميرات المراقبة للمنازل والمحلات" },
            { icon: "🖨️", title: "طابعات", desc: "بيع وصيانة جميع أنواع الطابعات الليزرية والملونة" },
            { icon: "🛡️", title: "ضمان وصيانة", desc: "ضمان رسمي على جميع المنتجات مع خدمة ما بعد البيع" },
          ].map((service) => (
            <div
              key={service.title}
              className="glass glass-interactive rounded-2xl p-6"
            >
              <span className="text-3xl mb-4 block">{service.icon}</span>
              <h3 className="font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-foreground/40 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Location */}
        <div className="glass rounded-2xl p-6 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-foreground/30">الموقع</p>
              <p className="font-medium">كركوك، العراق</p>
            </div>
          </div>
          <WhatsAppButton size="md" />
        </div>
      </div>
    </section>
  );
}

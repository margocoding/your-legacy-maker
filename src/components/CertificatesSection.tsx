import { FileCheck, Award, ShieldCheck } from "lucide-react";

const certificates = [
  { icon: FileCheck, title: "Свидетельство о регистрации", desc: "ОГРНИП 326700000024895" },
  { icon: Award, title: "Сертификат специалиста по SERM", desc: "Международная ассоциация цифрового маркетинга" },
  { icon: ShieldCheck, title: "Лицензия на деятельность", desc: "Соответствие требованиям ФЗ-152" },
];

const CertificatesSection = () => (
  <section id="сертификаты" className="py-20 md:py-32">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <span className="text-primary text-sm font-semibold uppercase tracking-widest">Документы</span>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4">Сертификаты и лицензии</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {certificates.map((c, i) => (
          <div key={i} className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/40 transition-colors">
            <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <c.icon size={28} className="text-primary" />
            </div>
            <h3 className="text-foreground font-bold text-base mb-2">{c.title}</h3>
            <p className="text-muted-foreground text-sm">{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CertificatesSection;

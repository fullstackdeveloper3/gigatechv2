import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "اتصل بنا | گيگا تك",
  description:
    "تواصل مع گيگا تك عبر الواتساب أو الهاتف. كركوك، العراق. دعم فني متخصص وخدمة ما بعد البيع.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

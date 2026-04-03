import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "المنتجات | گيگا تك",
  description:
    "تصفح مجموعتنا من اللابتوبات، الكمبيوترات، كاميرات المراقبة، والطابعات. أفضل الأسعار في كركوك مع الضمان.",
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

interface Props {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: Props) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-2xl sm:text-3xl font-bold mb-3">{title}</h2>
      {subtitle && (
        <p className="text-foreground/40 text-sm max-w-md mx-auto">{subtitle}</p>
      )}
      <div className="mt-4 mx-auto w-16 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent" />
    </div>
  );
}

interface FeatureProps {
  title: string;
  description: string;
  tagline: string | React.ReactNode;
  subtitle: string;
}

export default function Feature({ title, description, tagline, subtitle }: FeatureProps) {
  return (
    <div className="p-8 rounded-2xl bg-white shadow-sm h-full flex flex-col min-h-[400px]">
      <h3 className="text-2xl font-serif font-bold text-primary-dark mb-4">
        {title}
      </h3>
      <p className="text-primary-dark text-[18px] leading-relaxed mb-auto">
        {description}
      </p>
      <div>
        <p className="text-xl text-orange font-serif">
          {tagline}
        </p>
        <hr className="text-orange/50 my-4 h-[1px]" />
        <p className="text-lg text-primary-dark">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

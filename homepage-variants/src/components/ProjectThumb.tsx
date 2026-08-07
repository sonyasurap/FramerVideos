type ProjectThumbProps = {
  src: string;
  alt: string;
  className?: string;
  label?: string;
  year?: string;
  showMeta?: boolean;
};

export function ProjectThumb({
  src,
  alt,
  className = "",
  label,
  year,
  showMeta = false,
}: ProjectThumbProps) {
  return (
    <figure className={`relative overflow-hidden bg-grey-100 ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="h-full w-full object-cover" />
      {showMeta ? (
        <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-black/50 to-transparent px-3 pb-3 pt-10 text-[11px] uppercase tracking-[0.08em] text-white">
          <span>{label}</span>
          {year ? <span className="opacity-80">{year}</span> : null}
        </figcaption>
      ) : null}
    </figure>
  );
}

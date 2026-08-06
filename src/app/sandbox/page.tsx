const items = [
  {
    title: "pov writing app — prototype",
    media: "/images/R9P5mf06qf0YME5igvd1foMkN1M.jpeg",
    wide: true,
  },
  {
    title: "lego parrot chatbot intro — microanimation",
    media: "/videos/framer/TmYibQ2UCVs8obKXDwM8G1wuQ.mp4",
    type: "video" as const,
  },
  {
    title: "ai for tiktok — prototype",
    media: "/videos/framer/vOyKM0r4bmeguP5xLnUzTqdotog.mp4",
    type: "video" as const,
  },
  {
    title: "group feed tv exploration — prototype",
    media: "/videos/Group Feed.mov",
    type: "video" as const,
  },
  {
    title: "teapot gardens — wireframes",
    media: "/images/Ezo9yAdbM1u3FBAMJ7duxrIPbLc.png",
  },
  {
    title: "hoppi cafe app — wireframes",
    media: "/images/JGrPnHUZ6C25XPmgFC9MD5iq67I.png",
  },
  {
    title: "branding — design details",
    media: "/images/trRY1RDMyn1kclg4u6tGcqr1w.png",
  },
  {
    title: "luxe shoes — wireframe",
    media: "/images/4oKYBAzWZCACZgzIJDJb9UVVLrE.png",
  },
  {
    title: "hoppi quiz — prototype",
    media: "/videos/framer/vIZMZGIgHqHBPIwlVXaN0KHPw9g.mp4",
    type: "video" as const,
  },
  {
    title: "loading animation — microinteraction",
    media: "/videos/framer/f5F8FLdvHYOgM1O7NMshwrEA5U.mp4",
    type: "video" as const,
  },
];

export default function SandboxPage() {
  return (
    <div className="pb-28 pt-28 md:pt-32">
      <div className="mx-auto mb-14 max-w-site px-5 text-center md:mb-16 md:px-8">
        <p className="text-[28px] font-medium tracking-[-0.02em] text-accent md:text-[36px]">
          My sandbox, other design explorations ✶
        </p>
      </div>

      <div className="mx-auto grid max-w-site grid-cols-1 gap-8 px-5 md:grid-cols-2 md:gap-10 md:px-8">
        {items.map((item, index) => (
          <article
            key={item.title}
            className={index === 0 || item.wide ? "md:col-span-2" : undefined}
          >
            <div className="overflow-hidden rounded-md bg-surface">
              {item.type === "video" ? (
                <video
                  src={item.media}
                  className="aspect-[16/10] w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={item.media}
                  alt=""
                  className="aspect-[16/10] w-full object-cover"
                />
              )}
            </div>
            <p className="mt-3 text-[12px] uppercase tracking-label text-muted">
              {item.title}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}

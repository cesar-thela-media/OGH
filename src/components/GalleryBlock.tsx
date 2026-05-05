interface GalleryBlockProps {
  images: { src: string; alt: string }[];
  layout?: "grid" | "masonry";
}

export default function GalleryBlock({ images, layout = "grid" }: GalleryBlockProps) {
  if (layout === "masonry") {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <div
            key={i}
            className={`rounded-[18px] overflow-hidden image-zoom ${
              i === 0 ? "col-span-2 row-span-2" : ""
            }`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover"
              style={{ minHeight: i === 0 ? "400px" : "200px" }}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {images.map((img, i) => (
        <div
          key={i}
          className={`rounded-[18px] overflow-hidden image-zoom ${
            i === 0 ? "md:col-span-2" : ""
          }`}
        >
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-full object-cover"
            style={{ minHeight: i === 0 ? "450px" : "350px" }}
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}

import Image from "next/image";
import type { ResearchPhoto } from "@/lib/research";

export function ResearchPhotoGallery({ photos }: { photos: ResearchPhoto[] }) {
  return (
    <div className="photo-gallery" role="group" aria-label="Photo gallery">
      {photos.map((photo) => (
        <figure key={photo.src} className="photo-gallery__item">
          <div className="photo-gallery__image-wrap">
            <Image
              src={photo.src}
              alt={photo.alt}
              width={640}
              height={480}
              sizes="(min-width: 900px) 40vw, 100vw"
              loading="lazy"
              className="photo-gallery__image"
            />
          </div>
          {photo.caption ? (
            <figcaption className="photo-gallery__caption">{photo.caption}</figcaption>
          ) : null}
        </figure>
      ))}
    </div>
  );
}

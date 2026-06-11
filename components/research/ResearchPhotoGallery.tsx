"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import type { ResearchPhoto } from "@/lib/research";

function getSlideRole(index: number, currentIndex: number, total: number): "active" | "next" | "hidden" {
  if (index === currentIndex) return "active";
  if (index === (currentIndex + 1) % total) return "next";
  return "hidden";
}

function ChevronLeft() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M15 6l-6 6 6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M9 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ResearchPhotoGallery({ photos }: { photos: ResearchPhoto[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = photos.length;

  const goToPrev = useCallback(() => {
    setCurrentIndex((i) => (i - 1 + total) % total);
  }, [total]);

  const goToNext = useCallback(() => {
    setCurrentIndex((i) => (i + 1) % total);
  }, [total]);

  const activePhoto = photos[currentIndex];

  function handleKeyDown(event: React.KeyboardEvent) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goToPrev();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      goToNext();
    }
  }

  return (
    <div
      className="photo-gallery"
      role="group"
      aria-label="Photo gallery"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <div className="photo-gallery__controls">
        <button
          type="button"
          className="photo-gallery__arrow photo-gallery__arrow--prev"
          onClick={goToPrev}
          aria-label="Previous photo"
        >
          <ChevronLeft />
        </button>

        <div
          className="photo-gallery__viewport"
          aria-roledescription="carousel"
          aria-label={`Photo ${currentIndex + 1} of ${total}`}
        >
          {photos.map((photo, index) => {
            const role = getSlideRole(index, currentIndex, total);
            const isVisible = role === "active" || role === "next";

            return (
              <figure
                key={photo.src}
                className={`photo-gallery__slide photo-gallery__slide--${role}`}
                aria-hidden={role !== "active"}
              >
                <div className="photo-gallery__image-wrap">
                  {isVisible ? (
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      width={640}
                      height={480}
                      sizes="(min-width: 900px) 40vw, 100vw"
                      priority={index === 0}
                      loading={index === 0 ? undefined : "lazy"}
                      className="photo-gallery__image"
                    />
                  ) : null}
                </div>
              </figure>
            );
          })}
        </div>

        <button
          type="button"
          className="photo-gallery__arrow photo-gallery__arrow--next"
          onClick={goToNext}
          aria-label="Next photo"
        >
          <ChevronRight />
        </button>
      </div>

      {activePhoto.caption ? (
        <figcaption className="photo-gallery__caption" aria-live="polite">
          {activePhoto.caption}
        </figcaption>
      ) : null}

      <p className="photo-gallery__counter" aria-hidden="true">
        {currentIndex + 1} / {total}
      </p>
    </div>
  );
}

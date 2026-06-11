"use client";

import { useCallback, useEffect, useRef, useState } from "react";
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

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ResearchPhotoGallery({ photos }: { photos: ResearchPhoto[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const total = photos.length;

  const goToPrev = useCallback(() => {
    setCurrentIndex((i) => (i - 1 + total) % total);
  }, [total]);

  const goToNext = useCallback(() => {
    setCurrentIndex((i) => (i + 1) % total);
  }, [total]);

  const closeLightbox = useCallback(() => {
    setIsLightboxOpen(false);
    triggerRef.current?.focus();
  }, []);

  const activePhoto = photos[currentIndex];

  useEffect(() => {
    if (!isLightboxOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        closeLightbox();
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        goToPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        goToNext();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLightboxOpen, closeLightbox, goToPrev, goToNext]);

  function handleCarouselKeyDown(event: React.KeyboardEvent) {
    if (isLightboxOpen) return;

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goToPrev();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      goToNext();
    }
  }

  return (
    <>
      <div
        className="photo-gallery"
        role="group"
        aria-label="Photo gallery"
        aria-hidden={isLightboxOpen}
        tabIndex={isLightboxOpen ? -1 : 0}
        onKeyDown={handleCarouselKeyDown}
      >
        <div className="photo-gallery__controls">
          <button
            type="button"
            className="photo-gallery__arrow photo-gallery__arrow--prev"
            onClick={goToPrev}
            aria-label="Previous photo"
            tabIndex={isLightboxOpen ? -1 : undefined}
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
              const isActive = role === "active";

              return (
                <figure
                  key={photo.src}
                  className={`photo-gallery__slide photo-gallery__slide--${role}`}
                  aria-hidden={role !== "active"}
                >
                  {isActive ? (
                    <button
                      ref={triggerRef}
                      type="button"
                      className="photo-gallery__image-trigger"
                      onClick={() => setIsLightboxOpen(true)}
                      aria-label="Enlarge photo"
                      tabIndex={isLightboxOpen ? -1 : undefined}
                    >
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
                    </button>
                  ) : (
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
                  )}
                </figure>
              );
            })}
          </div>

          <button
            type="button"
            className="photo-gallery__arrow photo-gallery__arrow--next"
            onClick={goToNext}
            aria-label="Next photo"
            tabIndex={isLightboxOpen ? -1 : undefined}
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

      {isLightboxOpen ? (
        <div
          className="photo-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged photo view"
        >
          <button
            type="button"
            className="photo-lightbox__backdrop"
            aria-label="Close enlarged photo"
            onClick={closeLightbox}
          />

          <div className="photo-lightbox__content">
            <button
              type="button"
              className="photo-lightbox__close"
              onClick={closeLightbox}
              aria-label="Close enlarged photo"
            >
              <CloseIcon />
            </button>

            <div className="photo-lightbox__stage">
              <button
                type="button"
                className="photo-lightbox__arrow photo-lightbox__arrow--prev"
                onClick={goToPrev}
                aria-label="Previous photo"
              >
                <ChevronLeft />
              </button>

              <Image
                src={activePhoto.src}
                alt={activePhoto.alt}
                width={1280}
                height={960}
                sizes="90vw"
                className="photo-lightbox__image"
              />

              <button
                type="button"
                className="photo-lightbox__arrow photo-lightbox__arrow--next"
                onClick={goToNext}
                aria-label="Next photo"
              >
                <ChevronRight />
              </button>
            </div>

            {activePhoto.caption ? (
              <figcaption className="photo-lightbox__caption">{activePhoto.caption}</figcaption>
            ) : null}

            <p className="photo-lightbox__counter" aria-hidden="true">
              {currentIndex + 1} / {total}
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}

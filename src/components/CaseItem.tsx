import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";
import "./CaseItem.css";
import type { Project } from "../types/project";

type ProjectCopy = {
  category: string;
  description: string;
  alts: string[];
};

interface CaseItemProps {
  project: Project;
}

function wrapIndex(index: number, total: number) {
  if (total === 0) {
    return 0;
  }

  return (index + total) % total;
}

export default function CaseItem({ project }: CaseItemProps) {
  const { t } = useTranslation();
  const translated = t(`projects.items.${project.slug}`, {
    returnObjects: true,
  });
  const copy: ProjectCopy =
    typeof translated === "object" &&
    translated !== null &&
    "category" in translated
      ? (translated as ProjectCopy)
      : {
          category: project.category,
          description: project.description,
          alts: project.images.map((image) => image.alt),
        };
  const [index, setIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [failedSources, setFailedSources] = useState<string[]>([]);
  const pointerStartX = useRef<number | null>(null);
  const skipClick = useRef(false);

  const images = project.images
    .map((image, imageIndex) => ({
      ...image,
      alt: copy.alts?.[imageIndex] ?? image.alt,
    }))
    .filter((image) => !failedSources.includes(image.src));
  const total = images.length;
  const currentIndex = total === 0 ? 0 : Math.min(index, total - 1);
  const current = images[currentIndex];
  const hasGallery = total > 1;

  const goTo = useCallback(
    (next: number) => {
      if (total === 0) {
        return;
      }

      setIndex(wrapIndex(next, total));
    },
    [total],
  );

  const goPrev = useCallback(
    () => goTo(currentIndex - 1),
    [goTo, currentIndex],
  );
  const goNext = useCallback(
    () => goTo(currentIndex + 1),
    [goTo, currentIndex],
  );

  useEffect(() => {
    if (!lightboxOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setLightboxOpen(false);
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goPrev();
        return;
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        goNext();
      }
    }

    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKey);
    };
  }, [lightboxOpen, goPrev, goNext]);

  function handleImageError(src: string) {
    setFailedSources((currentFailed) =>
      currentFailed.includes(src) ? currentFailed : [...currentFailed, src],
    );
  }

  function handlePointerDown(event: React.PointerEvent<HTMLDivElement>) {
    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }

    pointerStartX.current = event.clientX;
  }

  function handlePointerUp(event: React.PointerEvent<HTMLDivElement>) {
    if (pointerStartX.current === null || !hasGallery) {
      pointerStartX.current = null;
      return;
    }

    const delta = event.clientX - pointerStartX.current;
    pointerStartX.current = null;

    if (Math.abs(delta) < 48) {
      return;
    }

    skipClick.current = true;
    if (delta < 0) {
      goNext();
    } else {
      goPrev();
    }
  }

  function openLightbox() {
    if (skipClick.current) {
      skipClick.current = false;
      return;
    }

    if (!current) {
      return;
    }

    setLightboxOpen(true);
  }

  const counter = total > 0 ? `${currentIndex + 1} / ${total}` : "0 / 0";

  return (
    <article
      className={
        project.featured ? "case-item case-item--featured" : "case-item"
      }
    >
      <div className="case-item__gallery">
        <div
          className="case-item__stage"
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerCancel={() => {
            pointerStartX.current = null;
          }}
        >
          {current ? (
            <button
              type="button"
              className="case-item__preview"
              onClick={openLightbox}
              aria-label={t("gallery.open", { alt: current.alt })}
            >
              <img
                src={current.src}
                alt={current.alt}
                width={1600}
                height={1000}
                loading={project.featured && currentIndex === 0 ? "eager" : "lazy"}
                decoding="async"
                draggable={false}
                onError={() => handleImageError(current.src)}
              />
            </button>
          ) : (
            <div className="case-item__fallback" aria-hidden="true" />
          )}

          {hasGallery ? (
            <>
              <button
                type="button"
                className="case-item__nav case-item__nav--prev"
                onClick={goPrev}
                aria-label={t("gallery.previous")}
              >
                <span aria-hidden="true">‹</span>
              </button>
              <button
                type="button"
                className="case-item__nav case-item__nav--next"
                onClick={goNext}
                aria-label={t("gallery.next")}
              >
                <span aria-hidden="true">›</span>
              </button>
              <p className="case-item__counter" aria-live="polite">
                {counter}
              </p>
            </>
          ) : null}
        </div>

        {hasGallery ? (
          <>
            <div
              className="case-item__dots"
              role="tablist"
              aria-label={t("gallery.list", { title: project.title })}
            >
              {images.map((image, imageIndex) => (
                <button
                  key={image.src}
                  type="button"
                  role="tab"
                  className={
                    imageIndex === currentIndex
                      ? "case-item__dot case-item__dot--active"
                      : "case-item__dot"
                  }
                  aria-label={t("gallery.show", {
                    current: imageIndex + 1,
                    total,
                  })}
                  aria-selected={imageIndex === currentIndex}
                  onClick={() => goTo(imageIndex)}
                />
              ))}
            </div>

            <ul className="case-item__thumbs">
              {images.map((image, imageIndex) => (
                <li key={image.src}>
                  <button
                    type="button"
                    className={
                      imageIndex === currentIndex
                        ? "case-item__thumb case-item__thumb--active"
                        : "case-item__thumb"
                    }
                    aria-label={t("gallery.showAlt", { alt: image.alt })}
                    aria-current={imageIndex === currentIndex ? "true" : undefined}
                    onClick={() => goTo(imageIndex)}
                  >
                    <img
                      src={image.src}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      draggable={false}
                      onError={() => handleImageError(image.src)}
                    />
                  </button>
                </li>
              ))}
            </ul>
          </>
        ) : null}
      </div>

      <div className="case-item__content">
        <p className="case-item__category">{copy.category}</p>

        <h3 className="case-item__title">{project.title}</h3>

        <p className="case-item__description">{copy.description}</p>

        {project.technologies.length > 0 ? (
          <ul className="case-item__stack">
            {project.technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        ) : null}

        {project.website ? (
          <a
            href={project.website}
            target="_blank"
            rel="noopener noreferrer"
            className="case-item__link"
          >
            {t("projects.visit")}
          </a>
        ) : null}
      </div>

      {lightboxOpen && current
        ? createPortal(
            <div
              className="case-lightbox"
              role="dialog"
              aria-modal="true"
              aria-label={t("gallery.dialog", {
                title: project.title,
                counter,
              })}
              onClick={() => setLightboxOpen(false)}
            >
              <div
                className="case-lightbox__frame"
                onClick={(event) => event.stopPropagation()}
              >
                <img
                  src={current.src}
                  alt={current.alt}
                  decoding="async"
                  draggable={false}
                />

                <button
                  type="button"
                  className="case-lightbox__close"
                  onClick={() => setLightboxOpen(false)}
                  aria-label={t("gallery.close")}
                >
                  <span aria-hidden="true">×</span>
                </button>

                {hasGallery ? (
                  <>
                    <button
                      type="button"
                      className="case-lightbox__nav case-lightbox__nav--prev"
                      onClick={goPrev}
                      aria-label={t("gallery.previous")}
                    >
                      <span aria-hidden="true">‹</span>
                    </button>
                    <button
                      type="button"
                      className="case-lightbox__nav case-lightbox__nav--next"
                      onClick={goNext}
                      aria-label={t("gallery.next")}
                    >
                      <span aria-hidden="true">›</span>
                    </button>
                    <p className="case-lightbox__counter" aria-live="polite">
                      {counter}
                    </p>
                  </>
                ) : null}
              </div>
            </div>,
            document.body,
          )
        : null}
    </article>
  );
}

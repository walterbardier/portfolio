import { useEffect, useState } from "react";

import { createPortal } from "react-dom";

import {
  FaGithub,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import { HiPlay } from "react-icons/hi2";

import {
  useLanguage,
} from "../context/LanguageContext";

import translations from "../data/translations";

export default function ProjectModal({
  project,
  onClose,
}) {
  const [currentImage, setCurrentImage] =
    useState(0);

  const [fullscreen, setFullscreen] =
    useState(false);

  const { language } =
    useLanguage();

  const t = translations[language];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!fullscreen) {
        nextImage();
      }
    }, 4000);

    return () =>
      clearInterval(interval);
  });

  useEffect(() => {
    document.body.style.overflow =
      "hidden";

    return () => {
      document.body.style.overflow =
        "auto";
    };
  }, []);

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev ===
      project.images.length - 1
        ? 0
        : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0
        ? project.images.length - 1
        : prev - 1
    );
  };

  return createPortal(
    <>
      <div
        className="modal-overlay"
        onClick={onClose}
      >
        <div
          className="modal glass"
          onClick={(e) =>
            e.stopPropagation()
          }
        >
          <div className="modal-image-wrapper">
            <button
              className="carousel-arrow left"
              onClick={prevImage}
            >
              <FaChevronLeft />
            </button>

            <img
              src={
                project.images[
                  currentImage
                ]
              }
              alt={
                project.name[
                  language
                ]
              }
              className="modal-image"
              onClick={() =>
                setFullscreen(true)
              }
            />

            <div
              className="expand-pill"
              onClick={() =>
                setFullscreen(true)
              }
            >
              {t.expand}
            </div>

            <button
              className="carousel-arrow right"
              onClick={nextImage}
            >
              <FaChevronRight />
            </button>
          </div>

          <div className="modal-content">
            <div className="modal-top">
              <div>
                <h2>
                  {
                    project.name[
                      language
                    ]
                  }
                </h2>

                <p>
                  {
                    project
                      .description[
                      language
                    ]
                  }
                </p>
              </div>

              {project.type.en !==
                "UI/UX & Product Design" && (
                <div className="modal-buttons">
                  <a
                    href={
                      project.github
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-button"
                  >
                    <FaGithub />
                  </a>

                  {project.name.en ===
                    "Portfolio UI" ? (
                    <div className="live-demo-button current-site">
                      <span>
                        {language === "es"
                          ? "Estás aquí :)"
                          : "You're here :)"}
                      </span>
                    </div>
                  ) : (
                    project.name.en !==
                      "Overwatch 2 UI Concept" &&
                    project.name.en !==
                      "Río Negro Conectado" && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="live-demo-button"
                        >
                          <HiPlay />

                          <span>
                            {t.liveDemo}
                          </span>
                        </a>
                      )
                  )}
                </div>
              )}
            </div>

            <div className="project-tags">
              {project.technologies.map(
                (tech) => (
                  <span key={tech}>
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {fullscreen && (
        <div
          className="fullscreen-gallery"
          onClick={() =>
            setFullscreen(false)
          }
        >
          <button
            className="fullscreen-arrow left"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
          >
            <FaChevronLeft />
          </button>

          <img
            src={
              project.images[
                currentImage
              ]
            }
            alt={
              project.name[
                language
              ]
            }
            className="fullscreen-image"
          />

          <button
            className="fullscreen-arrow right"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </>,
    document.body
  );
}
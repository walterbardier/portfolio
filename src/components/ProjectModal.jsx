import { useEffect, useState } from "react";

import { createPortal } from "react-dom";

import {
  FaGithub,
  FaChevronLeft,
  FaChevronRight,
  FaBehance,
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

  const [expanded, setExpanded] = useState(false);

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

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (fullscreen) {
        switch (e.key) {
          case "ArrowLeft":
            prevImage();
            break;
  
          case "ArrowRight":
            nextImage();
            break;
  
          case "Escape":
            setFullscreen(false);
            break;
  
          default:
            break;
        }
      } else {
        switch (e.key) {
          case "ArrowLeft":
            prevImage();
            break;
  
          case "ArrowRight":
            nextImage();
            break;
  
          case "Escape":
            onClose();
            break;
  
          default:
            break;
        }
      }
    };
  
    window.addEventListener("keydown", handleKeyDown);
  
    return () =>
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
  }, [fullscreen, project]);
  

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
                  {project.name[language]}
                </h2>

                <p className={`modal-description ${expanded ? "expanded" : ""}`}>
                  {project.description[language]}
                </p>

                <button
                  className="read-more"
                  onClick={() => setExpanded(!expanded)}
                >
                  {expanded
                    ? t.readLess
                    : t.readMore}
                </button>

              </div>
              
              {/* Opciones de botones segun caso */}
              <div className="modal-buttons">
                {/* Si el tipo es UX/UI... -> Be */}
                {project.type.en ===
                "UX/UI & Product Design" ? (
                  
                  <a
                    href={project.caseStudy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="live-demo-button behance-button"
                  >
                    <FaBehance />

                    <span>
                      {t.caseStudy}
                    </span>
                  </a>
                ) : (
                  <>
                  {/* Sino... -> Github */}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-button"
                    >
                      <FaGithub />
                    </a>

                    {/* Si nombre es Portfolio UI.. -> "Estás aquí" (sin Live Demo) */}
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
                      // Si el nombre no es Ow2 o RNC... -> Live Demo
                      // (Sino, no incluye botón de Live Demo)
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
                  </>
                )}
              </div>
            </div>

            <div className="project-tags">
              {project.technologies.map((tech) => (
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
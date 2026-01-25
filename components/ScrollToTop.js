import { useState, useEffect } from 'react'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="scroll-to-top"
          aria-label="Наверх"
          title="Наверх"
        >
          <span className="scroll-icon">↑</span>
        </button>
      )}
      <style jsx>{`
        .scroll-to-top {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          background: var(--accent);
          color: var(--bg-primary);
          border: 2px solid var(--accent);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: 600;
          box-shadow: 0 4px 12px var(--shadow);
          transition: all 0.3s ease;
          z-index: 1000;
          opacity: 0;
          animation: fadeIn 0.3s ease forwards;
        }

        .scroll-to-top:hover {
          transform: translateY(-4px);
          background: var(--accent-hover);
          border-color: var(--accent-hover);
          box-shadow: 0 6px 20px var(--shadow-hover);
        }

        .scroll-to-top:active {
          transform: translateY(-2px);
        }

        .scroll-icon {
          display: block;
          line-height: 1;
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }

        @media (max-width: 768px) {
          .scroll-to-top {
            bottom: 1.5rem;
            right: 1.5rem;
            width: 2.5rem;
            height: 2.5rem;
            font-size: 1.25rem;
          }
        }
      `}</style>
    </>
  )
}

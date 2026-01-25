const TableOfContents = ({ headings }) => {
  if (!headings || headings.length === 0) {
    return null;
  }

  return (
    <nav className="table-of-contents">
      <h3>Содержание</h3>
      <ul>
        {headings.map((heading) => (
          <li key={heading.id} className={`toc-level-${heading.depth}`}>
            <a href={`#${heading.id}`}>{heading.text}</a>
          </li>
        ))}
      </ul>
      <style jsx>{`
        .table-of-contents {
          background-color: #f9f9f9;
          border: 1px solid #e0e0e0;
          border-radius: 5px;
          padding: 1.5rem;
          margin-bottom: 2rem;
        }

        .table-of-contents h3 {
          margin-top: 0;
          margin-bottom: 1rem;
          font-size: 1.25rem;
          color: #333;
        }

        .table-of-contents ul {
          list-style: none;
          padding-left: 0;
          margin: 0;
        }

        .table-of-contents li {
          margin-bottom: 0.5rem;
        }

        .table-of-contents a {
          color: #0066cc;
          text-decoration: none;
          transition: color 0.2s;
        }

        .table-of-contents a:hover {
          color: #0052a3;
          text-decoration: underline;
        }

        .toc-level-1 {
          font-weight: 600;
        }

        .toc-level-2 {
          padding-left: 1rem;
        }

        .toc-level-3 {
          padding-left: 2rem;
          font-size: 0.9em;
        }

        .toc-level-4 {
          padding-left: 3rem;
          font-size: 0.85em;
        }

        .toc-level-5,
        .toc-level-6 {
          padding-left: 4rem;
          font-size: 0.8em;
        }
      `}</style>
    </nav>
  );
};

export default TableOfContents;

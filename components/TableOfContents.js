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
    </nav>
  );
};

export default TableOfContents;

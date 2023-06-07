import React, { useState, useEffect } from "react";
import { marked } from "marked";

function Docs() {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch("/api/markdown")
      .then((response) => response.text())
      .then((data) => {
        setMarkdown(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div
      className="tab-pane fade show active"
      id="docs"
      role="tabpanel"
      dangerouslySetInnerHTML={{ __html: marked(markdown) }}
    />
  );
}

export default Docs;
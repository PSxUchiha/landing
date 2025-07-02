"use client";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export default function AboutMe() {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/about-me.md")
      .then((res) => res.text())
      .then(setContent)
      .catch(() => setContent("About me file not found."));
  }, []);

  return (
    <div className="prose prose-invert px-5 py-3">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
} 
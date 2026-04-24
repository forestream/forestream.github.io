"use client";

import { useEffect, useRef, useState } from "react";

export function Modal({
  title,
  content,
}: {
  title?: string;
  content?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const handleOpenChange = () => {
    setOpen(!open);
  };
  useEffect(() => {
    if (!open) return;
    function handleOutsideClick(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [open]);

  useEffect(() => {
    function handleEscapeKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }
    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <div>
      <button
        className="rounded-md bg-blue-500 p-2 text-white"
        onClick={handleOpenChange}
      >
        {open ? "Close" : "Open"}
      </button>
      {open && (
        <>
          <div className="fixed inset-0 bg-black/50" />
          <div className="fixed inset-0 flex items-center justify-center">
            <div ref={ref} className="rounded-md bg-white p-4">
              <h2 className="text-2xl font-bold">{title}</h2>
              <p className="text-gray-500">{content}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

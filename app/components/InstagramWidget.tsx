"use client";
import { useEffect } from "react";

export default function InstagramWidget() {
  useEffect(() => {
    // Optional: load SnapWidget JS (some embeds use it)
    if (document.getElementById("snapwidget-script")) return;
    const script = document.createElement("script");
    script.id = "snapwidget-script";
    script.src = "https://snapwidget.com/js/snapwidget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="flex justify-center items-center w-full m-0 p-0">
      <iframe
        src="https://snapwidget.com/embed/1109542"
        className="snapwidget-widget"
        frameBorder="0"
        scrolling="no"
        style={{
          border: "none",
          overflow: "hidden",
          width: "100%",
          maxWidth: "765px",
          height: "510px",
          display: "block",
        }}
        title="Instagram Feed"
      />
    </section>
  );
}

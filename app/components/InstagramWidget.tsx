"use client";
import { useEffect } from "react";

export default function InstagramWidget() {
  useEffect(() => {
    // Load SnapWidget script once
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
        src="https://snapwidget.com/embed/1109483"
        className="snapwidget-widget"
        frameBorder="0"
        scrolling="no"
        style={{
          border: "none",
          overflow: "hidden",
          width: "100%",
          maxWidth: "900px",
          height: "510px",
          display: "block",
          margin: "0 auto",
        }}
        title="Instagram Feed"
      />
    </section>
  );
}

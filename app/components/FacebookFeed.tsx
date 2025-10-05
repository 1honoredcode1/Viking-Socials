"use client";
import { useEffect } from "react";

export default function CuratorFeed() {
  useEffect(() => {
    // Avoid loading script multiple times
    if (document.getElementById("curator-script")) return;

    const script = document.createElement("script");
    script.id = "curator-script";
    script.async = true;
    script.charset = "UTF-8";
    script.src =
      "https://cdn.curator.io/published/5f6ec56f-e0b1-450e-a114-21664595cf0f.js"; // your curator.io link
    document.body.appendChild(script);
  }, []);

  return (
    <section >
      <h2>Social Feed</h2>
      <div
        id="curator-feed-default-feed-layout"
        className="w-full max-w-6xl mx-auto"
      >
      </div>
    </section>
  );
}

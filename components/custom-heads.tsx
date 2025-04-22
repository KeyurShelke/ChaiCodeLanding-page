"use client";

import { useEffect } from "react";

export default function CustomHead() {
  useEffect(() => {
    // Create link elements for favicons
    const linkSvg = document.createElement("link");
    linkSvg.rel = "icon";
    linkSvg.href = "/favicon.svg";
    linkSvg.type = "image/svg+xml";

    const link32 = document.createElement("link");
    link32.rel = "icon";
    link32.href = "/favicon-32x32.png";
    link32.type = "image/png";
    link32.sizes = "32x32";

    const link16 = document.createElement("link");
    link16.rel = "icon";
    link16.href = "/favicon-16x16.png";
    link16.type = "image/png";
    link16.sizes = "16x16";

    // Append to head
    document.head.appendChild(linkSvg);
    document.head.appendChild(link32);
    document.head.appendChild(link16);

    // Cleanup on unmount
    return () => {
      document.head.removeChild(linkSvg);
      document.head.removeChild(link32);
      document.head.removeChild(link16);
    };
  }, []);

  return null;
}

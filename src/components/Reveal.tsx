"use client";

import { useEffect, useRef, useState } from "react";

type Props = React.HTMLAttributes<HTMLElement> & { as?: "div" | "a"; href?: string; target?: string; rel?: string };

export default function Reveal({ as = "div", className = "", children, ...rest }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); io.disconnect(); } }, { rootMargin: "0px 0px -12% 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const Tag = as as any;
  return <Tag ref={ref} className={`reveal ${inView ? "in" : ""} ${className}`} {...rest}>{children}</Tag>;
}

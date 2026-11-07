import { useEffect, useState } from 'react';

/** Tracks which section currently crosses a "reading line" ~35% down the viewport. */
export function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState<string>(ids[0]);

  useEffect(() => {
    const visible = new Map<string, boolean>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => visible.set(e.target.id, e.isIntersecting));
        const current = ids.find((id) => visible.get(id));
        if (current) setActive(current);
      },
      { rootMargin: '-35% 0px -64% 0px' },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

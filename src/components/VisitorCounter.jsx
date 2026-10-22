import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye } from "lucide-react";

const NAMESPACE = "yashdsingh-portfolio";
const KEY = "visitors";
const STORAGE_KEY = "portfolio_visitor_counted";

function AnimatedNumber({ value }) {
  const [display, setDisplay] = useState(0);
  const start = useRef(0);

  useEffect(() => {
    if (value === 0) return;
    const end = value;
    const duration = 1800;
    const stepTime = 16;
    const steps = Math.ceil(duration / stepTime);
    const increment = (end - start.current) / steps;
    let current = start.current;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      current += increment;
      if (step >= steps) {
        clearInterval(timer);
        setDisplay(end);
        start.current = end;
      } else {
        setDisplay(Math.floor(current));
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [value]);

  return <span>{display.toLocaleString()}</span>;
}

export default function VisitorCounter() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isNew, setIsNew] = useState(false);

  useEffect(() => {
    const alreadyCounted = sessionStorage.getItem(STORAGE_KEY);
    const endpoint = alreadyCounted
      ? `https://api.countapi.xyz/get/${NAMESPACE}/${KEY}`
      : `https://api.countapi.xyz/hit/${NAMESPACE}/${KEY}`;

    fetch(endpoint)
      .then((res) => {
        if (!res.ok) throw new Error("CountAPI error");
        return res.json();
      })
      .then((data) => {
        const value = data?.value ?? 0;
        setCount(value);
        setLoading(false);
        if (!alreadyCounted) {
          sessionStorage.setItem(STORAGE_KEY, "true");
          setIsNew(true);
        }
      })
      .catch(() => {
        const stored = parseInt(localStorage.getItem(STORAGE_KEY) ?? "0", 10);
        if (!alreadyCounted) {
          const next = stored + 1;
          localStorage.setItem(STORAGE_KEY, String(next));
          sessionStorage.setItem(STORAGE_KEY, "true");
          setCount(next);
          setIsNew(true);
        } else {
          setCount(stored);
        }
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9, duration: 0.5 }}
      className="visitor-counter-wrapper"
      title={error ? "Local count (offline mode)" : "Live visitor count"}
    >
      <span className="visitor-glow-ring" />
      <Eye size={14} className="visitor-eye-icon" />
      {loading ? (
        <span className="visitor-spinner" />
      ) : (
        <span className="visitor-count">
          <AnimatedNumber value={count} />
          {error && <span className="visitor-local-badge">local</span>}
        </span>
      )}
      <span className="visitor-label">visitors</span>
      <AnimatePresence>
        {isNew && !loading && (
          <motion.span
            className="visitor-tooltip"
            initial={{ opacity: 0, y: -6, scale: 0.9 }}
            animate={{ opacity: 1, y: -36, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.9 }}
            transition={{ duration: 0.4 }}
          >
            You are visitor #{count.toLocaleString()}!
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

const dots = [
  { cls: 'bg-dot-1',  top: '8%',  left: '12%',  size: 5 },
  { cls: 'bg-dot-2',  top: '22%', left: '78%',  size: 4 },
  { cls: 'bg-dot-3',  top: '55%', left: '5%',   size: 6 },
  { cls: 'bg-dot-4',  top: '72%', left: '88%',  size: 4 },
  { cls: 'bg-dot-5',  top: '40%', left: '92%',  size: 5 },
  { cls: 'bg-dot-6',  top: '15%', left: '45%',  size: 3 },
  { cls: 'bg-dot-7',  top: '85%', left: '30%',  size: 5 },
  { cls: 'bg-dot-8',  top: '30%', left: '20%',  size: 4 },
  { cls: 'bg-dot-9',  top: '65%', left: '60%',  size: 6 },
  { cls: 'bg-dot-10', top: '48%', left: '38%',  size: 3 },
  { cls: 'bg-dot-11', top: '90%', left: '70%',  size: 4 },
  { cls: 'bg-dot-12', top: '5%',  left: '65%',  size: 5 },
];

export function FloatingDots() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {dots.map((dot) => (
        <span
          key={dot.cls}
          className={`bg-dot ${dot.cls} absolute rounded-full bg-emerald-500`}
          style={{
            top: dot.top,
            left: dot.left,
            width: dot.size,
            height: dot.size,
            opacity: 0.3,
          }}
        />
      ))}
    </div>
  );
}

export function Card({ children, ...props }) {
  return <div className="rounded-xl border bg-white p-4 shadow" {...props}>{children}</div>;
}

export function CardContent({ children, ...props }) {
  return <div className="p-2" {...props}>{children}</div>;
}

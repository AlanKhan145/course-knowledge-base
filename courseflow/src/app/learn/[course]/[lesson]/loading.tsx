export default function Loading() {
  return (
    <main className="mx-auto max-w-3xl px-6 pt-16" aria-busy="true" aria-label="Đang tải bài học">
      <div className="skeleton h-10 w-3/4" />
      <div className="skeleton mt-4 h-5 w-1/2" />
      {Array.from({ length: 10 }, (_, i) => <div key={i} className="skeleton mt-4 h-4" style={{ width: `${60 + ((i * 29) % 40)}%` }} />)}
    </main>
  );
}

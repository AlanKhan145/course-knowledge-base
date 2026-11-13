export default function Loading() {
  return (
    <main className="mx-auto max-w-7xl px-4 pt-8 sm:px-6" aria-busy="true" aria-label="Đang tải">
      <div className="skeleton h-40 rounded-3xl" />
      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 8 }, (_, i) => <div key={i} className="skeleton h-56 rounded-2xl" />)}
      </div>
    </main>
  );
}

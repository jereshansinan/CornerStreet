export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-4">
      <div className="inline-block w-full">{children}</div>
    </section>
  );
}

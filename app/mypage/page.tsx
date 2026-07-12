export const metadata = {
  title: "My Page | GTX Infotech",
};

export default function MyPage() {
  return (
    <main className="min-h-screen px-6 py-24 sm:px-10 lg:px-16">
      <section className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          My Page
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">
          Welcome to your new page at <span className="font-mono">/mypage</span>.
        </p>
      </section>
    </main>
  );
}

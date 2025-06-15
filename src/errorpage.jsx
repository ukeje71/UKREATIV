export default function ErrorPage() {
  return (
    <div className="bg-black text-black font-black text-4xl text-center flex flex-col gap-9 justify-center align-center h-[100vh] w-full">
      404 Not Found
      <a href="/" className="text-blue-300 underline text-xl">
        Go to Home
      </a>
    </div>
  );
}

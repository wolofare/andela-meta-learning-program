import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  return (
    <section className="bg-neutral-100 p-4 w-full mx-auto">
      <h1 className="text-2xl underline lg:text-3xl text-rose-400 mb-3">
        Oops!
      </h1>
      <p className="my-4 text-gray-500">
        Sorry, an unexpected error has occurred
      </p>
    </section>
  );
}

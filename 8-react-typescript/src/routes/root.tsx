import { Outlet } from "react-router-dom";

export default function root() {
  return (
    <section className="w-full h-screen max-w-6xl mx-auto">
      <div className="grid md:grid-cols-12 gap-5  h-full">
        <aside className="p-4 bg-neutral-50 md:col-span-4 md:pt-0 flex flex-col">
          <h1 className="border-t border-neutral-200 py-6 order-1 text-xl font-semibold">
            React Router Contacts
          </h1>
          <div className="flex-1 p-4">
            <form role="search" className="mb-6">
              <div className="flex gap-2">
                <input
                  type="search"
                  name="q"
                  id="q"
                  aria-label="Search contacts"
                  placeholder="Search"
                  className="w-full border border-neutral-200 p-1 rounded-md"
                />
                <button
                  type="submit"
                  className="bg-white text-blue-500 px-2 py-0.5 rounded-lg"
                >
                  New
                </button>
              </div>
            </form>
            <nav className="border-t border-neutral-200 py-5">
              <ul>
                <li>
                  <a href={`/contacts/1`}>Your name</a>
                </li>
                <li>
                  <a href={`/contacts/2`}>Your Friend</a>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
        <main className="md:col-span-8 p-4">
          <div>
            <Outlet />
          </div>
        </main>
      </div>
    </section>
  );
}

import Container from "../components/Container";
import { products } from "../data/products";

export function ProductsPage() {
  return (
    <section className="py-10">
      <Container>
        <h2 className="text-xl font-bold text-gray-600 text-left mb-6">
          Explore Our Products
        </h2>
        <article className="bg-[#fdf3e6] text-[#5b6876] rounded-md max-w-sm  p-5">
          {products.map((product) => {
            const { id, name } = product;
            return (
              <p key={id} className="text-lg mb-4">
                {name}
              </p>
            );
          })}
        </article>
      </Container>
    </section>
  );
}

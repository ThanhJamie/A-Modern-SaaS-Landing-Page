import { Container } from "../shared/Container";
import { Title } from "../shared/Title";

const logo = ["discord", "openai", "paypal", "slack", "spotify", "youtube"];

export const Brands = () => {
  return (
    <section>
      <Container className="space-y-8">
        <div className="text-center max-w-3xl mx-auto">
          <Title> Trusted by Industry Leaders</Title>
        </div>
        <div className="flex justify-center flex-wrap gap-4">
          {logo.map((item, index) => (
            <div
              key={index}
              className="p-4 sm:p-5 rounded-xl bg-body border border-box-border group"
            >
              <img
                src={`/src/assets/logos/${item}.png`}
                alt={item}
                className="h-7 sm:h-10 w-auto ease-linear duration-300 grayscale group-hover:!grayscale-0 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

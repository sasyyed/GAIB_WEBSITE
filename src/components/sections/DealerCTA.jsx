import Button from "../ui/Button";
import Container from "../ui/Container";

const DealerCTA = () => {
  return (
    <section className="relative overflow-hidden bg-gaib-green py-16 text-white sm:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_35%,rgba(216,163,26,0.22),transparent_28%),linear-gradient(90deg,#08431f,#0b5d2a)]" />
      <Container>
        <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="max-w-3xl font-display text-3xl font-bold leading-tight sm:text-4xl">
              Become Our Dealer
            </h2>
            <p className="mt-4 max-w-2xl leading-8 text-white/82">
              Join our growing network of dealers across India and be a part of our success story.
            </p>
          </div>
          <Button to="/dealers" variant="gold" size="lg">
            Enquire Now
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default DealerCTA;

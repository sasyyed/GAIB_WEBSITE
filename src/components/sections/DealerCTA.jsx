import { FiMapPin } from "react-icons/fi";
import Button from "../ui/Button";
import Container from "../ui/Container";

const DealerCTA = () => {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <div className="overflow-hidden rounded-[24px] bg-gaib-green p-8 text-white shadow-soft sm:p-10 lg:p-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="flex size-12 items-center justify-center rounded-2xl bg-white/12">
                <FiMapPin className="size-5" aria-hidden="true" />
              </div>
              <h2 className="mt-6 max-w-3xl font-display text-3xl font-bold leading-tight sm:text-4xl">
                Become a GAIB dealer and grow with a focused agricultural equipment brand.
              </h2>
              <p className="mt-4 max-w-2xl leading-8 text-white/74">
                Share your region and business profile to begin a dealership conversation with the GAIB team.
              </p>
            </div>
            <Button to="/dealers" variant="light" size="lg">
              Dealer Enquiry
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DealerCTA;

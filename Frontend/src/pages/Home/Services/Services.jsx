import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="my-8">
      <div className="text-center">
        <h1 className="text-rose-600 text-xl font-bold">Services</h1>
        <h1 className="text-5xl font-semibold pb-2">Our Services Area</h1>
        <p className="w-1/2 text-sm mx-auto">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-3 my-8">
        <ServiceCard></ServiceCard>
        <ServiceCard></ServiceCard>
        <ServiceCard></ServiceCard>
        <ServiceCard></ServiceCard>
        <ServiceCard></ServiceCard>
        <ServiceCard></ServiceCard>
      </div>
    </div>
  );
};

export default Services;

import Button from "./Button";

export default function Banner() {
  return (
    <section className="flex flex-1 flex-wrap items-center justify-center gap-[42px] px-6 py-5 text-center">
      <h2 className="text-2xl font-medium leading-tight text-white">
        Support for homeowners in fire-affected Southern California communities
      </h2>
      <Button variant="accent" className="shrink-0 whitespace-nowrap">
        Find out more
      </Button>
    </section>
  );
}

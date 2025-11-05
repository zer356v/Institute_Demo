const TrustedBy = () => {
  const partners = [
    { name: "Harvard University", width: "w-32" },
    { name: "MIT", width: "w-24" },
    { name: "Stanford", width: "w-28" },
    { name: "Oxford", width: "w-32" },
  ];

  return (
    <section className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-bold mb-12">Trusted by</h2>
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
          {partners.map((partner, index) => (
            <div
              key={index}
              className={`${partner.width} h-16 bg-muted rounded-lg flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity cursor-pointer`}
            >
              <span className="text-sm font-semibold text-muted-foreground">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;

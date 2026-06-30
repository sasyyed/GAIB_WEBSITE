const VariantTable = ({ variants }) => {
  if (!variants?.length) {
    return null;
  }

  return (
    <div className="overflow-hidden rounded-[24px] border border-gaib-dark/10 bg-white shadow-card">
      <div className="border-b border-gaib-dark/10 px-5 py-4">
        <h2 className="font-display text-2xl font-bold text-gaib-dark">Variants and Technical Specifications</h2>
        <p className="mt-2 text-sm leading-6 text-gaib-gray">
          Product variant details arranged from the GAIB technical specification sheet.
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] text-left text-sm">
          <caption className="sr-only">Product variants and technical specifications</caption>
          <thead className="bg-gaib-green text-white">
            <tr>
              <th className="px-5 py-4 font-semibold" scope="col">
                Variant
              </th>
              <th className="px-5 py-4 font-semibold" scope="col">
                Technical Specifications
              </th>
              <th className="px-5 py-4 font-semibold" scope="col">
                Power
              </th>
              <th className="px-5 py-4 font-semibold" scope="col">
                Weight
              </th>
            </tr>
          </thead>
          <tbody>
            {variants.map((variant) => (
              <tr key={variant.name} className="border-b border-gaib-dark/10 last:border-0">
                <th className="w-52 px-5 py-4 align-top font-semibold text-gaib-dark" scope="row">
                  {variant.name}
                </th>
                <td className="px-5 py-4 align-top leading-7 text-gaib-gray">{variant.specifications}</td>
                <td className="w-40 px-5 py-4 align-top text-gaib-gray">{variant.power}</td>
                <td className="w-32 px-5 py-4 align-top text-gaib-gray">{variant.weight}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VariantTable;

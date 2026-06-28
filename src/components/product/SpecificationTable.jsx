const SpecificationTable = ({ specifications }) => {
  return (
    <div className="overflow-hidden rounded-[24px] border border-gaib-dark/10 bg-white shadow-card">
      <table className="w-full text-left text-sm">
        <caption className="sr-only">Product specifications</caption>
        <tbody>
          {specifications.map((item) => (
            <tr key={item.label} className="border-b border-gaib-dark/10 last:border-0">
              <th className="w-2/5 px-4 py-4 font-semibold text-gaib-dark sm:px-5" scope="row">
                {item.label}
              </th>
              <td className="px-4 py-4 text-gaib-gray sm:px-5">{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SpecificationTable;

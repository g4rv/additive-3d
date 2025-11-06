interface MaterialTableProps {
  data: {
    property: string;
    value: string;
    unit?: string;
  }[];
}

export default function MaterialTable({ data }: MaterialTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-card-bg border-border border-b">
            <th className="text-gold px-4 py-3 text-left font-semibold">
              Властивість
            </th>
            <th className="text-gold px-4 py-3 text-left font-semibold">
              Значення
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              className={`border-border border-b ${
                index % 2 === 0 ? "bg-darker-bg" : "bg-dark-bg"
              } hover:bg-card-bg transition-colors`}
            >
              <td className="text-gray-light px-4 py-3">{row.property}</td>
              <td className="text-gray-medium px-4 py-3">
                {row.value}
                {row.unit && <span className="ml-1 text-sm">{row.unit}</span>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

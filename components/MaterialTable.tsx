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
          <tr className="bg-card-bg border-b border-border">
            <th className="text-left py-3 px-4 text-gold font-semibold">
              Властивість
            </th>
            <th className="text-left py-3 px-4 text-gold font-semibold">
              Значення
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              className={`border-b border-border ${
                index % 2 === 0 ? "bg-darker-bg" : "bg-dark-bg"
              } hover:bg-card-bg transition-colors`}
            >
              <td className="py-3 px-4 text-gray-light">{row.property}</td>
              <td className="py-3 px-4 text-gray-medium">
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

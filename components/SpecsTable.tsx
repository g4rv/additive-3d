import React from 'react';
import { SpecRow } from '@/types';

interface SpecsTableProps {
  specs: SpecRow[];
  title?: string;
}

export default function SpecsTable({ specs, title }: SpecsTableProps) {
  return (
    <div className="overflow-x-auto">
      {title && <h3 className="text-xl font-semibold mb-4">{title}</h3>}
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-neutral-200">
            <th className="text-left p-3 font-semibold text-neutral-900">Параметр</th>
            <th className="text-left p-3 font-semibold text-neutral-900">Значення</th>
          </tr>
        </thead>
        <tbody>
          {specs.map((spec, index) => (
            <tr 
              key={index} 
              className={index % 2 === 0 ? 'bg-white' : 'bg-warm'}
            >
              <td className="p-3 text-neutral-700">{spec.param}</td>
              <td className="p-3 font-mono text-neutral-900">{spec.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

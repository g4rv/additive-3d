import { NextResponse } from 'next/server';

export async function POST(_req: Request) {
  // validate form data, files, etc.
  // For now, return a placeholder response
  return NextResponse.json({
    id: 'Q-0001',
    estimate: null,
    message_uk: 'Запит отримано. Розрахунок буде доступний пізніше.'
  });
}

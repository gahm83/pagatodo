import { NextResponse } from 'next/server';

const API_ENDPOINT = new URL('https://dev.obtenmas.com/catom/api/challenge/banks');

export async function GET() {
  const response = await fetch(`${API_ENDPOINT}`);
  const data = await response.json();
  return NextResponse.json(data);
}
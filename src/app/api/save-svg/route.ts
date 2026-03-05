import { writeFileSync } from 'fs';
import { NextRequest, NextResponse } from 'next/server';
import { join } from 'path';

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, X-Filename',
    },
  });
}

export async function POST(req: NextRequest) {
  const body = await req.text();
  const name = req.headers.get('x-filename') || 'about-illustration.svg';
  const outPath = join(process.cwd(), 'public', 'images', name);
  writeFileSync(outPath, body);
  return NextResponse.json(
    { ok: true, bytes: body.length, path: outPath },
    { headers: { 'Access-Control-Allow-Origin': '*' } }
  );
}

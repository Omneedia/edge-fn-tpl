import { serve } from 'https://deno.land/std@0.155.0/http/server.ts';
serve((req: Request) => Response.json({ version: '0.0.1' }));

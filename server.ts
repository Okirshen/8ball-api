import { Application } from 'https://deno.land/x/oak/mod.ts';

const app = new Application();

app.use(async ctx => {
  const { replies }: { replies: { reply: string; type: number }[] } =
    JSON.parse(await Deno.readTextFile('./replies.json'));
  const reply = replies[Math.floor(Math.random() * replies.length)];

  ctx.response.body = JSON.stringify(reply);
  ctx.response.headers.set('Content-Type', 'application/json');
});

await app.listen({ port: 8000 });

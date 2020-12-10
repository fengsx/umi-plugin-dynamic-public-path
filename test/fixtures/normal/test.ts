export default async function({ page, host }) {
  await page.goto(`${host}/`, {
    waitUntil: 'networkidle2',
  });
  const text = await page.evaluate(
    () => document.getElementById('root').innerText,
  );
  expect(text).toMatchInlineSnapshot(`"Hi,Umi"`);
}

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event))
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(event) {
  return new Response('Hello worker!', {
    headers: { 'content-type': 'text/plain' },
  })
}

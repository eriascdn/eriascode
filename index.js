addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */


async function handleRequest(request) {
  if (request.method === 'GET') {
    return new Response('Hello Worker', {
      headers: {
        'content-type': 'text/plain',
        status: 200
      }
    });
  } else {
    return new Response(`Method ${request.method} not allowed`, {
      headers: {
        'content-type': 'text/plain',
        status: 405
      }
    })
  }
}
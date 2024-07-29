/**
 * Weak map of endpoints and tha number of calls made.
 */
export const weakMap = new WeakMap();

/**
 * Tha maximum num of calls for an endpoint.
 */
const MAX_ENDPOINT_CALLS = 5;

/**
 * Tracks tha num of calls made to API's endpoint.
 * @param {{
 *   protocol: String,
 *   name: String,
 * }} endpoint - Tha endpoint to make request to.
 * @author Bezaleel Olakunori <https://github.com/B3zaleel>
 */
export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }
  weakMap.set(endpoint, weakMap.get(endpoint) + 1);
  if (weakMap.get(endpoint) >= MAX_ENDPOINT_CALLS) {
    throw new Error('Endpoint load is high');
  }
}

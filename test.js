async function test() {
  const baseUrl = 'http://localhost:8080';
  
  async function request(method, path, body) {
    try {
      const res = await fetch(`${baseUrl}${path}`, {
        method,
        headers: body ? { 'Content-Type': 'application/json' } : undefined,
        body: body ? JSON.stringify(body) : undefined
      });
      const text = await res.text();
      console.log(`[${method}] ${path} -> ${res.status}: ${text}`);
    } catch (e) {
      console.log(`[${method}] ${path} -> Error: ${e.message}`);
    }
  }

  console.log("Testing Items...");
  await request('GET', '/items');
  await request('POST', '/items', { name: "Headphones" });
  await request('GET', '/items');

  console.log("\nTesting Orders...");
  await request('GET', '/orders');
  await request('POST', '/orders', { item: "Laptop", quantity: 2, customerId: "C001" });
  await request('GET', '/orders/1');

  console.log("\nTesting Payments...");
  await request('GET', '/payments');
  await request('POST', '/payments/process', { orderId: 1, amount: 1299.99, method: "CARD" });
  await request('GET', '/payments/1');
}

test();

import { data } from "./data.js";

export async function loadDashboard() {
  const [items, categories] = Promise.all([data.map()]);
}

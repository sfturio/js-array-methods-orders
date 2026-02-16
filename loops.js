// orders.js
// Processing orders using filter, map, and reduce
// Practice exercise for real-world backend/frontend data manipulation

// ========================================
// DATASET
// ========================================

const orders = [
  { id: 1, customer: "Ana", total: 300, status: "paid" },
  { id: 2, customer: "João", total: 150, status: "pending" },
  { id: 3, customer: "Maria", total: 450, status: "paid" },
  { id: 4, customer: "Pedro", total: 200, status: "cancelled" },
  { id: 5, customer: "Lucas", total: 100, status: "paid" }
];

// ========================================
// FILTER → get only paid orders
// ========================================

const paidOrders = orders.filter(order => order.status === "paid");

console.log("Paid orders:");
console.log(paidOrders);

// ========================================
// MAP → extract totals from paid orders
// ========================================

const paidTotals = paidOrders.map(order => order.total);

console.log("Paid totals:");
console.log(paidTotals);

// ========================================
// REDUCE → calculate total revenue
// ========================================

const totalRevenue = paidTotals.reduce((acc, total) => acc + total, 0);

console.log("Total revenue:");
console.log(totalRevenue);

// ========================================
// CHAIN METHOD → filter + map + reduce
// More efficient real-world approach
// ========================================

const revenue = orders
  .filter(order => order.status === "paid")
  .map(order => order.total)
  .reduce((acc, total) => acc + total, 0);

console.log("Revenue using chain:");
console.log(revenue);

// ========================================
// REDUCE → find biggest order
// ========================================

const biggestOrder = orders.reduce((max, order) => {
  return order.total > max.total ? order : max;
}, orders[0]);

console.log("Biggest order:");
console.log(biggestOrder);

// ========================================
// REDUCE → find lowest order
// ========================================

const lowestOrder = orders.reduce((min, order) => {
  return order.total < min.total ? order : min;
}, orders[0]);

console.log("Lowest order:");
console.log(lowestOrder);

// ========================================
// REDUCE → group orders by status
// Real backend pattern
// ========================================

const groupedOrders = orders.reduce((acc, order) => {

  // create array if it doesn't exist
  if (!acc[order.status]) {
    acc[order.status] = [];
  }

  acc[order.status].push(order);

  return acc;

}, {});

console.log("Grouped orders:");
console.log(groupedOrders);
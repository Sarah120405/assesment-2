/* ●	Implement createLimiter(max) using a closure. It returns { use, reset, remaining }: use() returns true and consumes one until the limit is reached, then returns false.
●	Scenario: a user can rent at most 3 bikes at the same time. Test with max = 3 — call use() 5 times and log the results.
●	In one comment: why can't outside code change the internal counter directly?
 */

function createLimiter(max = 3) {
  let count = 0;

  return {
    use() {
      if (count < max) {
        count++;
        return true;
      }
      return false;
    },
    reset() {
      count = 0;
    },
    get remaining() {
      return max - count;
    },
  };
}
const rentingBike = createLimiter(3);

for (let i = 1; i <= 5; i++) {
  console.log(`Attempt ${i}:`, rentingBike.use());
}

console.log("Remaining after 5 attempts:", rentingBike.remaining);
rentingBike.reset();
console.log(
  "After reset:",
  rentingBike.remaining,
  "Remaining",
  rentingBike.use(),
);

function solution(bridge_length, weight, truck_weights) {
  let time = 0;

  const bridge = Array(bridge_length).fill(0);
  let totalWeight = 0;

  while (totalWeight > 0 || truck_weights.length > 0) {
    time++;

    const outTruck = bridge.shift();
    const nextTruck = truck_weights[0];
    totalWeight -= outTruck;

    if (totalWeight + nextTruck <= weight) {
      const truck = truck_weights.shift();
      bridge.push(truck);
      totalWeight += truck;
    } else {
      bridge.push(0);
    }
  }
    return time;
}
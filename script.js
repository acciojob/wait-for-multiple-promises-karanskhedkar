//your JS code here. If required.
const promise1 = () => {
  return new Promise((resolve, reject) => {
    const start = performance.now();
    setTimeout(() => {
      const end = performance.now();
      const timeTaken = ((end - start) / 1000).toFixed(3);
      resolve({ prom: "Promise 1", time: parseFloat(timeTaken) });
    }, 1000);
  });
};

const promise2 = () => {
  return new Promise((resolve, reject) => {
    const start = performance.now();
    setTimeout(() => {
      const end = performance.now();
      const timeTaken = ((end - start) / 1000).toFixed(3);
      resolve({ prom: "Promise 2", time: parseFloat(timeTaken) });
    }, 2000);
  });
};

const promise3 = () => {
  return new Promise((resolve, reject) => {
    const start = performance.now();
    setTimeout(() => {
      const end = performance.now();
      const timeTaken = ((end - start) / 1000).toFixed(3);
      resolve({ prom: "Promise 3", time: parseFloat(timeTaken) });
    }, 3000);
  });
};

Promise.all([promise1(), promise2(), promise3()]).then((data) => {
  const tbodyElement = document.getElementById("output");
  const loadingRow = document.getElementById("loading");
  if (loadingRow) {
    loadingRow.remove();
  }
  if (tbodyElement) {
    tbodyElement.innerHTML = `
    <tr>
    <td>${data[0].prom}</td>
    <td>${data[0].time.toFixed(0)}</td>
    </tr>
    <tr>
    <td>${data[1].prom}</td>
    <td>${data[1].time.toFixed(0)}</td>
    </tr>
    <tr>
    <td>${data[2].prom}</td>
    <td>${data[2].time.toFixed(0)}</td>
    </tr>
    <tr>
    <td>Total</td>
    <td>${(data[0].time + data[1].time + data[2].time).toFixed(3)}</td>
    </tr>
    `;
  }
});


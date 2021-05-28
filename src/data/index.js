export const fetchPoints = async function() {
  return fetch('/data.json').then((data) => data.json());
};

export const convert = function(rawPoints) {
  return rawPoints.data.split(' ').map((el, i) => {
    let [x, y] = el.split(';');
    return { x: parseInt(x), y: parseInt(y), i };
  });
};

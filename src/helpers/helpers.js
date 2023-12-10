export default function numberWithSpaces(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

export const currentDate = `${year}-${month}-${day - 1}`;

export function scrollToTop() {
  window.scrollTo(0, 0);
}

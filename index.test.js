const index = require("./index.js");
const year = new Date().getFullYear();
const today = new Date();
const todayDay = today.getDate();
const todayMonth = today.getMonth() + 1;
const todayYear = today.getFullYear();

test("parseDate 1 jan", () => {
  expect(index.parseDate("1 янв")).toBe("01/01/" + year);
});

test("parseDate 4 nov 00", () => {
  expect(index.parseDate("4 ноя 00")).toBe("04/11/2000");
});

test("parseDate 1 january", () => {
  expect(index.parseDate("1 января")).toBe("01/01/" + year);
});

test("parseDate 2 february 2002", () => {
  expect(index.parseDate("2 февраля 2002")).toBe("02/02/2002");
});

test("parseDate 1 1", () => {
  expect(index.parseDate("1 1")).toBe("01/01/" + year);
});

test("parseDate 3 2 20", () => {
  expect(index.parseDate("3 2 20")).toBe("03/02/2020");
});

test("isDateFuture next year", () => {
  expect(index.isDateFuture(todayDay, todayMonth, todayYear + 1)).toBe(true);
});

test("isDateFuture next month", () => {
  expect(index.isDateFuture(todayDay, todayMonth + 1, todayYear)).toBe(true);
});

test("isDateFuture next day", () => {
  expect(index.isDateFuture(todayDay + 1, todayMonth, todayYear)).toBe(true);
});

test("isDateFuture next month prev year", () => {
  expect(index.isDateFuture(todayDay, todayMonth + 1, todayYear - 1)).toBe(
    false
  );
});

test("isDateFuture next day prev year", () => {
  expect(index.isDateFuture(todayDay + 1, todayMonth, todayYear - 1)).toBe(
    false
  );
});

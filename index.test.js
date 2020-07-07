const index = require("./index.js");

test("parseDate", () => {
  let year = new Date().getFullYear();
  expect(index.parseDate("1 янв")).toBe("01/01/" + year);
  expect(index.parseDate("4 ноя 00")).toBe("04/11/2000");
  expect(index.parseDate("1 января")).toBe("01/01/" + year);
  expect(index.parseDate("2 февраля 2002")).toBe("02/02/2002");
  expect(index.parseDate("1 1")).toBe("01/01/" + year);
  expect(index.parseDate("3 2 20")).toBe("03/02/2020");
});

test("isDateFuture", () => {
  let today = new Date();
  let todayDay = today.getDate();
  let todayMonth = today.getMonth() + 1;
  let todayYear = today.getFullYear();
  expect(index.isDateFuture(todayDay, todayMonth, todayYear + 1)).toBe(true);
  expect(index.isDateFuture(todayDay, todayMonth + 1, todayYear)).toBe(true);
  expect(index.isDateFuture(todayDay + 1, todayMonth, todayYear)).toBe(true);
  expect(index.isDateFuture(todayDay, todayMonth + 1, todayYear - 1)).toBe(
    false
  );
  expect(index.isDateFuture(todayDay + 1, todayMonth, todayYear - 1)).toBe(
    false
  );
});

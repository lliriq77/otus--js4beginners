/* В переменных circle и square хранятся площади круга
и квадрата соответственно. Написать программу,
которая определяет, поместится ли круг в квадрат. */

export function putCircleInSquare(circle, square) {
  const circleD = 2 * (circle / Math.PI) ** 0.5;
  const squareS = square ** 0.5;

  console.log(
    circleD >= squareS
      ? "круг не поместится в квадрат"
      : "круг поместится в квадрат"
  );
}

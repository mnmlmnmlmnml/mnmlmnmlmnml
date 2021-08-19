export const maybePluralize = (
  count,
  noun,
  suffix = "s",
  suffixTwo = "",
  suffixThree
) => {
  let suff =
    count === 1 ? suffixTwo : count === 5 || count === 0 ? suffixThree : suffix;
  return `  ${count} ${noun}${suff}`;
};

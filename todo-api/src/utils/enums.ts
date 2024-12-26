type enumType = { [key: string]: string | number };

export const getEnumValues = <T extends enumType>(
  item: T,
): (string | number)[] => {
  return Object.keys(item).map((key) => {
    return item[key] as string | number;
  });
};

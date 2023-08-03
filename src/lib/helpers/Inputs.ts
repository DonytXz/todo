export const isEnterKey = (key: any) => {
  if (key === "Enter") {
    return true;
  }
};

export const isEmpty = (length: number) => {
  if (length > 0) {
    return false;
  } else {
    return true;
  }
};

export const dayFormatter = (date: string) => {
  const rowDate = new Date(date);
  const year = rowDate.getFullYear();
  const months = rowDate.getMonth() + 1;
  const dates = rowDate.getDate();
  return `${year}년 ${months}월 ${dates}일`;
};

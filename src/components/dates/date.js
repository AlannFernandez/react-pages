const DateEs = () => {
  const date = new Date();

  const dateString = date.toLocaleDateString("es-ES", {
    format: "dd/MM/yyyy",
  });

  return dateString;
};

export default DateEs;

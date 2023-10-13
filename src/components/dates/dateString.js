const DateString = () => {
  const date = new Date();

  const monthNames = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const spanishDateString = `${date.getDate()} de ${
    monthNames[date.getMonth()]
  } del ${date.getFullYear()}`;

  return spanishDateString;
};

export default DateString;

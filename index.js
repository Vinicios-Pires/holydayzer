import express, { response } from "express";

const app = express();

app.get("/holidays", (req, res) => {
  const hoje = new Date();
  console.log(hoje.toLocaleDateString());

  const holidays = [
    { date: "01/01/2022", name: "Confraternização mundial" },
    { date: "03/01/2022", name: "Carnaval" },
    { date: "17/04/2022", name: "Páscoa" },
    { date: "21/04/2022", name: "Tiradentes" },
    { date: "01/05/2022", name: "Dia do trabalho" },
    { date: "16/06/2022", name: "Corpus Christi" },
    { date: "07/09/2022", name: "Independência do Brasil" },
    { date: "12/10/2022", name: "Nossa Senhora Aparecida" },
    { date: "02/11/2022", name: "Finados" },
    { date: "15/11/2022", name: "Proclamação da República" },
    { date: "25/12/2022", name: "Natal" },
  ];

  res.send(holidays);
});

app.get("/is-today-holiday", (req, res) => {
  const hoje = new Date();
  //   console.log(hoje.toLocaleDateString());

  const holidays = [
    { date: "01/01/2022", name: "Confraternização mundial" },
    { date: "03/01/2022", name: "Carnaval" },
    { date: "17/04/2022", name: "Páscoa" },
    { date: "21/04/2022", name: "Tiradentes" },
    { date: "01/05/2022", name: "Dia do trabalho" },
    { date: "16/06/2022", name: "Corpus Christi" },
    { date: "07/09/2022", name: "Independência do Brasil" },
    { date: "12/10/2022", name: "Nossa Senhora Aparecida" },
    { date: "02/11/2022", name: "Finados" },
    { date: "15/11/2022", name: "Proclamação da República" },
    { date: "25/12/2022", name: "Natal" },
  ];

  res.send(
    holidays.map((h) =>
      h.date === hoje.toLocaleDateString
        ? `Sim, hoje é ${h.name}`
        : `Não, hoje não é feriado`
    )
  );
});

app.listen(4000);

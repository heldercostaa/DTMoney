import { useTransactions } from "../../hooks/useTransactions";

import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";

import { Container } from "./styles";

export function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.deposits += +transaction.amount;
        acc.total += +transaction.amount;
      } else {
        acc.withdraws += +transaction.amount;
        acc.total -= +transaction.amount;
      }

      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );

  const locale = Intl.DateTimeFormat().resolvedOptions().timeZoneName;

  const deposits = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "USD",
  }).format(summary.deposits);

  const withdraws = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "USD",
  }).format(summary.withdraws);

  const total = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "USD",
  }).format(summary.total);

  return (
    <Container activeColor={summary.total >= 0 ? "green" : "red"}>
      <div>
        <header>
          <p>Income</p>
          <img src={incomeImg} alt="Incomes" />
        </header>
        <strong>{deposits}</strong>
      </div>
      <div>
        <header>
          <p>Outcome</p>
          <img src={outcomeImg} alt="Outcomes" />
        </header>
        <strong>-{withdraws}</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>{total}</strong>
      </div>
    </Container>
  );
}

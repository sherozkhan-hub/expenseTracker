/* eslint-disable react/prop-types */
const Tracker = ({ list }) => {
  let total = 0;
  let expense = 0;
  let income = 0;
  list.forEach((element) => {
    total = total + element.amount;

    if (element.amount < 0) {
      expense = expense + element.amount;
    } else if (element.amount > 0) {
      income = income + element.amount;
    }
  });
  return (
    <section className="p-4 border border-gray-300 rounded shadow-sm">
      <div className="mb-4">
        <h3 className="text-xl font-semibold">Total Balance: {total}</h3>
      </div>
      <table className="w-full border-collapse bg-slate-200">
        <thead>
          <tr>
            <th className="border p-2">Income</th>
            <th className="border p-2">Expense</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2 text-green-600 font-semibold text-center">
              {income}
            </td>
            <td className="border p-2 text-red-600 font-semibold text-center">
              {expense}
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Tracker;

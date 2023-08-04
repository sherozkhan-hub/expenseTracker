import { useRef } from "react";
import Tracker from "./Tracker";

/* eslint-disable react/prop-types */
const Form = ({ list, setList }) => {
  const detail = useRef(null);
  const amount = useRef(null);

  const handleTransaction = (e) => {
    e.preventDefault();
    const obj = {
      detail: detail.current.value,
      amount: Number(amount.current.value),
    };
    setList([...list, obj]);
  };

  return (
    <section className="p-4">
      <Tracker list={list} />
      <form className="mt-4" onSubmit={handleTransaction}>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="detail"
          >
            Transaction Detail
          </label>
          <input
            className="shadow appearance-none border-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="detail"
            ref={detail}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="amount"
          >
            Enter Amount
          </label>
          <input
            className="shadow appearance-none border-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            id="amount"
            ref={amount}
            required
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Add Transaction
        </button>
      </form>
    </section>
  );
};

export default Form;

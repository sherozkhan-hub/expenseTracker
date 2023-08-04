/* eslint-disable react/prop-types */
const History = ({ list, setList }) => {
  // console.log(list);

  const handleDelete = (i) => {
    setList(list.filter((item, index) => index !== i));
  };
  return (
    <div className="p-2 bg-slate-200">
      <h2 className="text-2xl font-semibold my-2">History</h2>
      <ul className="border border-gray-300 rounded shadow-sm overflow-y-scroll max-h-[250px]">
        {list.map((item, index) => (
          <li
            key={index}
            className="p-4 border-b border-gray-300 flex justify-between"
          >
            <div className="flex">
              <p className="text-gray-700">{item.detail}</p>
              <p
                className={`text-green-600 mx-3 font-semibold ${
                  item.amount < 0 ? "text-red-400" : ""
                }`}
              >
                {item.amount}
              </p>
            </div>

            <button
              className="py-1 px-4 rounded-md bg-red-400 text-white"
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;

export default function PodEpControl({ handleChange, value }) {
  return (
    <div className="grid grid-cols-4">
      <label
        htmlFor="podEp"
        className="block col-span-4 font-bold text-gray-700"
      >
        Podcast Episode
      </label>
      <div className="col-span-1">
        <input
          onChange={handleChange}
          value={value}
          type="text"
          name="podEp"
          id="podEp"
          className="block w-full mt-1 border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
    </div>
  );
}

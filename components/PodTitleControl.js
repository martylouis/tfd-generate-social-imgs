export default function PodTitleControl({ handleChange, value }) {
  return (
    <div className="grid grid-cols-4">
      <label
        htmlFor="podTitle"
        className="block col-span-4 font-bold text-gray-700"
      >
        Podcast Title
      </label>
      <div className="col-span-4">
        <input
          onChange={handleChange}
          value={value}
          type="text"
          name="podTitle"
          id="podTitle"
          className="block w-full mt-1 border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
    </div>
  );
}

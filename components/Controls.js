export default function Controls({ ...props }) {
  return (
    <div className="mt-2 space-y-4">
      <div className="grid grid-cols-4">
        <label
          htmlFor="ep_number"
          className="block col-span-4 font-bold text-gray-700"
        >
          Episode Number
        </label>
        <div className="col-span-1">
          <input
            type="text"
            name="ep_number"
            id="ep_number"
            placeholder=""
            className="block w-full mt-1 border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="podcast_title"
          className="block font-bold text-gray-700"
        >
          Podcast Title
        </label>
        <input
          type="text"
          name="podcast_title"
          id="podcast_title"
          placeholder=""
          className="block w-full mt-1 border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label
          htmlFor="podcast_title_size"
          className="block font-bold text-gray-700"
        >
          Podcast Title Size
        </label>
        <select
          id="podcast_title_size"
          name="podcast_title_size"
          className="block w-full py-2 pl-3 pr-10 mt-1 text-base border-gray-300 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          defaultValue="Extra Large"
        >
          <option>Large</option>
          <option>Extra Large</option>
        </select>
      </div>
      <div className="pt-4">
        <button className="inline-flex items-center justify-center w-full text-white bg-blue-600 font-bold rounded h-[42px] text-lg hover:bg-blue-700 focus:bg-blue-800">
          Update
        </button>
      </div>
    </div>
  );
}

export default function Controls({ ...props }) {
  return (
    <div className="mt-2 space-y-6">
      <div className="grid grid-cols-4">
        <label
          htmlFor="podcast_title"
          className="block col-span-4 font-bold text-gray-700"
        >
          Episode Number
        </label>
        <div className="col-span-1">
          <input
            type="text"
            name="podcast_title"
            id="podcast_title"
            placeholder=""
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <button className="inline-flex items-center justify-center w-full text-white bg-blue-600 rounded h-[44px] text-lg hover:bg-blue-700 focus:bg-blue-800">
          Save
        </button>
      </div>
    </div>
  );
}

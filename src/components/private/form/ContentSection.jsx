"use client"

const ContentSection = ({formData, setFormData, setIsContinued}) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <input
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          type="text"
          placeholder="Title"
          className="text-lg resize-none w-full outline-none border-none"
        />
        <div className="flex gap-2 items-center">
          <select
            name=""
            id=""
            className="w-fit text-end border-none outline-none focus:outline-none"
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          >
            <option value="question" className="w-fit">
              Question
            </option>
            <option value="poll" className="w-fit">
              Poll
            </option>
            <option value="discussion" className="w-fit">
              Discussion
            </option>
            <option value="help" className="w-fit">
              Help
            </option>
          </select>
          <span
            className={`${formData.title.length > 120 ? "text-red-500" : ""}`}
          >
            {formData.title.length}/120
          </span>
        </div>
      </div>
      <hr />
      <textarea
        value={formData.content}
        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
        placeholder="Additional content (optional)"
        className="border-none resize-none w-full h-full outline-none"
        rows="10"
      ></textarea>
      <button
        onClick={() => setIsContinued(true)}
        type="button"
        className="bg-blue-200 mb-2 hover:bg-blue-300 w-fit capitalize border rounded-full  transition cursor-pointer
               border-blue-500/25  px-4 py-1"
      >
        Continue
      </button>
    </>
  );
}
 
export default ContentSection;
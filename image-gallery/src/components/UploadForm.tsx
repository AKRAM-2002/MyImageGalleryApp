const UploadForm = () => {
  return (
    <div className="text-center mt-10">
      <form action="" className="flex items-center flex-col">
      <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
    <button className="btn gap-3">Upload</button>
    </form>
    </div>
  )
}

export default UploadForm
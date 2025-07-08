import '../assets/css/sectionloader.css'

const SectionLoading = () => {
  return (
    <div className="spinnerContainer py-10 bg-slate-200">
        <div className="spinner"></div>
        <div className="loader">
            <p>loading</p>
            <div className="words">
            <span className="word">posts</span>
            <span className="word">images</span>
            <span className="word">followers</span>
            <span className="word">hashtags</span>
            <span className="word">posts</span>
            </div>
        </div>
    </div>
  )
}

export default SectionLoading

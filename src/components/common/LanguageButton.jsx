function LanguageButton({ language, isSelected, onClick }) {
  return (
    <div className="languageButton">
      <button 
        type="button" 
        className={`btn ${isSelected ? 'btn-danger text-white' : 'btn-light'} text-nowrap`} 
        onClick={onClick}
      >
        {language}
      </button>
    </div>
  );
}

export default LanguageButton;
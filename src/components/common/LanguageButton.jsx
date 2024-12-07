function LanguageButton({ language, isSelected, onClick }) {
  return (
    <div>
      <button 
        type="button" 
        className={`btn ${isSelected ? 'btn-danger text-white' : 'btn-light'} text-nowrap`}
        style={{minWidth:"74px", fontSize: "13px"}}
        onClick={onClick}
      >
        {language}
      </button>
    </div>
  );
}

export default LanguageButton;
function LanguageButton({ language }) {
  return (
    <div className="languageButton">
      <button type="button" className="btn btn-light text-nowrap">
        {language}
      </button>
    </div>
  );
}

export default LanguageButton
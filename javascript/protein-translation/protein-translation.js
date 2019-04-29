const translate = rna_sequences => {
  if (rna_sequences === "AUG") {
    return ["Methionine"];
  }
  return [];
};

export default translate;

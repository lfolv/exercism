DNA_TO_RNA_NUCLEOTIDE = {
    "G": "C",
    "C": "G",
    "T": "A",
    "A": "U"
}


def to_rna(dna_strand):
    return "".join(DNA_TO_RNA_NUCLEOTIDE[strand] for strand in dna_strand)

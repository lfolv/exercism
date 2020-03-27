CONDON_LENGTH = 3
CONDON_TO_PROTEIN = {
    'AUG': 'Methionine',
    'UUU': 'Phenylalanine',
    'UUC': 'Phenylalanine',
    'UUA': 'Leucine',
    'UUG': 'Leucine',
    'UCU': 'Serine',
    'UCC': 'Serine',
    'UCA': 'Serine',
    'UCG': 'Serine',
    'UAU': 'Tyrosine',
    'UAC': 'Tyrosine',
    'UGU': 'Cysteine',
    'UGC': 'Cysteine',
    'UGG': 'Tryptophan',
    'UAA': 'STOP',
    'UAG': 'STOP',
    'UGA': 'STOP'
}


def proteins(strand):
    current_proteins = []

    for condon in condons(strand):
        protein = CONDON_TO_PROTEIN[condon]

        if protein == 'STOP':
            break

        current_proteins.append(protein)

    return current_proteins


def condons(strand):
    for i in range(0, len(strand), CONDON_LENGTH):
        yield strand[i:i+CONDON_LENGTH]

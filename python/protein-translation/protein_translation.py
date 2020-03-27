from itertools import takewhile

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
    return list(takewhile(
        lambda protein: protein != 'STOP',
        (CONDON_TO_PROTEIN[condon] for condon in condons(strand))
    ))


def condons(strand):
    for i in range(0, len(strand), CONDON_LENGTH):
        yield strand[i:i+CONDON_LENGTH]

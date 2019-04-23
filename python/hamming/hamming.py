"""
hamming module function to calculate the Hamming Distance between two DNA
strands
"""


def distance(strand_a, strand_b):
    """
    Calculate the Hamming Distance between two DNA strands
    """
    if len(strand_a) != len(strand_b):
        raise ValueError("Invalid strands")
    count = 0
    for letter_a, letter_b in zip(strand_a, strand_b):
        if not letter_a == letter_b:
            count += 1
    return count


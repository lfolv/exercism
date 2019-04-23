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
    return len([a for a, b in zip(strand_a, strand_b) if not a == b])

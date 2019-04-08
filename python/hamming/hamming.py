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
    for index, value in enumerate(strand_a):
        if not value == strand_b[index]:
            count += 1
    return count


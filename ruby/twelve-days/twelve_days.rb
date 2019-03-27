class Array
  def to_sentence
    return self[0] if self.size == 1
    "#{self[0...-1].join(', ')}, and #{self[-1]}"
  end
end

class TwelveDays
  NUMBER_OF_SENTENCES = 11
  NUMBERS = %w{first second third fourth fifth sixth seventh eighth ninth tenth eleventh twelfth}
  SENTENCES = [
    'a Partridge in a Pear Tree',
    'two Turtle Doves',
    'three French Hens',
    'four Calling Birds',
    'five Gold Rings',
    'six Geese-a-Laying',
    'seven Swans-a-Swimming',
    'eight Maids-a-Milking',
    'nine Ladies Dancing',
    'ten Lords-a-Leaping',
    'eleven Pipers Piping',
    'twelve Drummers Drumming'
  ]

  def self.song
    (0..NUMBER_OF_SENTENCES).map do |n|
      sentence = SENTENCES[0..n].reverse.to_sentence
      "On the #{NUMBERS[n]} day of Christmas my true love gave to me: #{sentence}.\n"
    end.join("\n")
  end
end

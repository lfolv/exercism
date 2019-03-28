class Array
  def to_sentence
    return self[0] if self.size == 1
    "#{self[0...-1].join(', ')}, and #{self[-1]}"
  end
end

class TwelveDays
  NUMBERS = %w{first second third fourth fifth sixth seventh eighth ninth tenth eleventh twelfth}
  GIFTS = [
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
    (0...GIFTS.length).map do |n|
      gifts = GIFTS[0..n].reverse.to_sentence
      "On the #{NUMBERS[n]} day of Christmas my true love gave to me: #{gifts}.\n"
    end.join("\n")
  end
end

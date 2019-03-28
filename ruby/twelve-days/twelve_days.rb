module Support
  refine Array do
    def to_sentence
      first, *middle, last = self
      return first if self.size == 1
      "#{[first, *middle].join(', ')}, and #{last}"
    end
  end
end

class TwelveDays
  using Support

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

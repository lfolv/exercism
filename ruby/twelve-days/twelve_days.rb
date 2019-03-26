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
    ''.tap do |result|
      (0..NUMBER_OF_SENTENCES).each do |n|
        result << "On the #{NUMBERS[n]} day of Christmas my true love gave to me: "
        result << SENTENCES[1..n].reverse.join(', ')
        result << (n.zero? ? SENTENCES[0] : ", and #{SENTENCES[0]}")
        result << ".\n"
        result << "\n" unless n == NUMBER_OF_SENTENCES
      end
    end
  end
end

class TwelveDays
  NUMBER_OF_SENTENCES = 11
  NUMBERS = %w{first second third fourth fifth sixth seventh eighth ninth tenth eleventh twelfth}
  SENTENCES = [
    'a Partridge in a Pear Tree.',
    'two Turtle Doves, and a Partridge in a Pear Tree.',
    'three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.',
    'four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.',
    'five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.',
    'six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.',
    'seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.',
    'eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.',
    'nine Ladies Dancing, eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.',
    'ten Lords-a-Leaping, nine Ladies Dancing, eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.',
    'eleven Pipers Piping, ten Lords-a-Leaping, nine Ladies Dancing, eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.',
    'twelve Drummers Drumming, eleven Pipers Piping, ten Lords-a-Leaping, nine Ladies Dancing, eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.'
  ]

  def self.song
    ''.tap do |result|
      (0..NUMBER_OF_SENTENCES).each do |n|
        result << "On the #{NUMBERS[n]} day of Christmas my true love gave to me: #{SENTENCES[n]}\n"
        result << "\n" unless n == NUMBER_OF_SENTENCES
      end
    end
  end
end

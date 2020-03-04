module BeerSong
  def self.recite(bottles, takes)
    "".tap do |lyris|
      lyris << "#{bottles} bottles of beer on the wall, #{bottles} bottles of beer.\n"
      lyris << "Take one down and pass it around, #{bottles - 1} bottles of beer on the wall.\n"
    end
  end
end
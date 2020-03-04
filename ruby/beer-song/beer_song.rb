module BeerSong
  def self.recite(bottles, takes)
    "".tap do |lyris|
      case bottles
      when 2
        lyris << "2 bottles of beer on the wall, 2 bottles of beer.\n"
        lyris << "Take one down and pass it around, 1 bottle of beer on the wall.\n"  
      else
        lyris << "#{bottles} bottles of beer on the wall, #{bottles} bottles of beer.\n"
        lyris << "Take one down and pass it around, #{bottles - 1} bottles of beer on the wall.\n"  
      end
    end
  end
end
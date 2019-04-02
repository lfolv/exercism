# ETL (Extract-Transform-Load) class provides methods to handle with legacy
# scrabble scores
#
# @author Lucas Oliveira
class ETL
  # Migrate to new scrabble scores format from a legacy system
  #
  # @author Lucas Oliveira
  #
  # param [Hash] :old_system The data in old format
  #
  # @example Transform a legacy system
  #   ETL.transform({ 1 => ["A"] }) #=> { 'a' => 1 }
  #
  # return [Hash] the system in the new format
  def self.transform(old_system)
    ETL.new(old_system).transform
  end

  # Create a new ETL object
  #
  # @author Lucas Oliveira
  #
  # param [Hash] :old_system The data in old format
  def initialize(old_system)
    @old_system = old_system
  end

  # Transform to a new system format
  #
  # @author Lucas Oliveira
  #
  # @example Transform to a new system
  #   etl = ETL.new({ 1 => ["A"] })
  #   etl.transform #=> { 'a' => 1 }
  #
  # @return [Hash] the system in the new format
  def transform
    old_system.each_with_object({}) do |(key, values), new_system|
      values.each { |value| new_system[value.downcase] = key }
    end
  end

  private

  attr_reader :old_system
end

# ETL (Extract-Transform-Load) class provides methods to handle with legacy
# scrabble scores
#
# @author Lucas Oliveira
class ETL
  # Migrate to new scrabble scores format from a legacy system
  #
  # param [Hash] :old_system The data in old format
  #
  # @example Transform a legacy system
  #   ETL.transform({ 1 => ["A"] }) #=> { 'a' => 1 }
  #
  # return [Hash] the system in the new format
  def self.transform(old_value)
    ETL.new(old_value).transform
  end

  # Create a new ETL object
  #
  # param [Hash] :old_system The data in old format
  def initialize(old_value)
    @old_value = old_value
  end

  # Transform to a new system format
  #
  # @example Transform to a new system
  #   etl = ETL.new({ 1 => ["A"] })
  #   etl.transform #=> { 'a' => 1 }
  #
  # @return [Hash] the system in the new format
  def transform
    old_value.each_with_object({}) do |(key, values), new_value|
      values.each { |value| new_value[value.downcase] = key }
    end
  end

  private

  attr_reader :old_value
end

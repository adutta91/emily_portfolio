class Project < ActiveRecord::Base
  validates :title, :description, :location, :start_date, :end_date, presence: true
end

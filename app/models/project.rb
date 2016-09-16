# == Schema Information
#
# Table name: projects
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  description :text             not null
#  start_date  :date             not null
#  end_date    :date             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  lat         :string
#  lng         :string
#  location    :string
#

class Project < ActiveRecord::Base
  validates :title, :description, :location, :lat, :lng, presence: true
end

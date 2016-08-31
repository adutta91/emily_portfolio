# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


10.times do
  Project.create(
    title: Faker::Lorem.word,
    description: Faker::Lorem.paragraph(3),
    start_date: Faker::Time.between(52.days.ago, 8.days.ago),
    end_date: Faker::Time.between(7.days.ago, Date.today),
    lat: Faker::Address.latitude,
    lng: Faker::Address.longitude
  )
end

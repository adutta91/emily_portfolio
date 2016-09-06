# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


Project.create(
  title: "Sierra Ski Trip",
  description: "A wonderful mountain retreat where we spent our hours skiing,
                cooking, reading and spending copious amounts of time in front
                of the fire and watching the snow fall gently outside. We spent
                the New Year's there, and the fireworks display in the Alpine
                air was brilliant and beautiful and the perfect way to greet the
                future.",
  start_date: "December 2016",
  end_date: "January 2017",
  location: "Kirkwood, CA",
  lat: "38.7023082",
  lng: "-120.0722442"
)

Project.create(
  title: "Wine Tasting",
  description: "We took an introduction to wine tasting class together, trying
                several wines that to our extraordinarily sophisticated palates
                were quite yummy (technical term).",
  start_date: "July 2016",
  end_date: "July 2016",
  location: "Baltimore, MD",
  lat: "39.290385",
  lng: "-76.61218930000001"
)

Project.create(
  title: "Spanish Adventure",
  description: "Nearly rolling in Manchego and jamon serrano, we toured the Spanish
                country, with a homebase in Barcelona. Travelling with only
                backpacks made moving around easier, and we strove to speak only
                Spanish to get around and attempt to experience the country more
                purely in that fashion.",
  start_date: "June 2017",
  end_date: "July 2017",
  location: "Barcelona, Spain",
  lat: "41.3851",
  lng: "2.1734"
)

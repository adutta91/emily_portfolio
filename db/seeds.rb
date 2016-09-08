# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


Project.create(
  title: "Multidisciplinary Global Health Site Evaluation",
  description: "Maternal Mental Health research project conducted by Johns
                Hopkins research team comprising faculty and students from the
                schools of nursing, public health and medicine.",
  start_date: "January 2016",
  end_date: "January 2017",
  lat: "12.634024",
  lng: "-7.999979",
  location: "Bamako, Mali",
  collaborator: "Johns Hopkins University"
)

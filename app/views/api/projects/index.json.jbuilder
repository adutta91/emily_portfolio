json.array! (@projects) do |project|
  json.title project.title
  json.description project.description
  json.location project.location
  json.start_date project.start_date
  json.end_date project.end_date
end

json.array! (@projects) do |project|
  json.title project.title
  json.description project.description
  json.lat project.lat
  json.lng project.lng
  json.location project.location
  json.start_date project.start_date
  json.end_date project.end_date
  json.collaborator project.collaborator
end
